let raceNumber = Math.floor(Math.random() * 1000);
let earlyRunner = true;
const runnerAge = 18;

if (runnerAge > 18 && earlyRunner) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRunner) {
  console.log(`You will race at 9:30 am. And your race number is: ${raceNumber}`);
} else if (runnerAge > 18 && !earlyRunner) {
  console.log(`You will race at 11:00 am. And your race number is: ${raceNumber}`);
 } else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm (regardless of registration). And your race number is: ${raceNumber}`);
} else {
  console.log('See the registration desk.');
}