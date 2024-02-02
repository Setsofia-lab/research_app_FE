'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Box, Card, Container, Flex, Grid, Loader, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';
import SideBarMethodology from '@/components/Generate/_SideBarMethodology';
import { IconArrowDown } from '@tabler/icons-react';
function page() {
  return (
    <MainLayout>
      <Container size="xl">
        <Flex mb={30}>
          <Box>
            <Text className={classes.generate__header}>Thesis Generator - Methodology</Text>
          </Box>
        </Flex>
        <Grid>
          <Grid.Col span={{ lg: 4 }}>
            <SideBarMethodology header="Methodology Generator" />
          </Grid.Col>
          <Grid.Col span={{ lg: 8 }}>
            <Flex direction="column" p={20} className={classes.generated__flex}>
              <Card w={'100%'} withBorder>
                <Flex align="center" direction="column" justify="center">
                  <Text fw="bold" lh={2} size="xl">
                    Quantitative Methodology
                  </Text>
                  <Text size="sm" ta="center">
                    1. "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto.
                  </Text>
                  <Text size="sm" ta="center">
                    2. vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur
                  </Text>
                  <Text size="sm" ta="center">
                    3. magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet,
                  </Text>
                  <Text fw="bold" mt={20} size="xl">
                    Approach
                  </Text>
                  <Flex mb={50} align="center" direction="column" mt={50}>
                    <Card h={80} w={270} bg="#eee"></Card>
                    <IconArrowDown size={29} />
                    <Card h={130} w={270} bg="#eee"></Card>
                    <IconArrowDown size={29} />
                    <Card h={150} w={270} bg="#eee"></Card>
                  </Flex>
                </Flex>
              </Card>
              <Flex justify="center" direction="column" align="center" mt={50}>
                <Loader color="#000000" />
                <Text>Generating</Text>
              </Flex>
              <ButtonGenerate
                regenerate={{ title: 'Regenerate', link: '/generate/literaturereview/regenerate' }}
                next={{ title: 'Next', link: '/generate/results' }}
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
