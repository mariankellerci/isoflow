import type { Model } from 'src/schemas/types';
import type { EditorModeEnum, MainMenuOptions } from './common';
import { UiState } from './ui';

export type InitialData = Model & {
  fitToView?: boolean;
  view?: string;
};

export interface IsoflowProps {
  initialData?: InitialData;
  mainMenuOptions?: MainMenuOptions;
  onModelUpdated?: (Model: Model) => void;
  width?: number | string;
  height?: number | string;
  enableDebugTools?: boolean;
  editorMode?: keyof typeof EditorModeEnum;
  onInteraction?: (uiState: UiState) => void;
}
