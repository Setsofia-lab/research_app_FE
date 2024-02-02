import { MainLayout } from '@/components/AppShell/AppShell';
import ButtonGenerate from '@/components/Generate/_Button';
import { Container } from '@mantine/core';
import React from 'react';

function page() {
  return (
    <MainLayout>
      <Container>
        Generate Visualization - Edit
        <ButtonGenerate
          regenerate={{ title: 'Regenerate', link: '#' }}
          next={{ title: 'Next', link: '/generate/visualization' }}
          edit={{ title: 'Edit', link: '/generate/visualization/edit' }}
        />
      </Container>
    </MainLayout>
  );
}

export default page;
