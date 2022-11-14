#! /usr/bin/env node

export function roll(numSides = 6, numDice = 1, numRolls = 2) {
    const result = [];

    for (let i = 0; i < numRolls; i++) {

        let rolls = 0;

        for (let j = 0; j < numDice; j++) {
            
            rolls += Math.floor(Math.random() * numSides) + 1;

        }

        result[i] = rolls;

    }

    return {
        "sides": numSides,
        "dice": numDice,
        "rolls": numRolls,
        "results": result
    };

}   