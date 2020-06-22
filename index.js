let wakeDog = function (dogName = "Xerox", dogBreed = "Border Collie") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`;
}

let leashDog = function (dogName = "Xerox", dogBreed = "Border Collie") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`;
}

let walkToPark = function (dogName = "Xerox", dogBreed = "Border Collie") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

let throwFrisbee = function (dogName = "Xerox", dogBreed = "Border Collie") {
  console.log(`Throw the firsbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

let walkHome = function (dogName = "Xerox", dogBreed = "Border Collie") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`;
}

let unleashDog = function (dogName = "Xerox", dogBreed = "Border Collie") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`;
}

const routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog ]

let exerciseDog = function(dogName, dogBreed) {
  let array = []
  for (let i = 0; i < routine.length; i++) {
    array.push(routine[i](dogName, dogBreed));
  }
  return array;
}
