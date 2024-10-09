import type { Preset } from "@remix-run/dev";

import { vitePlugin as remix} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { awsPreset, AWSProxy } from "remix-aws";

export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      presets: [
        awsPreset(
          {
            awsProxy: AWSProxy.APIGatewayV1,
          }
        ) as Preset
      ],
    }),
    tsconfigPaths(),
  ],
});
