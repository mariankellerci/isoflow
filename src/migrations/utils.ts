import { MigrationConfig, AnyModel } from './types';

export const versionToNumber = (version: string) => {
  const versionFragments = version.split('.');

  const versionValue = versionFragments.reduce((acc, val) => {
    return `${acc}${val.padStart(3, '0')}`;
  }, '');

  return parseInt(versionValue, 10);
};

export const getCurrentMigration = (
  modelVersion: string,
  migrations: MigrationConfig[]
): MigrationConfig | undefined => {
  const modelVersionNumber = versionToNumber(modelVersion);

  const currentMigration = migrations.find((migration, i) => {
    const currentMigrationVersion = versionToNumber(migration.version);

    if (i === migrations.length - 1) {
      if (modelVersionNumber >= currentMigrationVersion) {
        return true;
      }

      return false;
    }

    const nextMigrationVersion = versionToNumber(migrations[i + 1].version);
    const isBetween = Boolean(
      modelVersionNumber >= currentMigrationVersion &&
        modelVersionNumber < nextMigrationVersion
    );

    return isBetween;
  });

  return currentMigration;
};

export const getMigrationPath = (
  model: AnyModel,
  migrations: MigrationConfig[]
): MigrationConfig[] => {
  if (!model.version || model.version === '') {
    throw new Error('Could not migrate the model.');
  }

  const currentMigration = getCurrentMigration(model.version, migrations);

  if (!currentMigration) throw new Error('Could not migrate the model.');

  const startIndex = migrations.indexOf(currentMigration);

  if (startIndex === -1) {
    throw new Error('Could not migrate the model.');
  }

  if (startIndex === migrations.length - 1) return [];

  const migrationPath = migrations.slice(startIndex + 1);

  return migrationPath;
};
