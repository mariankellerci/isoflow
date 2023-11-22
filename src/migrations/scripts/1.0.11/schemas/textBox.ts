import { z } from 'zod';
import { id, coords, constrainedStrings } from './common';

const textBoxOrientationOptions = ['X', 'Y'] as const;

export const textBoxSchema = z.object({
  id,
  tile: coords,
  content: constrainedStrings.name,
  fontSize: z.number().optional(),
  orientation: z.enum(textBoxOrientationOptions).optional()
});
