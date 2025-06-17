import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig, loadEnv } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';


export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.EMAIL_USER': JSON.stringify(env.EMAIL_USER),
      'process.env.EMAIL_PASS': JSON.stringify(env.EMAIL_PASS)
    },
    assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
    build: {
      assetsInlineLimit: 1024,
    },
    server: {
      port: 7777,
    },
    plugins: [
      mdx({
        rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        providerImportSource: '@mdx-js/react',
      }),
      remixCloudflareDevProxy(),
      remix({
        routes(defineRoutes) {
          return defineRoutes(route => {
            route('/', 'routes/home/route.js', { index: true });
          });
        },
      }),
      jsconfigPaths(),
    ],
  };
}
);


