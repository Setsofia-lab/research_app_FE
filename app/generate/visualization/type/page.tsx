'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Button, Card, Container, Flex, Loader, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';

export default function page() {
  return (
    <MainLayout>
      <Container>
        <Flex
          style={{ border: '1px solid #eee', borderRadius: 10 }}
          mt={30}
          direction="column"
          p={20}
        >
          <Text mt={30} mb={15} size="lg" fw="bold">
            Table 1
          </Text>
          <Card withBorder w={'100%'} p={100}>
            <Flex h={350} align="center" direction="column" justify="center"></Flex>
          </Card>

          <ButtonGenerate
            regenerate={{ title: 'Regenerate', link: '#' }}
            next={{ title: 'Next', link: '/generate/visualization' }}
            edit={{ title: 'Edit', link: '#' }}
          />
        </Flex>
      </Container>
    </MainLayout>
  );
}
