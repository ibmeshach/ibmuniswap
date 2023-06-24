import React, { useEffect } from "react";
import TokenBalance from "./TokenBalance";
import { useAccount } from "wagmi";
const { address } = useAccount();

const Footer = () => {
  const notifyConnectWallet = () =>
    toast.error("Connect wallet.", { duration: 2000 });

  useEffect(() => {
    if (!address) notifyConnectWallet();
  }, [address]);
  return (
    <div className="flex fixed bottom-4 left-1/2 -translate-x-1/2">
      <TokenBalance name={"DUNI"} walletAddress={address} />
      <TokenBalance name={"MATIC"} walletAddress={address} />
      <TokenBalance name={"SOL"} walletAddress={address} />
      <TokenBalance name={"BNB"} walletAddress={address} />
    </div>
  );
};

export default Footer;
