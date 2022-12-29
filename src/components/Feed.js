import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { Sidebar, Videos } from './';

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #30475E',
          px: { sx: 0, md: 2 },
        }}
      >
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#30475E' }}
        >
          <Sidebar />
          &copy;Copyright 2023 Kevin E.
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          New <span style={{ color: '#C1A57B' }}>videos</span>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
