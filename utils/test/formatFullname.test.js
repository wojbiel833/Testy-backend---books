const expect = require("chai").expect;

const formatFullname = require("../formatFullname.js");

describe("FormatFullname", () => {
  it("should return the right output with right arg type", () => {
    expect(formatFullname("JohnDoe")).to.equal("Error");
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(123)).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname("")).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
    expect(formatFullname("JoHn DoE BrOWn")).to.equal("Error");
    expect(formatFullname("JoHn DoE")).to.equal("John Doe");
  });
});
