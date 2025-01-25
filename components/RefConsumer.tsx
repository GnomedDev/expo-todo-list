import { forwardRef, ReactNode } from "react";

export const RefConsumer = forwardRef(
  ({ children }: { children: ReactNode }, ref) => children
);
