#!/usr/bin/env node

import minimist from 'minimist';
import { roll } from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

var side = args.sides || 6;
var dice = args.dice || 2;
var rolls = args.rolls || 1;

console.log(JSON.stringify(roll(side, dice, rolls)));