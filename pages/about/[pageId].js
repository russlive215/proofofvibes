import * as React from "react";

import { getAllPagesInSpace } from "notion-utils";
import { defaultMapPageUrl } from "react-notion-x";

import * as notion from "../../lib/notion";
import { NotionPage } from "../../components/NotionPage";
import {
  rootNotionPageId,
  rootNotionSpaceId,
  isDev,
  rootDomain,
  previewImagesEnabled,
} from "../../lib/notationConfig";
import { useRouter } from "next/router";

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  if (true) {
    return {
      paths: [],
      fallback: true,
    };
  }

  const mapPageUrl = defaultMapPageUrl(rootNotionPageId);

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    rootNotionSpaceId,
    notion.getPage,
    {
      traverseCollections: false,
    }
  );

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== "/");

  return {
    paths,
    fallback: true,
  };
}

export default function Page({ recordMap }) {
  const router = useRouter();
  const [udapte, setUpdate] = React.useState(false);
  React.useEffect(() => {
    // const a = [
    //   ...Array.from(document.getElementsByClassName("notion-page-link")),
    //   ...Array.from(document.getElementsByClassName("breadcrumb")),
    //   ...Array.from(document.getElementsByClassName("notion-collection-card")),
    // ];
    setTimeout(() => {
      const a = Array.from(document.getElementsByTagName("a"));
      console.log("test", a);
      if (a.length > 0) {
        a.forEach((a) => {
          a.addEventListener("click", (event) => {
            event.preventDefault();
            const href = a.getAttribute("href");
            console.log("/about" + href);
            if (href) {
              if (href.startsWith("/")) {
                router.push("/about" + href);
              } else {
                window.open(href, "_blank", "noopener,noreferrer");
              }
            }
          });
        });
      }
    }, 500);
  }, [recordMap, router]);
  return (
    <NotionPage
      rootDomain={rootDomain}
      recordMap={recordMap}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
    />
  );
}
