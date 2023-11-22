import { StoreApi } from 'zustand';
import type { Model } from 'src/schemas/types';

export type ModelStore = Model & {
  actions: {
    get: StoreApi<ModelStore>['getState'];
    set: StoreApi<ModelStore>['setState'];
  };
};
