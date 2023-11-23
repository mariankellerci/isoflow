import { Model } from 'src/types';
import { AnyModel, MigrationConfig } from './types';
import { getMigrationPath } from './utils';
import { migrations } from './scripts';

export const migrate = (model: AnyModel, _migrations: MigrationConfig[]) => {
  const migrationPath = getMigrationPath(model, _migrations);

  const migratedModel = migrationPath.reduce<unknown>((acc, migration) => {
    const newModel = migration.migrateUp ? migration.migrateUp(acc) : model;
    migration.test(newModel);

    return newModel;
  }, model);

  return migratedModel as Model;
};

export const migrateModel = (model: AnyModel) => {
  return migrate(model, migrations);
};
