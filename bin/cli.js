#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from "/lib/roll.js";

const args = minimist(process.argv.slice(2));

var side = args.sides;
var dice = args.dice;
var roll = args.rolls;

console.log(JSON.stringify(roll(side, dice, roll)));