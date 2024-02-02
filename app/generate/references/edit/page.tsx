'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Box, Card, Container, Flex, Grid, Loader, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';
import SideBar from '@/components/Generate/_SideBar';
import SideBarReferences from '@/components/Generate/_SideBarRes';

function page() {
  return (
    <MainLayout>
      <Container size="xl">
        <Flex mb={30}>
          <Box>
            <Text className={classes.generate__header}>Thesis Generator Referencing</Text>
          </Box>
        </Flex>
        <Grid>
          <Grid.Col span={{ lg: 4 }}>
            <SideBarReferences header="References Generator" />
          </Grid.Col>
          <Grid.Col span={{ lg: 8 }}>
            <Flex direction="column" p={20} className={classes.generated__flex}>
              <Card w={'100%'} withBorder>
                <Flex align="center" direction="column" justify="center">
                  <Text size="md" ta="justify">
                    1. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    2. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    3. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    4. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    5. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    6. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    7. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    8. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    9. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    10. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    11. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    12. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    13. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    14. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                  <Text size="md" ta="justify">
                    15. Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45
                    BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    dolorem
                  </Text>
                </Flex>
              </Card>
              <Flex justify="center" direction="column" align="center" mt={50}>
                <Loader color="#000000" />
                <Text>Generating</Text>
              </Flex>
              <ButtonGenerate
                regenerate={{ title: 'Regenerate', link: '/generate/references/regenerate' }}
                next={{ title: 'Next', link: '/generate/references' }}
                edit={{ title: 'Edit', link: '/generate/references/edit' }}
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
}

export default page;
