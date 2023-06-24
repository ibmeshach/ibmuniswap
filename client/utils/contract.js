import { ethers } from "ethers";
import DuniSwap from "../utils/DuniSwap.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(address, CustomTokenABI, signer);

    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      "0x15C4084cE9B3FFac5DbAD7bCD7758a82D7AdEee4",
      DuniSwap.abi,
      signer
    );

    return contractReader;
  }
};
