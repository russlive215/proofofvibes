export const rootNotionPageId = "b1db17ba1752463ea6e48e6936cbd839";
export const rootNotionSpaceId = undefined;

export const previewImagesEnabled = false;

export const useOfficialNotionAPI =
  false ||
  (process.env.USE_OFFICIAL_NOTION_API === "true" && process.env.NOTION_TOKEN);

export const isDev = false;

export const port = 3000;
export const rootDomain = isDev ? `localhost:${port}/about` : null;
