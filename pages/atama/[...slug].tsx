import {
  AtamaProps,
  getStaticPathsFactory,
  getStaticPropsFactory,
} from "@atamaco/nextjs";
import { MetaData, blueprints, components, fetcher } from "../../atama";
import Head from "next/head";
import { AtamaRenderer } from "@atamaco/renderer-react";

export default function Page({ data }: AtamaProps<MetaData>) {
  return (
    <>
      <Head>
        <title>
          {typeof data?.meta?.seoTitle === "string" ? data?.meta?.seoTitle : ""}
        </title>
        <meta
          name="description"
          content={
            typeof data?.meta?.seoDescription === "string"
              ? data?.meta?.seoDescription
              : ""
          }
        />
      </Head>
      <main>
        {data && (
          <AtamaRenderer
            layouts={blueprints}
            components={components}
            data={data}
          />
        )}
      </main>
    </>
  );
}

export const getStaticPaths = getStaticPathsFactory(fetcher);
export const getStaticProps = getStaticPropsFactory(fetcher, 60);
