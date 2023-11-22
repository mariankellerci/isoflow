import React from 'react';
import { Card, Typography, Box, Stack, ButtonBase } from '@mui/material';
import { useModelItem } from 'src/hooks/useModelItem';
import { useIcon } from 'src/hooks/useIcon';

interface Props {
  id: string;
  onMouseDown: (item: string, icon: string) => void;
}

export const LibraryItem = ({ id, onMouseDown }: Props) => {
  const modelItem = useModelItem(id);
  const { icon } = useIcon(modelItem.icon);

  return (
    <ButtonBase
      sx={{ width: '100%' }}
      onMouseDown={() => {
        onMouseDown(modelItem.id, icon.id);
      }}
    >
      <Card sx={{ p: 2, width: '100%' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ width: 40, height: 40 }} component="img" src={icon.url} />
          <Typography>{modelItem.name}</Typography>
        </Stack>
      </Card>
    </ButtonBase>
  );
};
