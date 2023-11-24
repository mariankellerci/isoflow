import { produce } from 'immer';
import { model as modelFixture } from 'src/schemas/tests/fixtures/model';
import { ViewItem, Connector } from 'src/types';
import { connectorPathTileToGlobal } from 'src/utils';
import * as viewItemReducers from '../viewItem';
import * as connectorReducers from '../connector';

const scene = {
  connectors: {},
  textBoxes: {}
};

describe('View item reducers works correctly', () => {
  test('View item is created correctly', () => {
    const newItem: ViewItem = {
      id: 'newViewItem',
      modelItem: modelFixture.items[0].id,
      tile: {
        x: 0,
        y: 0
      }
    };

    const newState = viewItemReducers.createViewItem(newItem, {
      viewId: modelFixture.views[0].id,
      state: {
        model: modelFixture,
        scene
      }
    });

    const view = newState.model.views[0];

    expect(view.items[0]).toStrictEqual(newItem);
  });

  test('View items are deleted correctly', () => {
    const newState = viewItemReducers.deleteViewItem('viewItem1', {
      viewId: modelFixture.views[0].id,
      state: {
        model: modelFixture,
        scene
      }
    });

    const newState2 = viewItemReducers.deleteViewItem('viewItem3', {
      viewId: modelFixture.views[0].id,
      state: newState
    });

    const view = newState2.model.views[0];

    expect(view.items[0].id).toStrictEqual('viewItem2');
    expect(view.items.length).toStrictEqual(1);
  });

  test('View item is updated correctly', () => {
    const newItem: ViewItem = {
      id: 'newViewItem',
      modelItem: modelFixture.items[0].id,
      tile: {
        x: 0,
        y: 0
      },
      labelHeight: 0
    };

    const stateWithNewItem = viewItemReducers.createViewItem(newItem, {
      viewId: modelFixture.views[0].id,
      state: {
        model: modelFixture,
        scene
      }
    });

    const newState2 = viewItemReducers.updateViewItem(
      { id: 'newViewItem', tile: { x: 100, y: 100 }, labelHeight: 100 },
      {
        viewId: modelFixture.views[0].id,
        state: stateWithNewItem
      }
    );

    const view = newState2.model.views[0];

    expect(view.items[0]).toStrictEqual({
      id: 'newViewItem',
      modelItem: 'modelItem1',
      tile: { x: 100, y: 100 },
      labelHeight: 100
    });
  });

  test('View item creation fails if model item reference is invalid', () => {
    const newItem: ViewItem = {
      id: 'newViewItem',
      modelItem: 'invalidModelItem',
      tile: {
        x: 0,
        y: 0
      }
    };

    const getNewState = () => {
      return viewItemReducers.createViewItem(newItem, {
        viewId: modelFixture.views[0].id,
        state: {
          model: modelFixture,
          scene
        }
      });
    };

    expect(getNewState).toThrow();
  });

  test('Updating view item position also recalculates associated connector paths', () => {
    const connector = modelFixture.views?.[0].connectors?.[0] as Connector;
    const model = produce(modelFixture, (draft) => {
      draft.views[0].connectors = [];
    });

    const newState = connectorReducers.createConnector(connector, {
      viewId: model.views[0].id,
      state: {
        model,
        scene
      }
    });

    const { path } = newState.scene.connectors[connector.id];
    const globalPathTiles = path.tiles.map((tile) => {
      return connectorPathTileToGlobal(tile, path.rectangle.from);
    });

    expect(path.rectangle.from).toStrictEqual({
      x: 1,
      y: 5
    });
    expect(globalPathTiles[0]).toStrictEqual({
      x: 0,
      y: 0
    });
    expect(globalPathTiles[4]).toStrictEqual({
      x: 0,
      y: 4
    });
  });
});
