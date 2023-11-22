import { Model as PrevModel } from 'src/migrations/scripts/1.0.11/schemas/types';
import { Model } from 'src/schemas/types';
import { modelSchema } from 'src/schemas/model';
import { MigrationConfig } from '../../types';

export const config: MigrationConfig = {
  version: '1.0.12',
  migrateUp: <Prev = PrevModel, New = Model>(model: Prev): New => {
    return model;
  },
  test: (model) => {
    modelSchema.parse(model);
  }
};
