const WAGES_PER_HOUR=20;
const FULL_DAY_HOUR=8;
let dailyWages=0;
let present = parseInt(Math.random() * 10 % 2);
if (present == 1) {
    console.log("Employee is present");
    dailyWages=WAGES_PER_HOUR*FULL_DAY_HOUR;
}
else {
    console.log("Employee is absent");
    dailyWages=0;
}
console.log(dailyWages);