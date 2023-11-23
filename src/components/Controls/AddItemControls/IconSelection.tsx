import React, { useCallback } from 'react';
import { Alert } from '@mui/material';
import { useIconFiltering } from 'src/hooks/useIconFiltering';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { useIconCategories } from 'src/hooks/useIconCategories';
import { Icon } from 'src/types';
import { Section } from 'src/components/Controls/components/Section';
import { Searchbox } from 'src/components/Controls/AddItemControls/Searchbox';
import { Icons } from './Icons';
import { IconGrid } from './IconGrid';

export const IconSelection = () => {
  const { setFilter, filteredIcons, filter } = useIconFiltering();
  const { iconCategories } = useIconCategories();

  const uiStateActions = useUiStateStore((state) => {
    return state.actions;
  });

  const mode = useUiStateStore((state) => {
    return state.mode;
  });

  const onMouseDown = useCallback(
    (icon: Icon) => {
      if (mode.type !== 'PLACE_ICON') return;

      uiStateActions.setMode({
        type: 'PLACE_ICON',
        showCursor: true,
        id: icon.id
      });
    },
    [mode, uiStateActions]
  );

  return (
    <>
      <Alert severity="info">Drag and drop icons below onto the canvas.</Alert>

      <Section>
        <Searchbox value={filter} onChange={setFilter} />
      </Section>

      {filteredIcons && (
        <Section>
          <IconGrid icons={filteredIcons} onMouseDown={onMouseDown} />
        </Section>
      )}

      {!filteredIcons && (
        <Icons iconCategories={iconCategories} onMouseDown={onMouseDown} />
      )}
    </>
  );
};
