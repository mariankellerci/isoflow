import { produce } from 'immer';
import { ModeActions } from 'src/types';
import { generateId, getItemAtTile } from 'src/utils';
import { VIEW_ITEM_DEFAULTS } from 'src/config';

export const PlaceIcon: ModeActions = {
  mousemove: () => {},
  mousedown: ({ uiState, scene, isRendererInteraction }) => {
    if (uiState.mode.type !== 'PLACE_ICON' || !isRendererInteraction) return;

    if (!uiState.mode.id) {
      const itemAtTile = getItemAtTile({
        tile: uiState.mouse.position.tile,
        scene
      });

      uiState.actions.setMode({
        type: 'CURSOR',
        mousedownItem: itemAtTile,
        showCursor: true
      });

      uiState.actions.setItemControls(null);
    }
  },
  mouseup: ({ uiState, scene }) => {
    if (uiState.mode.type !== 'PLACE_ICON') return;

    if (uiState.mode.id !== null) {
      const viewItemId = generateId();
      const modelItemId = generateId();

      scene.createModelItem({
        id: modelItemId,
        name: 'Untitled',
        icon: uiState.mode.id
      });

      scene.createViewItem({
        ...VIEW_ITEM_DEFAULTS,
        id: viewItemId,
        modelItem: modelItemId,
        tile: uiState.mouse.position.tile
      });
    }

    uiState.actions.setMode(
      produce(uiState.mode, (draft) => {
        draft.id = null;
      })
    );
  }
};
