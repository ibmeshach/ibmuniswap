import { ethers } from "ethers";
import UniSwap from "../utils/UniSwap.json";
import TokenABI from "../utils/Token.json";

export const tokenContract = async (address) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(address, TokenABI, signer);

    return contractReader;
  }
};

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();

    const contractReader = new ethers.Contract(
      "0xe5F34237246a16CA2A62d8D538a6FB360fF1fEeb",
      UniSwap.abi,
      signer
    );

    return contractReader;
  }
};
