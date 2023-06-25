import React, { useState } from "react";
import { ArrowSmUpIcon } from "@heroicons/react/outline";

const NavItems = () => {
  const SWAP = "Swap";
  const POOL = "Pool";
  const VOTE = "Vote";
  const CHART = "Charts";

  const [selectedNavItem, setSelectedNavItem] = useState(SWAP);

  return (
    <div className=" text-neutral-600 h-fit flex items-center justify-around rounded-full mx-1">
      <p
        className={getNavIconClassName(SWAP)}
        onClick={() => setSelectedNavItem(SWAP)}
      >
        {SWAP}
      </p>
    </div>
  );

  function getNavIconClassName(name) {
    let className =
      "p-1 px-4 cursor-pointer  border-transparent flex items-center";
    className += name === selectedNavItem ? "  rounded-full" : "";
    return className;
  }
};

export default NavItems;
