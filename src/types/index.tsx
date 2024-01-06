import type { ReactNode } from 'react';

export type IMerchantProps = {
  children: ReactNode;
};

export type IHeaderProps = {
  setSidebarOpen: (sidebarOpen: boolean) => void;
};

export type ILeftSidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
};
