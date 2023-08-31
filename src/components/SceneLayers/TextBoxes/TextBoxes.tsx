import React from 'react';
import { textBoxInputToTextBox } from 'src/utils';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { useSceneStore } from 'src/stores/sceneStore';
import { TEXTBOX_DEFAULTS } from 'src/config';
import { TextBox } from './TextBox';

export const TextBoxes = () => {
  const mode = useUiStateStore((state) => {
    return state.mode;
  });
  const mouse = useUiStateStore((state) => {
    return state.mouse;
  });
  const itemControls = useUiStateStore((state) => {
    return state.itemControls;
  });
  const textBoxes = useSceneStore((state) => {
    return state.textBoxes;
  });

  return (
    <>
      {textBoxes.map((textBox) => {
        return (
          <TextBox
            textBox={textBox}
            isSelected={
              itemControls?.type === 'TEXTBOX' && itemControls.id === textBox.id
            }
          />
        );
      })}
      {mode.type === 'TEXTBOX' && (
        <TextBox
          textBox={textBoxInputToTextBox({
            id: 'temp-textbox',
            ...TEXTBOX_DEFAULTS,
            tile: mouse.position.tile
          })}
          isSelected
        />
      )}
    </>
  );
};
