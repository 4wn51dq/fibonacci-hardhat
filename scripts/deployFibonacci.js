const { ethers } = require("hardhat");

async function main() {
  const Fibonacci = await ethers.getContractFactory("Fibonacci");
  const fib = await Fibonacci.deploy(); // deploy the contract

  await fib.waitForDeployment(); // NEW — needed in recent ethers versions
  console.log("Fibonacci deployed to:", await fib.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });