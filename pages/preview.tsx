import type { NextPage } from "next";

import Head from "next/head";
import { AtamaRenderer } from "@atamaco/renderer-react";
import { withPreview } from "@atamaco/preview-react";

import { blueprints, components } from "../atama";

const Preview = withPreview(
  AtamaRenderer,
  process.env.ATAMA_PREVIEW_MESSAGES_ORIGIN || "https://composer.atama.app"
);

const PreviewPage: NextPage = () => (
  <div>
    <Head>
      <title>Preview</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Preview layouts={blueprints} components={components} />
    </main>
  </div>
);

// eslint-disable-next-line import/no-default-export
export default PreviewPage;
