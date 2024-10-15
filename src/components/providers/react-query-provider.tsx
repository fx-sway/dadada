"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface Properties {
  children: React.ReactNode;
}

export default function ReactQueryProvider({ children }: Readonly<Properties>) {
  const [client] = useState<QueryClient>(() => new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
