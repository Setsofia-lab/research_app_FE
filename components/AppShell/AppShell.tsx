'use client';
import { AppShell, Burger, Button, Flex, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Logo from './Logo';
import classes from '@/components/Styles/sidenav.module.css';
import { useRouter } from 'next/navigation';
import { nprogress } from '@mantine/nprogress';

export function MainLayout({ children }: any) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useRouter();

  const SideList = [
    {
      label: 'Dashboard',
      link: '/home',
    },
    {
      label: 'Projects',
      link: '',
    },
    {
      label: 'Settings',
      link: '',
    },
    {
      label: 'Help & Support',
      link: '',
    },
  ];

  return (
    <AppShell
      navbar={{ width: { lg: 250, xl: 300 }, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Navbar bg="blue.0" p="md">
        <Logo />

        <Flex gap={10} direction="column" mt={50}>
          {SideList.map((results, index) => (
            <Button
              onClick={() => {
                nprogress.start();
                navigate.push(results.link);
                nprogress.complete();
              }}
              className={classes.sidenav__btns}
              key={index}
              variant="outline"
              bg="white"
              radius={15}
              size="md"
              fullWidth
            >
              <Text color="dark" size="xs" fw="normal">
                {results.label}
              </Text>
            </Button>
          ))}
        </Flex>
        <Button
          className={classes.sidenav__btns}
          variant="outline"
          color="black"
          size="lg"
          radius={15}
          bg={'white'}
          mt={'100%'}
          fullWidth
        >
          <Text size="sm" fw="normal">
            Logout
          </Text>
        </Button>
        {/* {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))} */}
      </AppShell.Navbar>
      <AppShell.Main>
        <Flex gap={10} justify="end">
          <Button radius={15} bg="blue.0" size="md">
            <Text size="xs">Refer to earn</Text>
          </Button>
          <Button radius={15} bg="blue.0" size="md">
            <Text size="xs"> Upgrade plan</Text>
          </Button>
        </Flex>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
