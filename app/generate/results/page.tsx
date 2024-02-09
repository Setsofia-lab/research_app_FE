'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Box, Card, Container, Flex, Grid, Loader, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';
import { IconArrowDown, IconUpload } from '@tabler/icons-react';
import SideBarResults from '@/components/Generate/_SideBarResults';
function page() {
  return (
    <MainLayout>
      <Container size="xl">
        <Flex mb={30}>
          <Box>
            <Text className={classes.generate__header}>Thesis Generator - Results</Text>
          </Box>
        </Flex>
        <Grid>
          <Grid.Col span={{ lg: 4 }}>
            <SideBarResults header="Visualizations Generator" />
          </Grid.Col>
          <Grid.Col span={{ lg: 8 }}>
            <Flex direction="column" wrap="wrap" p={20} className={classes.generated__flex}>
              <Card p={250} withBorder>
                <Flex align="center" wrap="wrap" direction="column" justify="center">
                  <IconUpload size={30} />
                  <Text mt={5}>Import</Text>
                </Flex>
              </Card>
              <Flex justify="center" direction="column" align="center" mt={50}>
                <Loader color="#000000" />
                <Text>Generating</Text>
              </Flex>
              <ButtonGenerate
                regenerate={{ title: 'Regenerate', link: '/generate/literaturereview/regenerate' }}
                next={{ title: 'Next', link: '/generate/visualization/type' }}
                edit={{ title: 'Edit', link: '/generate/literaturereview/edit' }}
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
}

export default page;
