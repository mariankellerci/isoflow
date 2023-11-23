import type { MigrationConfig } from '../../types';
import { modelSchema } from './schemas/model';

export const config: MigrationConfig = {
  version: '0.0.0',
  test: (model) => {
    modelSchema.parse(model);
  }
};
