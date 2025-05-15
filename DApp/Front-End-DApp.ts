import { ethers } from "ethers";
import { useState } from "react";

// ABI for the Counter contract
const ABI = [
  "function increment()",
  "function getCount() view returns (uint256)",
];

const CounterDApp = () => {
  const [count, setCount] = useState("0");

  // Connect to MetaMask and contract
  const connect = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract("YOUR_CONTRACT_ADDRESS", ABI, signer);

    // Get current count
    const currentCount = await contract.getCount();
    setCount(currentCount.toString());

    // Increment count
    const increment = async () => {
      const tx = await contract.increment();
      await tx.wait();
      const newCount = await contract.getCount();
      setCount(newCount.toString());
    };

    return { increment };
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => connect().then(({ increment }) => increment())}>
        Increment
      </button>
    </div>
  );
};

export default CounterDApp;
