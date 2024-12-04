import { Router } from 'express';
import { authenticate } from '../middleware/authenticate';
import { validateRequest } from '../middleware/validateRequest';
import { CropController } from '../controllers/crop.controller';
import { createCropSchema, updateCropSchema } from '../schemas/crop.schema';

const router = Router();
const cropController = new CropController();

router.get('/', cropController.getAllCrops);
router.get('/:id', cropController.getCropById);
router.post('/', authenticate, validateRequest(createCropSchema), cropController.createCrop);
router.put('/:id', authenticate, validateRequest(updateCropSchema), cropController.updateCrop);
router.delete('/:id', authenticate, cropController.deleteCrop);

export const cropRoutes = router;