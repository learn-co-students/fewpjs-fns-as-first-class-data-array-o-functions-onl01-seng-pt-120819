function wakeDog(name, breed){
    let action = `Wake ${name} the ${breed}`;
    console.log(action);
    return action;
}

function leashDog(name, breed){
    let action = `Leash ${name} the ${breed}`;
    console.log(action);
    return action;
}

function walkToPark(name, breed){
    let action = `Walk to the park with ${name} the ${breed}`;
    console.log(action);
    return action;
}

function throwFrisbee(name, breed){
    let action = `Throw the frisbee for ${name} the ${breed}`;
    console.log(action);
    return action;
}

function walkHome(name, breed){
    let action = `Walk home with ${name} the ${breed}`;
    console.log(action);
    return action;
}

function unleashDog(name, breed){
    let action = `Unleash ${name} the ${breed}`;
    console.log(action);
    return action;
}


let routine = [];
routine.push(wakeDog);
routine.push(leashDog);
routine.push(walkToPark);
routine.push(throwFrisbee);
routine.push(walkHome);
routine.push(unleashDog);

function exerciseDog(name, breed){
    return routine.map(f => f(name, breed));
}