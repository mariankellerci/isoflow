import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { IsoflowProps } from 'src/types';
import {
  setWindowCursor,
  modelFromModelStore,
  uiStateFromUiStateStore
} from 'src/utils';
import { useModelStore } from 'src/stores/modelStore';
import { GlobalStyles } from 'src/styles/GlobalStyles';
import { Renderer } from 'src/components/Renderer/Renderer';
import { UiOverlay } from 'src/components/UiOverlay/UiOverlay';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { INITIAL_DATA, MAIN_MENU_OPTIONS } from 'src/config';
import { useInitialDataManager } from 'src/hooks/useInitialDataManager';
import { useIsoflow } from 'src/hooks/useIsoflow';
import { IsoflowProvider } from './stores/IsoflowProvider';

const IsoflowConsumer = ({
  initialData,
  mainMenuOptions = MAIN_MENU_OPTIONS,
  width = '100%',
  height = '100%',
  onModelUpdated,
  enableDebugTools = false,
  editorMode = 'EDITABLE',
  onInteraction
}: IsoflowProps) => {
  const uiState = useUiStateStore((state) => {
    return state;
  });
  const initialDataManager = useInitialDataManager();
  const model = useModelStore((state) => {
    return modelFromModelStore(state);
  });

  const { load } = initialDataManager;

  useEffect(() => {
    load({ ...INITIAL_DATA, ...initialData });
  }, [initialData, load]);

  useEffect(() => {
    uiState.actions.setEditorMode(editorMode);
    uiState.actions.setMainMenuOptions(mainMenuOptions);
  }, [editorMode, uiState.actions, mainMenuOptions]);

  useEffect(() => {
    return () => {
      setWindowCursor('default');
    };
  }, []);

  useEffect(() => {
    if (!initialDataManager.isReady || !onModelUpdated) return;

    onModelUpdated(model);
  }, [model, initialDataManager.isReady, onModelUpdated]);

  useEffect(() => {
    uiState.actions.setEnableDebugTools(enableDebugTools);
  }, [enableDebugTools, uiState.actions]);

  useEffect(() => {
    if (!onInteraction) return;

    onInteraction(uiStateFromUiStateStore(uiState));
  }, [uiState, onInteraction]);

  if (!initialDataManager.isReady) return null;

  return (
    <>
      <GlobalStyles />
      <Box
        sx={{
          width,
          height,
          position: 'relative',
          overflow: 'hidden',
          transform: 'translateZ(0)'
        }}
      >
        <Renderer />
        <UiOverlay />
      </Box>
    </>
  );
};

const Isoflow = (props: IsoflowProps) => {
  return (
    <IsoflowProvider>
      <Isoflow {...props} />
    </IsoflowProvider>
  );
};

export * from 'src/standaloneExports';
export { useIsoflow, IsoflowProvider, IsoflowConsumer };
export default Isoflow;
