import { Heading } from "fumadocs-ui/components/heading";
import defaultComponents from "fumadocs-ui/mdx";

import type { MDXComponents } from "mdx/types";
import { twMerge } from "tailwind-merge";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,

    h1: (props) => (
      <Heading
        as="h1"
        {...props}
        className={twMerge(props.className, "font-cal")}
      />
    ),
    h2: (props) => (
      <Heading
        as="h2"
        {...props}
        className={twMerge(props.className, "font-cal")}
      />
    ),
    h3: (props) => (
      <Heading
        as="h3"
        {...props}
        className={twMerge(props.className, "font-cal")}
      />
    ),
    h4: (props) => (
      <Heading
        as="h4"
        {...props}
        className={twMerge(props.className, "font-cal")}
      />
    ),
    h5: (props) => (
      <Heading
        as="h5"
        {...props}
        className={twMerge(props.className, "font-cal")}
      />
    ),
    h6: (props) => (
      <Heading
        as="h6"
        {...props}
        className={twMerge(props.className, "font-cal")}
      />
    ),
  };
}
