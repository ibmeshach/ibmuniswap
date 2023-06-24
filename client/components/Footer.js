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
      <>
        <TokenBalance name={"DUNI"} walletAddress={address} />
        <TokenBalance name={"MATIC"} walletAddress={address} />
        <TokenBalance name={"SOL"} walletAddress={address} />
        <TokenBalance name={"BNB"} walletAddress={address} />
      </>
    );

    if (!address) notifyConnectWallet();
  }, [address]);

  return (
    <div className="flex fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="flex items-center">{tokenBalComp}</div>
    </div>
  );
};

export default Header;
