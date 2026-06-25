import { cleanup } from "@testing-library/react";
import {
  createElement,
  Fragment,
  type ImgHTMLAttributes,
  type ReactNode,
} from "react";
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
    useScroll: () => ({
      scrollYProgress: 0,
    }),
    useSpring: <T,>(value: T) => value,
  };
});

vi.mock("next/image", () => ({
  default: (
    props: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean },
  ) => {
    const imgProps = { ...props };
    delete imgProps.priority;

    return createElement("img", imgProps);
  },
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children?: ReactNode;
    href: string;
  } & Record<string, unknown>) =>
    createElement("a", { href, ...props }, children),
}));
