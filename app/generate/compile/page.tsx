'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Box, Button, Card, Container, Flex, Loader, Text } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';

import { IconPhoto, IconPrinter, IconCameraSelfie } from '@tabler/icons-react';
import { Accordion, rem } from '@mantine/core';
import { Each } from '@/components/Each/Each';

const list = [
  'Abstract',
  'Introduction',
  'Literature Review',
  'Methodology',
  'Results',
  'Discussion',
  'Conclusion',
  'References',
  'Appendix',
];
function DisplayData() {
  return (
    <Accordion style={{ borderRadius: 10 }} bg="white">
      <Each
        of={list}
        render={(results: string) => (
          <Accordion.Item p={13} value={results}>
            <Accordion.Control style={{ borderRadius: 33, top: 33 }}>{results}</Accordion.Control>
            <Accordion.Panel>Content</Accordion.Panel>
          </Accordion.Item>
        )}
      />
    </Accordion>
  );
}

export default function page() {
  return (
    <MainLayout>
      <Container size="md">
        <Flex mt={30} direction="column" p={20}>
          <Card flex={1} bg="#D9D9D9" w={'100%'}>
            <Text size="xl" fw="bold" ta="center" py={30}>
              Thesis Paper Summary
            </Text>
            <Box mb={100}>
              <DisplayData />
            </Box>
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
