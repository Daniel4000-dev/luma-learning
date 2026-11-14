import Image from "next/image";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";

export function AvatarStack({ size = 32, count = 3, yellow = false }: { size?: 32 | 40; count?: 3 | 4; yellow?: boolean }) {
  const portraits = [assets.learnerAvatar1, assets.learnerAvatar2, assets.learnerAvatar3, assets.learnerAvatar4];
  return (
    <div className="flex shrink-0 -space-x-2" aria-hidden="true">
      {portraits.slice(0, count).map((portrait) => (
        <Image key={portrait.src} src={portrait.src} width={size} height={size} sizes={`${size}px`} alt=""
          className={cn("rounded-full border-2 object-cover", yellow ? "border-yellow" : "border-warm")} />
      ))}
    </div>
  );
}

