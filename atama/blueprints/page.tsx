import { ReactNode, forwardRef } from "react";

interface PageProps {
  main: ReactNode;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ main }, ref) => {
  return (
    <div ref={ref}>
      <div data-atama-placement="Main">{main}</div>
    </div>
  );
});

Page.displayName = "Page";
