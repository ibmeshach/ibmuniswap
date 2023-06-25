import React, { useEffect, useState } from "react";
import TokenBalance from "./TokenBalance";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import { useAccount } from "wagmi";

import toast, { Toaster } from "react-hot-toast";
import NavItems from "./NavItems";

const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState();

  const { address } = useAccount();

  const notifyConnectWallet = () =>
    toast.error("Connect wallet.", { duration: 2000 });

  useEffect(() => {
    setTokenBalComp(
      <div className="w-full flex justify-center ">
        <TokenBalance name={"DUNI"} walletAddress={address} />
      </div>
    );

    if (!address) notifyConnectWallet();
  }, [address]);

  return (
    <div className="fixed w-full top-4 px-8 py-4 md:py-0 flex-col items-center justify-between">
      <div className="w-full flex gap-1 justify-center">
        <div className="w-1/2 flex items-center justify-start">
          <img src="./uniswap.png" className="h-12" />
          <NavItems />
        </div>
        <div className="w-1/2 flex justify-end">
          <ConnectButton className="mx-8" accountStatus={"full"} />
        </div>
      </div>
      <div className="md:w-1/2 w-full mx-auto mt-2 justify-center flex items-center">
        {tokenBalComp}
      </div>

      <Toaster />
    </div>
  );
};

export default Header;
