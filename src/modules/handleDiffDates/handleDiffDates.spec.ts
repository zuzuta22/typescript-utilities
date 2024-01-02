import handleDiffDates from "./handleDiffDates";

describe("a group of tests", () => {
    const today = new Date();
  test("the same dates", () => {
    handleDiffDates.getDiffDaysFromNow(today);
    expect(handleDiffDates.getDiffDaysFromNow(today)).toEqual(0);
  })
  it("30 days differences", () => {
    let monthBefore = today;
    monthBefore.setDate(today.getDate() - 30);
    expect(handleDiffDates.getDiffDaysFromNow(today)).not.toEqual(-30);
  })
  it("30 days diffrences and is New is false", () => {
    let monthBefore = today;
    monthBefore.setDate(today.getDate() - 30);
    expect(handleDiffDates.getIsNew(monthBefore)).toEqual(false);
  })
  it("6 days diffrences and is New is true", () => {
    let yesterday: Date = new Date();
    yesterday.setDate(today.getDate() - 1);
    expect(handleDiffDates.getIsNew(yesterday)).toEqual(true);
  })
});