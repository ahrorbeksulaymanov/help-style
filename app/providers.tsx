import ErrorBoundary from "@/components/ErrorBoundary";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default Providers;
