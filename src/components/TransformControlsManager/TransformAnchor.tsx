import React, { useState, useEffect, useCallback, useRef } from 'react';
import { produce } from 'immer';
import { Coords } from 'src/types';
import { useTheme, Box } from '@mui/material';
import { getIsoProjectionCss } from 'src/utils';
import { Svg } from 'src/components/Svg/Svg';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { TRANSFORM_ANCHOR_SIZE, TRANSFORM_CONTROLS_COLOR } from 'src/config';

interface Props {
  position: Coords;
  onMouseDown: () => void;
}

const strokeWidth = 2;

export const TransformAnchor = ({ position, onMouseDown }: Props) => {
  const prevIsHoveredStateRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const mode = useUiStateStore((state) => {
    return state.mode;
  });
  const uiActions = useUiStateStore((state) => {
    return state.actions;
  });
  const theme = useTheme();

  const toggleCursor = useCallback(
    (state: boolean) => {
      const newMode = produce(mode, (draft) => {
        draft.showCursor = state;
      });

      uiActions.setMode(newMode);
    },
    [mode, uiActions]
  );

  useEffect(() => {
    if (prevIsHoveredStateRef.current !== isHovered) {
      prevIsHoveredStateRef.current = isHovered;
      toggleCursor(!isHovered);
    }
  }, [isHovered, toggleCursor]);

  return (
    <Box
      onMouseOver={() => {
        setIsHovered(true);
      }}
      onMouseOut={() => {
        setIsHovered(false);
      }}
      onMouseDown={onMouseDown}
      sx={{
        position: 'absolute',
        transform: getIsoProjectionCss(),
        width: TRANSFORM_ANCHOR_SIZE,
        height: TRANSFORM_ANCHOR_SIZE
      }}
      style={{
        left: position.x - TRANSFORM_ANCHOR_SIZE / 2,
        top: position.y - TRANSFORM_ANCHOR_SIZE / 2
      }}
    >
      <Svg
        style={{
          width: TRANSFORM_ANCHOR_SIZE,
          height: TRANSFORM_ANCHOR_SIZE
        }}
      >
        <g transform={`translate(${strokeWidth}, ${strokeWidth})`}>
          <rect
            fill={
              isHovered
                ? theme.palette.primary.dark
                : theme.palette.common.white
            }
            width={TRANSFORM_ANCHOR_SIZE - strokeWidth * 2}
            height={TRANSFORM_ANCHOR_SIZE - strokeWidth * 2}
            stroke={TRANSFORM_CONTROLS_COLOR}
            strokeWidth={strokeWidth}
            rx={3}
          />
        </g>
      </Svg>
    </Box>
  );
};
