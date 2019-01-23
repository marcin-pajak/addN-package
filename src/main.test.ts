import "chai/register-should";
import { expect } from "chai";
import { addN } from "./main";

describe("addN should", () => {
  it("be defined and allow bounding @param n", () => {
    const addEight = addN(8);
    addN.should.be.a("function");
    addEight.should.be.a("function");
  });

  it("add any number to partially applied 8", () => {
    const addEight = addN(8);
    expect(addEight(7)).to.equal(15);
    expect(addEight(100)).to.equal(108);
  });
});
