import {
  QueryClient,
  QueryClientProvider as RQProvider,
} from '@tanstack/react-query';
import React, { ReactElement } from 'react';

type QueryClientProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const QueryClientProvider = ({
  children,
}: QueryClientProviderProps): ReactElement => (
  <RQProvider client={queryClient}>{children}</RQProvider>
);

export { QueryClientProvider };
