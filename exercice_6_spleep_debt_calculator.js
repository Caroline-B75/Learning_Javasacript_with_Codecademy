const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 5;
      break;
    case 'sunday':
      return 8;
      break;
  }
};

const getActualSleepHours = () => getSleepHours('monday')+getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  const sleepDebt = (idealSleepHours - actualSleepHours);
  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep.';
  }
  else if (actualSleepHours > idealSleepHours) {
    return 'You got more sleep than needed.';
  }
  else {
    return `You got less sleep than needed ${sleepDebt}. You should get some rest.`;
  }
};

console.log(calculateSleepDebt())