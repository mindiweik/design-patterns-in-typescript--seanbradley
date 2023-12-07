"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CubeA {
    manufacture(width, height, depth) {
        // if notbusy, then manufacture a cube with provided dimensions
        const now = Date.now();
        if (now > CubeA.last_time + 1500) {
            console.log(`Company A built Cube with dimensions ${width}x${height}x${depth}`);
            CubeA.last_time = now;
            return true;
        }
        return false; // busy
    }
}
CubeA.last_time = Date.now();
exports.default = CubeA;
