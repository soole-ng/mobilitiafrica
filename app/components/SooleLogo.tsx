import Image from "next/image";

export default function SooleLogo({ className, sizes = "40px" }: { className?: string; sizes?: string }) {
  return (
    <span className={`relative inline-block ${className ?? ""}`}>
      <Image
        src="/images/soole-logo-dark.png"
        alt="Soole"
        fill
        className="object-contain logo-dark-variant"
        sizes={sizes}
      />
      <Image
        src="/images/soole-logo.png"
        alt="Soole"
        fill
        className="object-contain logo-light-variant"
        sizes={sizes}
      />
    </span>
  );
}
