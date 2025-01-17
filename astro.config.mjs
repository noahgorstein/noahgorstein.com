import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import autoLinkHeadings from "rehype-autolink-headings";
import { h, s } from "hastscript";
import tailwind from "@astrojs/tailwind";
import { fileURLToPath } from "url";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";

// The following configuration for rehype-autolink-headings was taken from https://github.com/withastro/docs/blob/main/astro.config.ts
import expressiveCode from "astro-expressive-code";
const AnchorLinkIcon = h(
  "svg",
  {
    width: 16,
    height: 16,
    version: 1.1,
    viewBox: "0 0 16 16",
    xlmns: "http://www.w3.org/2000/svg",
  },
  h("path", {
    fillRule: "evenodd",
    fill: "currentcolor",
    d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",
  })
);

// https://astro.build/config
export default defineConfig({
  site: "https://noahgorstein.com",
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        autoLinkHeadings,
        {
          behavior: "append",
          group: ({ tagName }) =>
            h(`div.heading-wrapper.level-${tagName}`, {
              tabIndex: -1,
            }),
          content: h(
            `span.anchor-icon`,
            {
              ariaHidden: "true",
            },
            AnchorLinkIcon
          ),
        },
      ],
    ],
    shikiConfig: {
      theme: "github-dark",
    },
  },
  integrations: [
    expressiveCode({
      themes: ["github-light", "github-dark", "synthwave-84"],
      useDarkModeMediaQuery: false,
      plugins: [
        pluginCollapsibleSections(),
        { baseStyles: `margin: 2rem 0px;` },
      ],
    }),
    mdx(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: fileURLToPath(
        new URL("./tailwind.config.cjs", import.meta.url)
      ),
    }),
  ],
});
