import Image from "next/image";
import { assets, type SvgAssetName } from "@/lib/assets";

type SvgAssetProps = { name: SvgAssetName; className?: string; alt?: string };

/** Keep exported SVGs at their original intrinsic dimensions. */
export function SvgAsset({ name, className, alt = "" }: SvgAssetProps) {
  const asset = assets[name];
  return <Image src={asset.src} width={asset.width} height={asset.height} alt={alt} unoptimized className={className} />;
}

