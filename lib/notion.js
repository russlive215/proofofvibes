import { NotionAPI } from "notion-client";

// import { getPreviewImageMap } from "./preview-images";
// import { previewImagesEnabled } from "./config";

const notion = new NotionAPI();

export async function getPage(pageId) {
  const recordMap = await notion.getPage(pageId);

  //   if (previewImagesEnabled) {
  //     const previewImageMap = await getPreviewImageMap(recordMap);
  //     recordMap.preview_images = previewImageMap;
  //   }

  return recordMap;
}

export async function search(params) {
  return notion.search(params);
}
