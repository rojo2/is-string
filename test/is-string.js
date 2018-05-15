import { expect } from "chai";
import isString from "../src/is-string";

describe("Is string", () => {
 
  it("should test if a value is a string or not", () => {
    expect(isString("Hello, World")).to.be.true;
    expect(isString(1)).to.be.false;
    expect(isString(true)).to.be.false;
    expect(isString(null)).to.be.false;
    expect(isString(undefined)).to.be.false;
    expect(isString([])).to.be.false;
    expect(isString({})).to.be.false;
    expect(isString(/^.*$/)).to.be.false;

  });

});
