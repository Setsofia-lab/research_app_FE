import { Box, Flex, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/auth.module.css';

function Logo() {
  return (
    <Box mt={5}>
      <Flex justify="center">
        <Text className={classes.auth_text}>COPI</Text>
        <Text className={classes.auth_text2}>COPI</Text>
      </Flex>
    </Box>
  );
}

export default Logo;
