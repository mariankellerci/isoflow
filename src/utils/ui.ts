import { UiStateStore, UiState } from 'src/types';

export const uiStateFromUiStateStore = (
  uiStateStore: UiStateStore
): UiState => {
  const { actions, ...rest } = uiStateStore;

  return rest;
};
