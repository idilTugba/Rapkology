"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type DataContextValue<T> = {
  data: T | undefined;
  setData: (next: T | undefined) => void;
};

const DataContext = createContext<DataContextValue<unknown> | null>(null);

type ProviderProps<T> = {
  initialData: T | null;
  children: ReactNode;
};

export function DataProvider<T>({ initialData, children }: ProviderProps<T>) {
  const [data, setData] = useState<T | undefined>(initialData ?? undefined);

  const value = useMemo<DataContextValue<T>>(() => ({ data, setData }), [data]);

  return (
    <DataContext.Provider value={value as DataContextValue<unknown>}>
      {children}
    </DataContext.Provider>
  );
}

export function useData<T>() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useData must be used within <DataProvider>");
  return ctx as DataContextValue<T>;
}
