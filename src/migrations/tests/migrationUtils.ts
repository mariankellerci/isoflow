import { MigrationConfig } from '../types';
import {
  versionToNumber,
  getCurrentMigration,
  getMigrationPath
} from '../utils';

const availableMigrations: MigrationConfig[] = [
  {
    version: '1.0.1',
    test: async () => {}
  },
  {
    version: '1.11.111',
    test: async () => {}
  },
  {
    version: '2.0.0',
    test: async () => {}
  }
];

describe('Migration manager tests', () => {
  test('getVersionValue()', () => {
    const versionNumbers = availableMigrations.map((migration) => {
      return versionToNumber(migration.version);
    });

    expect(versionNumbers[0]).toBe(1000001);
    expect(versionNumbers[1]).toBe(1011111);
    expect(versionNumbers[2]).toBe(2000000);
  });

  test('getTargetMigration()', () => {
    const testVersions = [
      '1.0.0',
      '1.0.1',
      '1.11.0',
      '1.12.1',
      '2.0.0',
      '2.0.1'
    ];

    const startMigrations = testVersions.map((version) => {
      return getCurrentMigration(version, availableMigrations);
    });

    expect(startMigrations[0]).toBe(undefined);
    expect(startMigrations[1]).toBe(availableMigrations[0]);
    expect(startMigrations[2]).toBe(availableMigrations[0]);
    expect(startMigrations[3]).toBe(availableMigrations[1]);
    expect(startMigrations[4]).toBe(availableMigrations[2]);
    expect(startMigrations[5]).toBe(availableMigrations[2]);
  });

  test('getMigrationPath() throws an error if no migration path is found', () => {
    const testVersion = '1.0.0';

    const migrationPath = () => {
      return getMigrationPath({ version: testVersion }, availableMigrations);
    };

    expect(migrationPath).toThrow();
  });

  test('getMigrationPath() finds migration paths correctly for models above the first migration', () => {
    const testVersions = ['1.0.1', '1.12.1', '2.0.0', '2.0.1'];

    const migrationPaths = testVersions.map((version) => {
      return getMigrationPath({ version }, availableMigrations);
    });

    expect(migrationPaths[0]).toStrictEqual([
      availableMigrations[1],
      availableMigrations[2]
    ]);
    expect(migrationPaths[1]).toStrictEqual([availableMigrations[2]]);
    expect(migrationPaths[2]).toStrictEqual([]);
    expect(migrationPaths[3]).toStrictEqual([]);
  });
});
