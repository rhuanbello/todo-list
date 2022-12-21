import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex h-40 items-center justify-center bg-gray-700">
      <Image src="/Logo.png" alt="logo" height={38.4} width={100.8} />
    </div>
  );
};
