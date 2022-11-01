import { QueryClient } from '@tanstack/query-core';
import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

const persister = createSyncStoragePersister({ storage: window.localStorage });

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
    },
  },
});

persistQueryClient({
  queryClient,
  persister,
  maxAge: 1000 * 60 * 60 * 24, // 24 hours,
  buster: REACT_APP_BUILD_NUMBER ?? '',
});

export const resetCache = () => {
  queryClient.clear();
};
