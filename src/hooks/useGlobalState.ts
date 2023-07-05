import { create } from "zustand";
import { SceneI } from "../validation/SceneSchema";
import { Node } from "../renderer/elements/Node";
import { Coords } from "../renderer/elements/Coords";
import { Renderer } from "../renderer/Renderer";
import { OnSceneChange, SceneEventI } from "../types";

interface GlobalState {
  showContextMenuFor: Node | Coords | null;
  onSceneChange: OnSceneChange;
  setOnSceneChange: (onSceneChange: OnSceneChange) => void;
  initialScene: SceneI;
  setInitialScene: (scene: SceneI) => void;
  selectedSideNavItem: number | null;
  setSelectedSideNavItem: (index: number) => void;
  closeSideNav: () => void;
  renderer: Renderer;
  selectedElements: string[];
  setRenderer: (containerEl: HTMLDivElement) => Renderer;
  onRendererEvent: (event: SceneEventI) => void;
}

export const useGlobalState = create<GlobalState>((set, get) => ({
  showContextMenuFor: null,
  selectedElements: [],
  selectedSideNavItem: null,
  onSceneChange: () => {},
  setOnSceneChange: (onSceneChange) => set({ onSceneChange }),
  initialScene: {
    icons: [],
    nodes: [],
    connectors: [],
    groups: [],
  },
  setInitialScene: (scene) => {
    set({ initialScene: scene });
  },
  setSelectedSideNavItem: (val) => {
    set({ selectedSideNavItem: val });
  },
  closeSideNav: () => {
    set({ selectedSideNavItem: null });
  },
  renderer: new Renderer(document.createElement("div")),
  onRendererEvent: (event) => {
    const { renderer } = get();

    switch (event.type) {
      case "TILE_SELECTED":
        set({ showContextMenuFor: event.data.tile, selectedElements: [] });
        break;
      case "NODES_SELECTED":
        set({ selectedElements: event.data.nodes });

        if (event.data.nodes.length === 1) {
          const node = renderer.sceneElements.nodes.getNodeById(
            event.data.nodes[0]
          );
          set({ showContextMenuFor: node });
        }
        break;
      case "NODE_REMOVED":
        set({
          showContextMenuFor: null,
          selectedElements: [],
          selectedSideNavItem: null,
        });
        break;
      case "NODE_MOVED":
        set({ showContextMenuFor: null, selectedElements: [] });
        break;
      case "ZOOM_CHANGED":
        set({ showContextMenuFor: null, selectedElements: [] });
        break;
      default:
        break;
    }
  },
  setRenderer: (containerEl) => {
    set((state) => {
      if (state.renderer) {
        state.renderer.destroy();
      }

      const scene = state.initialScene;
      const renderer = new Renderer(containerEl);

      renderer.setEventHandler(state.onRendererEvent);
      renderer.loadScene(scene);
      renderer.setZoom(state.renderer.zoom);

      return { renderer };
    });

    return get().renderer;
  },
}));
