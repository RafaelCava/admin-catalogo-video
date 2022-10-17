import ValueObject from "../value-object";

class StubValueObject extends ValueObject {}

describe("ValueObject Unit tests", () => {
  it("Should set value", () => {
    let vo = new StubValueObject("String value");
    expect(vo.value).toBe("String value");

    vo = new StubValueObject({ prop1: "value1" });
    expect(vo.value).toStrictEqual({ prop1: "value1" });
  });
});
