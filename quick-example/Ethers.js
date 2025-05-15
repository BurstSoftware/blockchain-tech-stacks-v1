import { ethers } from "ethers";
async function connect() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract("CONTRACT_ADDRESS", ["function get() view returns (uint256)"], provider);
    const value = await contract.get();
    console.log(value.toString());
}
