class errorStatus {
  //Discriminating unions
  type: "error";
  code?: number;
}

class successStatus {
  type: "success";
  code?: number;
  response?: string;
}

type Status = errorStatus | successStatus;

function get(status: Status) {
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

interface ErrorHandling {
  success: boolean;
  error?: string;
}

interface GameData {
  title: string;
}

interface ArtistData {
  name: string;
}

type GameResponse = GameData & ErrorHandling;
type ArtistResponse = ArtistData & ErrorHandling;

const game: GameResponse = {
  title: "Halo",
  success: true,
};

const artist: ArtistResponse = {
  name: "yop",
  success: false,
  error: "404",
};

type superString = string | number;
type superNumber = number | boolean;

type superType = superString & superNumber;

/// type gurads
function add(a: superString, b: superString) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type NetworkData = GameData | ErrorHandling;

function downloadData(data: NetworkData) {
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
  play(): void {
    console.log("Playing video");
  }
}

class ImagePlayer {
  draw(): void {
    console.log("Playing Image");
  }
}

type Player = VideoPlayer | ImagePlayer;

function usePlayer(player: Player) {
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

const c1 = (canvas as HTMLCanvasElement).getContext("2d");

// [key: T]: U

const weather = {
  weather: "clear sky",
  city: "Mexicio City",
  summary: "the sky is clear",
};

type Weather = { [property: string]: string };

const weather2: Weather = {
  weather: "clear sky",
  city: "Mexicio City",
  summary: "the sky is clear",
};

// sobre carga overload
function add2(x: string, y: string): string;
function add2(x: number, y: number): number;
function add2(x: any, y: any): any {
  return x + y;
}

console.log(add2(2, 2));
console.log(add2("b", "a"));

const button = document.getElementById("btn");
// "?" optional chaining: se puede hacer la evalucion de propiedades, descomentar html
button?.addEventListener("click", () => {
  console.log("clicked");
});
