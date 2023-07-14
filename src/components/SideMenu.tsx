import Link from "next/link";
import { FC, ReactNode } from "react";

interface SideMenuProps {
  children: ReactNode;
}

const SideMenu: FC<SideMenuProps> = ({ children }) => {
  return (
    <div className="bg-orange-200 min-h-screen flex">
      <nav className="bg-orange-100 w-60 shrink-0 flex flex-col py-8 ">
        <div className="flex justify-start items-center justify-center">
        <div className="font-bold text-lg text-orange-300 border-b-4">Random Drink</div>
        </div>
        <div className="bg-orange-100 grow pt-12 flex flex-col">
          <Link href="/">
            <button className="p-6 text-orange-400">Details</button>
          </Link>
          <Link href="/mint">
            <button className="p-6 text-orange-400">Mint</button>
          </Link>
          <Link href="/my-nft">
            <button className="p-6 text-orange-400">My NFT</button>
          </Link>
        </div>
        <div>Created by Wook.</div>
      </nav>
      <div className="flex flex-col w-full">{children}</div>
    </div>
  );
};

export default SideMenu;