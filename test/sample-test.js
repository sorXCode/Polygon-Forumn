const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Comments", ()=>{
  it("Should add and fetch successfully", async ()=>{
    let Comments = await ethers.getContractFactory("Comments");
    let comment = await Comments.deploy();

    // ensure contract actually deployed
    expect(comment.address.length).to.be.above(0);

    // expect empty array on getComment because no comment has been added yet
    expect(await comment.getComments("Hello King")).to.be.lengthOf(0);

    // add comment
    let tx = await comment.addComment("Induction", "Hello World");
    await tx.wait()

    // expect arrray with one element on getComment
    expect(await comment.getComments("Induction")).to.be.lengthOf(1);

    // expect comment to be "Hello World"
    // expect(await comment.getComments("Induction")[0]).to.equal("Hello World");

    // expect empty array on getting comment on no valid topic
    expect(await comment.getComments("Candles")).to.be.lengthOf(0);

    tx = await comment.addComment("Candles", "Shines brightest");
    await tx.wait()

    // expect arrray with one element on getComment
    expect(await comment.getComments("Induction")).to.be.lengthOf(1);
    expect(await comment.getComments("Candles")).to.be.lengthOf(1);

    // expect comment for Canles to be "Shines brightest"
    // expect(await comment.getComments("Candles")[0]).to.equal("Shines brightest");

  })
})