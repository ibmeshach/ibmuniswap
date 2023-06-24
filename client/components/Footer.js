import React, { useEffect, useState } from "react";
import TokenBalance from "./TokenBalance";

import { useAccount } from "wagmi";

const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState();

  const { address } = useAccount();

  useEffect(() => {
    setTokenBalComp(
      <>
        <TokenBalance name={"DUNI"} walletAddress={address} />
        <TokenBalance name={"MATIC"} walletAddress={address} />
        <TokenBalance name={"SOL"} walletAddress={address} />
        <TokenBalance name={"BNB"} walletAddress={address} />
      </>
    );
  }, [address]);

  return (
    <div className="flex fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="flex items-center">{tokenBalComp}</div>
    </div>
  );
};

export default Header;
