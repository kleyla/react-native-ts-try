import { QueryClientProvider } from './query-client';
import React, { ReactElement } from 'react';

type AppProvidersProps = {
  children: React.ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps): ReactElement => (
  <QueryClientProvider>{children}</QueryClientProvider>
);

export { AppProviders };
