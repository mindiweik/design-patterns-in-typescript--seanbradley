"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cube_a_1 = __importDefault(require("./cube-a"));
const cube_b_adapter_1 = __importDefault(require("./cube-b-adapter"));
const totalCubes = 5;
let counter = 0;
const manufactureCube = () => {
    // produce 5 cubes from whichever supplier can manufacture it first
    const width = Math.floor(Math.random() * 10) + 1;
    const height = Math.floor(Math.random() * 10) + 1;
    const depth = Math.floor(Math.random() * 10) + 1;
    let cube = new cube_a_1.default();
    let success = cube.manufacture(width, height, depth);
    if (success) {
        counter++;
    }
    else {
        // try another manufacturer
        console.log('Company A was busy, so trying company B');
        cube = new cube_b_adapter_1.default();
        success = cube.manufacture(width, height, depth);
        if (success) {
            counter++;
        }
        else {
            console.log('Company B was busy, so trying company A');
        }
    }
};
// wait some time between manufacturing each cube
const interval = setInterval(() => {
    manufactureCube();
    if (counter >= totalCubes) {
        clearInterval(interval);
        console.log(`${totalCubes} cubes manufactured!`);
    }
}, 1000);
