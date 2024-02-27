'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Box, Card, Container, Flex, Grid, Loader, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import SideBar from '@/components/Generate/_SideBar';
import ButtonGenerate from '@/components/Generate/_Button';

function page() {
  return (
    <MainLayout>
      <Container size="xl">
        <Flex mb={30}>
          <Box>
            <Text className={classes.generate__header}>Title Page Generator</Text>
          </Box>
        </Flex>
        <Grid>
          <Grid.Col span={{ lg: 4 }}>
            <SideBar header=" Title Page Generator" />
          </Grid.Col>
          <Grid.Col span={{ lg: 8 }}>
            <Flex direction="column" p={20} className={classes.generated__flex}>
              <Card w={'100%'} p={100} withBorder>
                <Flex align="center" direction="column" justify="center">
                  <Text size="sm">**[Your University Logo]**</Text>
                  <Text size="sm" mt={30}>
                    **[University Name]**
                  </Text>
                  <Text size="sm" mt={30}>
                    **[Department of Your Major]**
                  </Text>
                  <Text size="sm" mt={30}>
                    **Title of Your Thesis**
                  </Text>
                  <Text size="sm" mt={30}>
                    *Subtitle (if applicable)*
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    A Thesis Submitted in Partial Fulfillment of the Requirements for the Degree of
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    **[Your Degree, e.g., Master of Science]**
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    By
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    **[Your Full Name]**
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    Advisor: **[Your Advisor's Full Name]**
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    [Month, e.g., May] [Year, e.g., 2023]
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    **[City, State (if applicable)]**
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    _ _ _ _
                  </Text>

                  <Text ta="center" size="sm" mt={30}>
                    Copyright © [Year, e.g., 2023]
                  </Text>
                  <Text>by</Text>
                  <Text ta="center" size="sm">
                    [Your Full Name]
                  </Text>
                  <Text ta="center" size="sm" mt={30}>
                    All Rights Reserved
                  </Text>
                </Flex>
              </Card>
              <Flex justify="center" direction="column" align="center" mt={50}>
                <Loader color="#000000" />
                <Text size="sm">Generating</Text>
              </Flex>
              <ButtonGenerate
                regenerate={{ title: 'Regenerate', link: '#' }}
                next={{ title: 'Next', link: '/generate/preview' }}
                edit={{ title: 'Edit', link: '#' }}
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
}

export default page;
