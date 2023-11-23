import { config as v0_0_0 } from 'src/migrations/scripts/0.0.0/config';
import { config as v1_0_12 } from 'src/migrations/scripts/1.0.12/config';
import { model as v0_0_0Model } from 'src/migrations/scripts/0.0.0/schemas/tests/fixtures/model';
import { MigrationConfig } from '../types';
import { migrate } from '../migrationUtils';

const migrations: MigrationConfig[] = [v0_0_0, v1_0_12];

describe('0.0.0-to-1.0.12 migration tests', () => {
  test('0.0.0-to-1.0.12 migration', () => {
    const migratedModel = migrate(v0_0_0Model, migrations);

    const view = migratedModel.views[0];

    expect(view.connectors?.[0].anchors[0].ref.item).toEqual(view.items[0].id);
    expect(view.connectors?.[0].anchors[1].ref.item).toEqual(view.items[1].id);
    expect(view.items[0].modelItem).toBe(v0_0_0Model.views[0].items[0].id);
    expect(view.items[0].id).toBeDefined();
    expect(migratedModel.version).toBe('1.0.12');
  });
});
