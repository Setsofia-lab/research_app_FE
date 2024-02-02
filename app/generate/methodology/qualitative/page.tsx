'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Box, Card, Container, Flex, Grid, Loader, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';
import SideBarMethodology from '@/components/Generate/_SideBarMethodology';
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
                    Qualitative Methodology
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
                  <Text size="sm" ta="center">
                    1. consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt
                    ut labore et dolore magnam aliquam quaerat
                  </Text>
                  <Text size="sm" ta="center">
                    2. voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid
                  </Text>
                  <Text size="sm" ta="center">
                    3. ex ea commodi consequatur? Quis autem vel eum iure
                  </Text>
                  <Text size="sm" ta="center">
                    4. reprehenderit qui in ea voluptate velit esse quam nihil molestiae
                    consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                  </Text>
                  <Text size="sm" ta="center">
                    5. 1914 translation by H. RackhamBut I must explain to you how all this mistaken
                    idea of denouncing pleasure and praising pain was
                  </Text>
                  <Text size="sm" ta="center">
                    6. born and I will give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the master-builder of human
                    happiness. No one rejects, dislikes, or
                  </Text>
                  <Text size="sm" ta="center">
                    7. avoids pleasure itself, because it is pleasure, but because those who do not
                    know how to pursue pleasure rationally encounter
                  </Text>
                  <Text size="sm" ta="center">
                    8. consequences that are extremely painful. Nor again is there anyone who loves
                    or pursues or desires to obtain pain of itself, because it is pain, but because
                    occasionally circumstances occur in which toil
                  </Text>
                  <Text size="sm" ta="center">
                    9. and pain can procure him some great pleasure. To take a trivial example,
                    which of us ever undertakes laborious physical exercise,
                  </Text>
                  <Text size="sm" ta="center">
                    10. except to obtain some advantage from it? But who has any right to find fault
                    with a man who chooses to enjoy a pleasure that has no
                  </Text>
                  <Text size="sm" ta="center">
                    11. annoying consequences, or one who avoids a pain that produces no resultant
                    pleasure?"
                  </Text>
                  <Text size="sm" ta="center">
                    12. "But I must explain to you how all this mistaken idea of denouncing pleasure
                    and praising pain was born and I will give you a complete account of the system,
                    and expound the actual teachings of the
                  </Text>
                  <Text size="sm" ta="center">
                    13. great explorer of the truth, the master-builder of human happiness. No one
                    rejects, dislikes, or avoids pleasure itself, because it is
                  </Text>
                  <Text size="sm" ta="center">
                    14. pleasure, but because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                  </Text>
                  <Text size="sm" ta="center">
                    15. who chooses to enjoy a pleasure that has no annoying consequences, or one
                    who avoids a pain that produces no resultant pleasure?"
                  </Text>
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
