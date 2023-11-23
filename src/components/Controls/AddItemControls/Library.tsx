import React, { useCallback } from 'react';
import { Stack, Alert } from '@mui/material';
import { useModelStore } from 'src/stores/modelStore';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { Section } from '../components/Section';
import { LibraryItem } from './LibraryItem';

export const Library = () => {
  const items = useModelStore((state) => {
    return state.items;
  });

  const mode = useUiStateStore((state) => {
    return state.mode;
  });

  const uiStateActions = useUiStateStore((state) => {
    return state.actions;
  });

  const onMouseDown = useCallback(
    (item: string, icon: string) => {
      if (mode.type !== 'PLACE_ITEM') return;

      uiStateActions.setMode({
        type: 'PLACE_ITEM',
        showCursor: true,
        id: item,
        iconId: icon
      });
    },
    [mode, uiStateActions]
  );

  return (
    <>
      <Alert severity="info">
        Make multiple instances of a node from here. All instances will be
        linked to the template.
      </Alert>
      <Section>
        <Stack spacing={2}>
          {items.map((item) => {
            return <LibraryItem id={item.id} onMouseDown={onMouseDown} />;
          })}
        </Stack>
      </Section>
    </>
  );
};
