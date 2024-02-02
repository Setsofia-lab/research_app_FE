'use client';
import { MainLayout } from '@/components/AppShell/AppShell';
import { Box, Card, Container, Flex, Grid, Loader, Text } from '@mantine/core';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import ButtonGenerate from '@/components/Generate/_Button';
import SideBar from '@/components/Generate/_SideBar';
import SideBarReferences from '@/components/Generate/_SideBarRes';
import SideBarAppendix from '@/components/Generate/_SideBarAppendix';

function page() {
  return (
    <MainLayout>
      <Container size="xl">
        <Flex mb={30}>
          <Box>
            <Text className={classes.generate__header}>Thesis Generator - Appendix</Text>
          </Box>
        </Flex>
        <Grid>
          <Grid.Col span={{ lg: 4 }}>
            <SideBarAppendix header="Appendix Generator" />
          </Grid.Col>
          <Grid.Col span={{ lg: 8 }}>
            <Flex direction="column" p={20} className={classes.generated__flex}>
              <Card w={'100%'} withBorder>
                <Flex align="center" direction="column" justify="center">
                  <Text size="md" ta="start">
                    **Appendix A: Glossary of Keywords**
                  </Text>
                  <Text size="md" mt={20} mb={20} ta="justify">
                    This appendix provides a comprehensive glossary of keywords and key terms used
                    throughout the research thesis. These keywords have been instrumental in framing
                    and defining the scope of the study, ensuring clarity and precision in the
                    analysis and discussion.
                  </Text>
                  <Text size="md" ta="justify">
                    1. **Artificial Intelligence (AI):** Refers to the simulation of human
                    intelligence in computer systems.
                  </Text>
                  <Text size="md" ta="justify">
                    2. **Machine Learning (ML):** A subset of AI, it involves the development of
                    algorithms that enable systems to learn and improve from experience.
                  </Text>
                  <Text size="md" ta="justify">
                    3. **Deep Learning:** A subfield of ML, involving neural networks with multiple
                    layers, used for complex pattern recognition.
                  </Text>
                  <Text size="md" ta="justify">
                    4. **Natural Language Processing (NLP):** The field that focuses on enabling
                    computers to understand, interpret, and generate human language.
                  </Text>
                  <Text size="md" ta="justify">
                    5. **Data Mining:** The process of discovering patterns, trends, and insights
                    from large datasets.
                  </Text>
                  <Text size="md" ta="justify">
                    6. **Big Data:** Refers to datasets that are too large or complex for
                    traditional data processing applications.
                  </Text>
                  <Text size="md" ta="justify">
                    7. **Algorithm:** A step-by-step set of operations to perform a specific task or
                    solve a particular problem.
                  </Text>
                  <Text size="md" ta="justify">
                    8. **Regression Analysis:** A statistical method used to model relationships
                    between variables.
                  </Text>
                  <Text size="md" ta="justify">
                    9. **Supervised Learning:** A type of ML where the model is trained on labeled
                    data.
                  </Text>
                  <Text size="md" ta="justify">
                    10. **Unsupervised Learning:** ML approach where the model learns from unlabeled
                    data, identifying patterns independently.
                  </Text>
                  <Text size="md" ta="justify">
                    11. **Clustering:** A technique in unsupervised learning that groups similar
                    data points together.
                  </Text>
                  <Text size="md" ta="justify">
                    12. **Feature Engineering:** The process of selecting and transforming variables
                    (features) to improve model performance.
                  </Text>
                  <Text size="md" ta="justify">
                    13. **Clustering:** A technique in unsupervised learning that groups similar
                    data ......
                  </Text>
                </Flex>
              </Card>
              <Flex justify="center" direction="column" align="center" mt={50}>
                <Loader color="#000000" />
                <Text>Re-generating</Text>
              </Flex>
              <ButtonGenerate
                regenerate={{ title: 'Regenerate', link: '/generate/appendix/regenerate' }}
                next={{ title: 'Next', link: '/generate/appendix' }}
                edit={{ title: 'Edit', link: '/generate/appendix/edit' }}
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </MainLayout>
  );
}

export default page;
