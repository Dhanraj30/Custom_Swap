import { ethers } from "ethers";
import CustomDexABI from "../utils/CustomDex.json";
import CustomTokenABI from "../utils/CustomToken.json";

export const tokenContract = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window;

    if (ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            address,
            CustomTokenABI.abi,
            signer
        );

        return contractReader;
    }
};

export const contract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const {ethereum} = window;

    if (ethereum) {
        const signer = provider.getSigner();

        const contractReader = new ethers.Contract(
            "0x58ba9642d6F391758A461d4600C9effC6b27f2F0",
            CustomDexABI.abi,
            signer
        );
        return contractReader;
    }
    
};