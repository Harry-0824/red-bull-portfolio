import { cleanup } from "@testing-library/react";
import { createElement, Fragment, type ReactNode } from "react";
import { afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  cleanup();
});

vi.mock("framer-motion", () => {
  const stripMotionProps = (props: Record<string, unknown>) => {
    const domProps = { ...props };
    const children = domProps.children as ReactNode;

    delete domProps.children;
    delete domProps.initial;
    delete domProps.animate;
    delete domProps.exit;
    delete domProps.whileHover;
    delete domProps.whileInView;
    delete domProps.transition;
    delete domProps.viewport;

    return { children, domProps };
  };

  const motion = new Proxy(
    {},
    {
      get: (_, tag: string) => {
        return (props: Record<string, unknown>) => {
          const { children, domProps } = stripMotionProps(props);
          return createElement(tag, domProps, children as ReactNode);
        };
      },
    },
  );

  return {
    motion,
    AnimatePresence: ({ children }: { children?: ReactNode }) =>
      createElement(Fragment, null, children),
  };
});
