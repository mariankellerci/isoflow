import { produce } from 'immer';
import { ModeActions } from 'src/types';
import { getItemAtTile } from 'src/utils';
import { VIEW_ITEM_DEFAULTS } from 'src/config';

export const PlaceItem: ModeActions = {
  mousemove: () => {},
  mousedown: ({ uiState, scene, isRendererInteraction }) => {
    if (uiState.mode.type !== 'PLACE_ITEM' || !isRendererInteraction) return;

    if (!uiState.mode.iconId) {
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
    if (uiState.mode.type !== 'PLACE_ITEM') return;

    if (uiState.mode.id !== null) {
      scene.createViewItem({
        ...VIEW_ITEM_DEFAULTS,
        id: uiState.mode.id,
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
