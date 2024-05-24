'use client';
import { Box, Button, Card, Container, Flex, Grid, Text, TextInput } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from '../../../components/Styles/auth.module.css';
import Link from 'next/link';
import { useForm } from '@mantine/form';
import { useAuth } from '@/store/useAuth';
import Logo from '@/components/AppShell/Logo';
import { redirect } from 'next/navigation';

type props = {
  email: string;
  password: string;
};

function page() {
  const { login, authenticated, setToken, loading, setLoader } = useAuth((state) => state);
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 2 ? 'Invalid password' : null),
    },
  });

  if (authenticated) {
    return redirect('/home');
  }

  const handleLogin = async (e: props) => {
    try {
      const ress: any = await login({ ...e });
      setToken({ token: ress.data.token, authenticated: true, loading: false });
    } catch (er: any) {
      // console.log(er.response);
      // console.log(er.response.data.non_field_errors[0]);
      form.setFieldError('password', er.response.data.non_field_errors[0]);
      setToken({ token: '', authenticated: false, loading: false });
    } finally {
      setLoader({ loading: false });
    }
  };

  // useEffect(() => {
  // },[])

  return (
    <Container className={classes.main__css} fluid>
      <Flex direction="row" mt={40} justify={'center'}>
        <Logo />
      </Flex>
      <form onSubmit={form.onSubmit((e: props) => handleLogin(e))} className={classes.auth_form}>
        <Grid p={0} m={0} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <TextInput
              {...form.getInputProps('email')}
              placeholder="Email Address"
              radius={0}
              className={classes.auth__f}
              size="xl"
            />
          </Grid.Col>
        </Grid>
        <Grid p={0} m={0} mt={10} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <TextInput
              {...form.getInputProps('password')}
              placeholder="Password"
              radius={0}
              type="password"
              className={classes.auth__f}
              size="xl"
            />
            <Text className={classes.auth__forgot__password}>Forgot password?</Text>
          </Grid.Col>
        </Grid>
        <Grid mt={10} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Button loading={loading} type="submit" radius={30} size="xl" color="#2563EB" fullWidth>
              <Text size="sm" className={classes.auth__login__btn}>
                Login
              </Text>
            </Button>
          </Grid.Col>
        </Grid>
        <Box style={{ cursor: 'pointer' }} mt={40}>
          <Text style={{ textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link href="/auth/signup">
              <span style={{ color: 'teal' }}>SignUp</span>
            </Link>
          </Text>
        </Box>
      </form>
    </Container>
  );
}

export default page;
