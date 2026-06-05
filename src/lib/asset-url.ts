const ASSET_BASE = "https://project--0164df93-e351-4a6d-a0c8-fc141fe45ebf.lovable.app";

export function assetUrl(asset: { url: string }): string {
  if (asset.url.startsWith("http")) return asset.url;
  return `${ASSET_BASE}${asset.url}`;
}