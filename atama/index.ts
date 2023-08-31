import { FetcherAtama } from "@atamaco/fetcher-atama";
import { Page } from "./blueprints/page";
import { Author } from "./components/author";

export const fetcher = new FetcherAtama({
  apiKey: process.env.ATAMA_API_KEY as string,
  workspaceId: process.env.ATAMA_WORKSPACE_ID as string,
});

export const blueprints = {
  page: Page,
};

export const components = {
  author: Author,
};
