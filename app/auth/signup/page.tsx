'use client';

import { Box, Button, Card, Container, Flex, Grid, Text, TextInput } from '@mantine/core';
import React, { useEffect } from 'react';
import classes from '../../../components/Styles/auth.module.css';
import Link from 'next/link';

function page() {
  return (
    <Container fluid>
      <Flex direction="row" mt={40} align="center" justify={'center'}>
        <Box mt={5}>
          <Text className={classes.auth_text}>COPICOPI</Text>
        </Box>
      </Flex>
      <form className={classes.auth_form}>
        <Grid justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 3.5 }}>
            <TextInput
              placeholder="Name"
              radius={0}
              size="xl"
              className={classes.auth__text__input}
            />
          </Grid.Col>
        </Grid>
        <Grid justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 3.5 }}>
            <TextInput
              h={73}
              placeholder="Email Address"
              radius={0}
              size="xl"
              className={classes.auth__text__input}
            />
          </Grid.Col>
        </Grid>
        <Grid justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 3.5 }}>
            <TextInput
              h={73}
              placeholder="Password"
              radius={0}
              size="xl"
              className={classes.auth__text__input}
            />
          </Grid.Col>
        </Grid>
        <Grid justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 3.5 }}>
            <TextInput
              h={73}
              placeholder="Confirm Password"
              radius={0}
              size="xl"
              className={classes.auth__text__input}
            />
          </Grid.Col>
        </Grid>

        <Grid mt={15} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Button radius={30} size="xl" color="gray.5" fullWidth>
              Signin
            </Button>
          </Grid.Col>
        </Grid>
        <Box style={{ cursor: 'pointer' }} mt={40}>
          <Text style={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link href="/auth/login">
              <span style={{ color: 'teal' }}>Signin</span>
            </Link>
          </Text>
        </Box>
      </form>
    </Container>
  );
}

export default page;
