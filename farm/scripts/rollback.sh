#!/bin/bash

# Rollback script for production deployments

# Get the previous deployment version
PREVIOUS_VERSION=$(aws ecs describe-services \
  --cluster production \
  --services farmers-market \
  --query 'services[0].deployments[1].taskDefinition' \
  --output text)

if [ -z "$PREVIOUS_VERSION" ]; then
  echo "No previous version found"
  exit 1
fi

# Rollback to the previous version
aws ecs update-service \
  --cluster production \
  --service farmers-market \
  --task-definition "$PREVIOUS_VERSION" \
  --force-new-deployment

echo "Rolling back to version: $PREVIOUS_VERSION"

# Wait for deployment to complete
aws ecs wait services-stable \
  --cluster production \
  --services farmers-market

echo "Rollback complete"