"use strict";
class errorStatus {
}
class successStatus {
}
function get(status) {
    //Discriminating unions
    switch (status.type) {
        case "success":
            console.log(status.response);
            break;
        default:
            console.log(status.code);
            break;
    }
}
const game = {
    title: "Halo",
    success: true,
};
const artist = {
    name: "yop",
    success: false,
    error: "404",
};
/// type gurads
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function downloadData(data) {
    if ("title" in data) {
        console.log(data.title);
    }
    if ("error" in data) {
        console.log(data.error);
    }
}
downloadData(game);
downloadData(artist);
class VideoPlayer {
    play() {
        console.log("Playing video");
    }
}
class ImagePlayer {
    draw() {
        console.log("Playing Image");
    }
}
function usePlayer(player) {
    if (player instanceof ImagePlayer) {
        player.draw();
    }
}
// casteo en typscript
// const canvas = <HTMLCanvasElement>document.getElementById("abc");
// otra forma de caste
// const canvas = document.getElementById("abc") as HTMLCanvasElement;
// const c1 = canvas.getContext("2d");
//otra forma de casteo
const canvas = document.getElementById("myCanvas");
const c1 = canvas.getContext("2d");
// [key: T]: U
const weather = {
    weather: "clear sky",
    city: "Mexicio City",
    summary: "the sky is clear",
};
const weather2 = {
    weather: "clear sky",
    city: "Mexicio City",
    summary: "the sky is clear",
};
function add2(x, y) {
    return x + y;
}
console.log(add2(2, 2));
console.log(add2("b", "a"));
const button = document.getElementById("btn");
// "?" optional chaining: se puede hacer la evalucion de propiedades, descomentar html
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("clicked");
});
