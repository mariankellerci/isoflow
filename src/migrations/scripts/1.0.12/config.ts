import {
  Model as PrevModel,
  View as PrevView,
  Connector as PrevConnector
} from 'src/migrations/scripts/0.0.0/schemas/types';
import {
  Model,
  View,
  Connector,
  ViewItem,
  ConnectorAnchor
} from 'src/schemas/types';
import { modelSchema } from 'src/schemas/model';
import { generateId } from 'src/utils';
import { MigrationConfig } from '../../types';

const version = '1.0.12';

const migrateConnector = (
  connector: PrevConnector,
  newViewItems: ViewItem[]
): Connector => {
  const anchors = connector.anchors.reduce<ConnectorAnchor[]>((acc, anchor) => {
    if (!anchor.ref.item) {
      return [...acc, anchor];
    }

    const targetViewItem = newViewItems.find((item) => {
      return item.modelItem === anchor.ref.item;
    });

    if (!targetViewItem) {
      return acc;
    }

    return [...acc, { ...anchor, ref: { item: targetViewItem.id } }];
  }, []);

  return { ...connector, anchors };
};

const migrateView = (view: PrevView): View => {
  const items = view.items.map((item) => {
    return { ...item, id: generateId(), modelItem: item.id };
  });

  const connectors = view.connectors
    ? view.connectors.map((connector) => {
        return migrateConnector(connector, items);
      })
    : undefined;

  return { ...view, items, connectors };
};

export const config: MigrationConfig = {
  version,
  migrateUp: (model: PrevModel): Model => {
    const views = model.views.map(migrateView);

    return { ...model, version, views };
  },
  test: (model) => {
    modelSchema.parse(model);
  }
};
