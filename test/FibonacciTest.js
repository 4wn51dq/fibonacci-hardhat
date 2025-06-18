const { expect } = require("chai");

describe("Fibonacci", function () {
  it("Should return correct Fibonacci sequence", async function () {
    const Fibonacci = await ethers.getContractFactory("Fibonacci");
    const fib = await Fibonacci.deploy();

    const result = await fib.generateSequence(6);
    
    expect(result).to.deep.equal([0n, 1n, 1n, 2n, 3n, 5n]);
  });
});