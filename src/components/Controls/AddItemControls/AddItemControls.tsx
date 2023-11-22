import React, { useState, useEffect } from 'react';
import { Stack, Tabs, Tab as MuiTab } from '@mui/material';
import { ControlsContainer } from 'src/components/Controls/components/ControlsContainer';
import { Section } from 'src/components/Controls/components/Section';
import { useUiStateStore } from 'src/stores/uiStateStore';
import { IconSelection } from './IconSelection';
import { Library } from './Library';

const tabs = {
  ICONS: 'ICONS',
  ITEM_LIBRARY: 'ITEM_LIBRARY'
} as const;

type Tab = keyof typeof tabs;

export const AddItemControls = () => {
  const [tab, setTab] = useState<Tab>('ICONS');
  const uiStateActions = useUiStateStore((state) => {
    return state.actions;
  });

  useEffect(() => {
    switch (tab) {
      case 'ICONS':
        uiStateActions.setMode({
          type: 'PLACE_ICON',
          showCursor: true,
          id: null
        });
        break;
      case 'ITEM_LIBRARY':
        uiStateActions.setMode({
          type: 'PLACE_ITEM',
          showCursor: true,
          id: null,
          iconId: null
        });
        break;
      default:
        break;
    }
  }, [tab, uiStateActions]);

  useEffect(() => {
    return () => {
      uiStateActions.setMode({
        type: 'CURSOR',
        showCursor: true,
        mousedownItem: null
      });
    };
  }, [uiStateActions]);

  return (
    <ControlsContainer
      header={
        <Section sx={{ position: 'sticky', top: 0, pt: 3, pb: 0 }}>
          <Stack spacing={2}>
            <Tabs
              value={tab}
              onChange={(e, newValue) => {
                setTab(newValue as Tab);
              }}
            >
              <MuiTab value={tabs.ICONS} label="Icons" />
              <MuiTab value={tabs.ITEM_LIBRARY} label="Item library" />
            </Tabs>
          </Stack>
        </Section>
      }
    >
      {tab === 'ICONS' && <IconSelection />}
      {tab === 'ITEM_LIBRARY' && <Library />}
    </ControlsContainer>
  );
};
