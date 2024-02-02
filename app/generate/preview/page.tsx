'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Button, Card, Container, Flex, Loader, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';

export default function page() {
  return (
    <MainLayout>
      <Container>
        <Flex mt={30} direction="column" p={20}>
          <Card bg="#D9D9D9" w={'100%'} p={100}>
            <Flex align="center" direction="column" justify="center">
              <Text fs={'20px'}>**[Your University Logo]**</Text>
              <Text fs={'20px'} mt={30}>
                **[University Name]**
              </Text>
              <Text fs={'20px'} mt={30}>
                **[Department of Your Major]**
              </Text>
              <Text fs={'20px'} mt={30}>
                **Title of Your Thesis**
              </Text>
              <Text fs={'20px'} mt={30}>
                *Subtitle (if applicable)*
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                A Thesis Submitted in Partial Fulfillment of the Requirements for the Degree of
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                **[Your Degree, e.g., Master of Science]**
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                By
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                **[Your Full Name]**
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                Advisor: **[Your Advisor's Full Name]**
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                [Month, e.g., May] [Year, e.g., 2023]
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                **[City, State (if applicable)]**
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                _ _ _ _
              </Text>

              <Text ta="center" fs={'20px'} mt={30}>
                Copyright © [Year, e.g., 2023]
              </Text>
              <Text>by</Text>
              <Text ta="center" fs={'20px'}>
                [Your Full Name]
              </Text>
              <Text ta="center" fs={'20px'} mt={30}>
                All Rights Reserved
              </Text>
            </Flex>
          </Card>

          <ButtonGenerate
            regenerate={{ title: 'Regenerate', link: '#' }}
            next={{ title: 'Next', link: '/generate/abstract' }}
            edit={{ title: 'Edit', link: '#' }}
          />
        </Flex>
      </Container>
    </MainLayout>
  );
}
