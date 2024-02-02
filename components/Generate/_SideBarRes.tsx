import { Box, Button, Card, CardSection, Flex, Text, TextInput, Textarea } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import React from 'react';
import classes from '@/components/Styles/_generate.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { Each } from '../Each/Each';

interface Props {
  header: string;
}
function SideBarReferences({ header }: Props) {
  const pathname = usePathname();
  const navigate = useRouter();

  const list = [
    { label: 'Referencing Type 1' },
    { label: 'Referencing Type 1' },
    { label: 'Referencing Type 1' },
    { label: 'Referencing Type 1' },
    { label: 'Referencing Type 1' },
  ];

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
          <Text mt={14} size="sm">
            There is no one who loves pain itself, who seeks after it and wants to have it, simply
            because it is pain..
          </Text>
        </Box>
        <Flex direction="column" mt={30}>
          <Text size="sm">Select Referencing Type</Text>
          <Each
            of={list}
            render={(results: { label: string }) => (
              <Button
                onClick={() => navigate.push('/generate/methodology/qualitative')}
                style={{
                  border:
                    pathname === '/generate/methodology/qualitative'
                      ? '3px solid black'
                      : '1px solid black',
                  fontSize: '15px',
                }}
                mt={15}
                size="lg"
                radius="lg"
                variant="outline"
                color="black"
                fw="normal"
              >
                <Text size="sm">{results.label}</Text>
              </Button>
            )}
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

export default SideBarReferences;
