import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { IsoflowProps } from 'src/types';
import { ModelProvider } from 'src/stores/modelStore';
import { SceneProvider } from 'src/stores/sceneStore';
import { theme } from 'src/styles/theme';
import { UiStateProvider } from 'src/stores/uiStateStore';

type IsoflowProviderProps = IsoflowProps & {
  children: React.ReactNode;
};

export const IsoflowProvider = ({ children }: IsoflowProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ModelProvider>
        <SceneProvider>
          <UiStateProvider>{children}</UiStateProvider>
        </SceneProvider>
      </ModelProvider>
    </ThemeProvider>
  );
};
