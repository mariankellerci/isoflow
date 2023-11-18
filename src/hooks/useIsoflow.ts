import { useModelStore } from 'src/stores/modelStore';
import { useUiStateStore } from 'src/stores/uiStateStore';

export const useIsoflow = () => {
  const model = useModelStore((state) => {
    return state;
  });

  const uiState = useUiStateStore((state) => {
    return {
      actions: state.actions
    };
  });

  return {
    model,
    uiState
  };
};
