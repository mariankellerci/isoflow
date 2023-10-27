import { z } from 'zod';
import { id, constrainedStrings, coords } from './common';
import { rectangleSchema } from './annotations/rectangle';
import { connectorSchema } from './annotations/connector';
import { textBoxSchema } from './annotations/textBox';

export const viewItemSchema = z.object({
  id,
  tile: coords,
  labelHeight: z.number().optional()
});

export const viewSchema = z.object({
  id,
  name: constrainedStrings.name,
  description: constrainedStrings.description.optional(),
  items: z.array(viewItemSchema),
  rectangles: z.array(rectangleSchema).optional(),
  connectors: z.array(connectorSchema).optional(),
  textBoxes: z.array(textBoxSchema).optional()
});

export const viewsSchema = z.array(viewSchema);
