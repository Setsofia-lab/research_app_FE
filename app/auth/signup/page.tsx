'use client';

import { Box, Button, Card, Container, Flex, Grid, Text, TextInput } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from '../../../components/Styles/auth.module.css';
import Link from 'next/link';
import { useAuth } from '@/store/useAuth';
import { useForm } from '@mantine/form';
import { redirect } from 'next/navigation';
import { AppAlert } from '@/components/Alert/Alert';

type props = {
  email: string;
  name: string;
  password: string;
};

function page() {
  const [loading, setLoading] = useState<boolean>(false);
  const { signup } = useAuth((state) => state);
  const [showAlert, setAlert] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      name: (value) => (value.length < 2 ? 'name field is required' : null),
      password: (value) => (value.length < 2 ? 'password too short!' : null),
    },
  });

  const handleLogin = async (e: props) => {
    setLoading(true);
    try {
      const ress: any = await signup({ ...e });
      if (ress.status == 201) {
        window.location.href = '/auth/login';
        setLoading(false);
      }
    } catch (er: any) {
      console.log(er.response);
      // console.log(er.response.data.non_field_errors[0]);
      form.setFieldError('password', er.response.data.non_field_errors[0]);
      setLoading(false);
    }
  };

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setAlert(false);
    }, 5000); // 5 seconds in milliseconds

    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <Container className={classes.main__css} fluid>
      <Flex direction="row" mt={40} align="center" justify={'center'}>
        <Box mt={5}>
          <Text className={classes.auth_text}>COPICOPI</Text>
        </Box>
      </Flex>
      <form onSubmit={form.onSubmit((e: props) => handleLogin(e))} className={classes.auth_form}>
        <Grid p={0} m={0} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            {showAlert && <AppAlert />}
            <TextInput
              {...form.getInputProps('name')}
              className={classes.auth__f}
              placeholder="Name"
              radius={0}
              size="xl"
            />
          </Grid.Col>
        </Grid>
        <Grid p={0} m={0} mt={10} justify="center">
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
        <Grid mt={10} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <TextInput
              {...form.getInputProps('password')}
              placeholder="Password"
              radius={0}
              type="password"
              className={classes.auth__f}
              size="xl"
            />
          </Grid.Col>
        </Grid>

        <Grid mt={15} justify="center">
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
            <Button loading={loading} type="submit" radius={30} size="xl" color="#2563EB" fullWidth>
              <Text size="sm" className={classes.auth__login__btn}>
                Signup
              </Text>
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
