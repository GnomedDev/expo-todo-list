import { forwardRef, ReactNode } from "react";

export const RefConsumer = forwardRef(function RefConsumer(
  { children }: { children: ReactNode },
  ref
) {
  return children;
});
