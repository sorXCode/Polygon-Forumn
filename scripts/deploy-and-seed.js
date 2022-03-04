const hre = require("hardhat");

async function main() {
    const Comments = await hre.ethers.getContractFactory("Comments");
    const comment = await Comments.deploy();
    await comment.deployed();

    const tx1 = await comment.addComment("Induction", "Hello World");
    await tx1.wait();

    const tx2 = await comment.addComment("Induction", "Can you see me?");
    await tx2.wait();
    
    const tx3 = await comment.addComment("Induction", "I think so");
    await tx3.wait();

    console.log("Contract address:", comment.address);

}


main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
    }
);