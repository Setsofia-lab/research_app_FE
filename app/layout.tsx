import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import '../components/Styles/main.css';
import { NavigationProgress } from '@mantine/nprogress';
export const metadata = {
  title: 'COPI COPI',
  description: 'Reasearch AI APP',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        {/* <link rel="shortcut icon" href="/favicon.svg" /> */}

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>

      <body>
        <MantineProvider theme={theme}>
          <NavigationProgress color="gray" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
