"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CubeB {
    create(top_left_front, bottom_right_back) {
        // if not busy, then create a cube with provided coordinates
        const now = Date.now();
        if (now > CubeB.last_time + 3000) {
            console.log(`Company B built Cube with coordinates [${top_left_front[0]}, ${top_left_front[1]}, ${top_left_front[2]}], [${bottom_right_back[0]}, ${bottom_right_back[1]}, ${bottom_right_back[2]}]`);
            CubeB.last_time = now;
            return true;
        }
        return false; // busy
    }
}
CubeB.last_time = Date.now();
exports.default = CubeB;
