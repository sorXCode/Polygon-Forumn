// const hre = require("hardhat")

async function check() {
    const comment = await hre.ethers.getContractAt(
        "Comments",
        "0x5fbdb2315678afecb367f032d93f642f64180aa3"
    );
    await comment.await()

    let result = await comment.getComments("Induction");
    console.log(result);

}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    }
);
