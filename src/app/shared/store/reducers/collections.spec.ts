import { reducer } from "./collections";

describe("Reducer: Collections", () => {
  it("should have initial state of collections empty array", () => {
    const expected = {
      collections: []
    };
    const action = { type: "default" } as any;
    expect(reducer(undefined, action)).toEqual(expected);
  });
});
