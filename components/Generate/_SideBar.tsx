import { Box, Button, Card, Flex, Text, TextInput, Textarea } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';

interface Props {
  header: string;
}
function SideBar({ header }: Props) {
  return (
    <div>
      <Card className={classes.generate__card}>
        <Flex mb={30}>
          <IconArrowLeft stroke={1.6} size={26} />
        </Flex>
        <Box>
          <Text fw="bold" size="md">
            {header}
          </Text>
          <Text mt={14} size="xs">
            There is no one who loves pain itself, who seeks after it and wants to have it, simply
            because it is pain..
          </Text>
        </Box>
        <Flex mt={10}>
          <TextInput
            className={classes.generate__input}
            flex={{ lg: 1 }}
            size="md"
            label={
              <Text fw="500" style={{ color: '#374151' }} size={'xs'}>
                Course Domain
              </Text>
            }
            placeholder="Eg - Political Science, Engineering"
          />
        </Flex>
        <Flex mt={10}>
          <Textarea
            className={classes.generate__textarea}
            rows={4}
            flex={{ lg: 1 }}
            size="md"
            label={
              <Text fw="500" style={{ color: '#374151' }} size={'xs'}>
                Describe your research Topic
              </Text>
            }
            placeholder="Female empowerment and the effects of low child birth among working class females in Sub-Saharan Africa"
          />
        </Flex>
        <Flex mt={10}>
          <TextInput
            className={classes.generate__input}
            flex={{ lg: 1 }}
            size="md"
            label={
              <Text fw="500" style={{ color: '#374151' }} size={'xs'}>
                Keywords
              </Text>
            }
            placeholder="Female Empowerment"
          />
        </Flex>
        <Flex mt={10}>
          <TextInput
            className={classes.generate__input}
            flex={{ lg: 1 }}
            size="md"
            label={
              <Text fw="500" style={{ color: '#374151' }} size={'xs'}>
                Content length
              </Text>
            }
            placeholder="Short (1000 - 5000 words)"
          />
        </Flex>
        <Flex mt={60} mb={60}>
          <Button bg="#888888" className={classes.generate__btn} size="md" fullWidth>
            Generate
          </Button>
        </Flex>
      </Card>
    </div>
  );
}

export default SideBar;
