import type { MigrationConfig } from '../../types';
import { modelSchema } from './schemas/model';

export const config: MigrationConfig = {
  version: '1.0.11',
  test: (model) => {
    modelSchema.parse(model);
  }
};
