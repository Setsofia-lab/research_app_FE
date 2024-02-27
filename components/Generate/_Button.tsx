import { Button, Flex } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  next: { title: string; link: string };
  regenerate: { title: string; link: string };
  edit: { title: string; link: string; disable?: boolean };
}

function ButtonGenerate({ next, regenerate = { title: 'Regenerate', link: '' }, edit }: Props) {
  return (
    <Flex gap={10} justify="right" mt={80}>
      <Link href={regenerate?.link}>
        <Button color="blue.0" radius={10} fw="normal" size="sm" variant="outline">
          {regenerate.title}
        </Button>
      </Link>

      <Link href={edit?.disable ? '#' : edit?.link}>
        <Button color="blue.0" radius={10} fw="normal" variant="outline">
          {edit.title}
        </Button>
      </Link>

      <Link href={next?.link}>
        <Button
          leftSection={<IconArrowLeft size={17} />}
          rightSection={<IconArrowRight size={17} />}
          radius={10}
          fw="normal"
          color="blue.0"
          variant="outline"
        >
          {next.title}
        </Button>
      </Link>
    </Flex>
  );
}

export default ButtonGenerate;
