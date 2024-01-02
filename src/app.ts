import handleDiffDates from "./modules/handleDiffDates/handleDiffDates";

const dummy = new Date("2023-12-02T09:35:20.388Z");
const today = new Date();
const test = handleDiffDates.getDiffDaysFromNow(today);
// const test = handleDiffDates.getIsNew(dummy)

console.log(test);
// console.log(handleDiffDates.isNew(test))