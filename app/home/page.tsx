'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Text,
  TextInput,
  rem,
} from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_home.module.css';
import { IconBook, IconChartBar, IconEdit } from '@tabler/icons-react';
import { Each } from '@/components/Each/Each';
import Link from 'next/link';

function page() {
  const options = [
    {
      label: 'Thesis Generator',
      link: '/generate',
      icon: <IconEdit size={60} />,
    },
    {
      label: 'Data Visualization',
      link: '',
      icon: <IconChartBar size={60} />,
    },
    {
      label: 'Plagiarism Checker',
      link: '',
      icon: <IconBook size={60} />,
    },
  ];

  const features = [
    {
      label: 'Abstract Generation',
      link: '',
    },
    {
      label: 'Introduction',
      link: '',
    },
    {
      label: 'Methodology ',
      link: '',
    },
    {
      label: 'Literature Review',
      link: '',
    },
    {
      label: 'Data Visualization',
      link: '',
    },
    {
      label: 'Discussions',
      link: '',
    },
    {
      label: 'Conclusion',
      link: '',
    },
    {
      label: 'Referencing',
      link: '',
    },
    {
      label: 'Appendix',
      link: '',
    },
  ];

  const select = (
    <Link href="/generate">
      <Button
        color="#D9D9D9"
        style={{
          fontWeight: 500,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          top: 0,
          height: 40.7,
          color: 'black',
          zIndex: 50,
          left: -70.8,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          marginRight: rem(-80),
        }}
      >
        Generate
      </Button>
    </Link>
  );

  return (
    <MainLayout>
      <Container>
        <Flex
          className={classes.home__flex}
          direction="column"
          align="center"
          mt={80}
          justify="center"
        >
          <Text className={classes.head} size="xl">
            Lorem Ipsum
          </Text>
          <Text className={classes.text}>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit....
          </Text>
        </Flex>
        <Flex className={classes.home__flex} mt={30} align="center" justify="center">
          <TextInput
            flex={{ lg: 0.8 }}
            size="md"
            w={'100%'}
            radius={50}
            placeholder="Input your research topic to start writing your thesis paper"
            rightSection={select}
          />
        </Flex>
        <Flex justify="center" wrap="wrap" gap={20} mt={50}>
          <Each
            of={options}
            render={(item: { label: string; icon: any }, index: number) => (
              <Flex gap={15} direction="column">
                <Link className={classes.home__card__link} href="/generate">
                  <Card className={classes.options__card} p={50} bg="#D9D9D9">
                    {item.icon}
                  </Card>
                  <Text size="sm" mt={2} ta="center">
                    {item.label}
                  </Text>
                </Link>
              </Flex>
            )}
          />
        </Flex>
        <Box mb={30} mt={50}>
          <Text fw="500">All features</Text>

          <Flex justify="center" wrap="wrap" gap={20} mt={20}>
            <Flex gap={10} wrap="wrap">
              <Each
                of={features}
                render={(items: { label: string }, index: number) => (
                  <Button
                    color="black"
                    className={classes.feature__btn}
                    size="lg"
                    radius="xl"
                    variant="outline"
                  >
                    {items.label}
                  </Button>
                )}
              />
            </Flex>
          </Flex>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default page;
