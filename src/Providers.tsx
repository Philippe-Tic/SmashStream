import React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import '@/config';
import { mockServer } from '@/mocks/server';
import theme from '@/theme';

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  mockServer();
}

const queryClient = new QueryClient();

export const Providers = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </QueryClientProvider>
  );
};
