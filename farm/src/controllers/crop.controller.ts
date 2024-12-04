import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { AppError } from '../lib/errors';
import { DemandPredictionService } from '../services/demandPrediction.service';
import { PricingService } from '../services/pricing.service';

export class CropController {
  private demandPredictionService = new DemandPredictionService();
  private pricingService = new PricingService();

  async getAllCrops(req: Request, res: Response) {
    const { region, type } = req.query;
    const crops = await prisma.crop.findMany({
      where: {
        ...(region && { region: String(region) }),
        ...(type && { type: String(type) })
      },
      include: {
        farmer: {
          select: {
            id: true,
            name: true,
            rating: true
          }
        }
      }
    });

    // Enhance crops with real-time pricing and demand data
    const enhancedCrops = await Promise.all(
      crops.map(async (crop) => {
        const demandScore = await this.demandPredictionService.predictDemand(crop.id);
        const dynamicPrice = await this.pricingService.calculateDynamicPrice(
          crop.basePrice,
          demandScore
        );

        return {
          ...crop,
          currentPrice: dynamicPrice,
          demandScore
        };
      })
    );

    res.json(enhancedCrops);
  }

  async getCropById(req: Request, res: Response) {
    const { id } = req.params;
    const crop = await prisma.crop.findUnique({
      where: { id },
      include: {
        farmer: {
          select: {
            id: true,
            name: true,
            rating: true
          }
        }
      }
    });

    if (!crop) {
      throw new AppError('Crop not found', 404);
    }

    res.json(crop);
  }

  async createCrop(req: Request, res: Response) {
    const { farmerId } = req.user;
    const crop = await prisma.crop.create({
      data: {
        ...req.body,
        farmerId
      }
    });

    res.status(201).json(crop);
  }

  async updateCrop(req: Request, res: Response) {
    const { id } = req.params;
    const { farmerId } = req.user;

    const crop = await prisma.crop.findUnique({
      where: { id }
    });

    if (!crop) {
      throw new AppError('Crop not found', 404);
    }

    if (crop.farmerId !== farmerId) {
      throw new AppError('Unauthorized', 403);
    }

    const updatedCrop = await prisma.crop.update({
      where: { id },
      data: req.body
    });

    res.json(updatedCrop);
  }

  async deleteCrop(req: Request, res: Response) {
    const { id } = req.params;
    const { farmerId } = req.user;

    const crop = await prisma.crop.findUnique({
      where: { id }
    });

    if (!crop) {
      throw new AppError('Crop not found', 404);
    }

    if (crop.farmerId !== farmerId) {
      throw new AppError('Unauthorized', 403);
    }

    await prisma.crop.delete({
      where: { id }
    });

    res.status(204).send();
  }
}