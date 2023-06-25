import React, { useEffect, useState } from "react";
import TokenBalance from "./TokenBalance";

import { useAccount } from "wagmi";

const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState();

  const { address } = useAccount();

  useEffect(() => {
    setTokenBalComp(
      <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-4">
        <TokenBalance name={"DUNI"} walletAddress={address} />
        <TokenBalance name={"MATIC"} walletAddress={address} />
        <TokenBalance name={"SOL"} walletAddress={address} />
        <TokenBalance name={"BNB"} walletAddress={address} />
      </div>
    );
  }, [address]);

  return (
    <div className="md:w-1/2 w-full mx-auto mt-2 justify-center flex items-center">
      {tokenBalComp}
    </div>
  );
};

export default Header;
