let mensaje: string = "Hola Mundo";

mensaje = "Nuevo Hola Mundo";

mensaje = "Nuevo Mundo";
console.log(mensaje);

console.log(typeof []);

/**
 * Tipos de JS
 * number
 * string
 *  boolean
 *  null
 *  undefined
 *  object
 *  function
 *
 *  Tipos de TS
 *  any => warning
 *  unknown
 *  never
 *  arrays
 *  tuplas
 *  enums
 *
 * Tipos Inferidos
 *
 */

let extincionDinosaurios: number = 76_000_000;
let dinosaurioFavorito: string = "T-Rex";
let extintos: boolean = true;

//any
let variable;
variable = "new data";
variable = 42;

function testAny(config: any) {
  return config;
}

//Inferidos
let animales: string[] = ["leopardo", "aguila", "tigre"];
let nums: number[] = [1, 2, 3];
let checks: boolean[] = [];
// Other type of definition
let nums2: Array<number> = [];

// nums2.map(x => x.)
// Tuples

let tupla: [number, string[]] = [1, ["t-rex", "agilisaurus"]];

// Enums

const small = "s";
const medium = "m";
const big = "l";
const superbig = "xl";

enum Talla {
  Small = "s",
  Medium = "m",
  Big = "l",
  SuperBig = "xl",
}

const ta1Small = Talla.Small;
console.log(ta1Small);

enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

const objeto = { id: 1, name: "" }; //Readonly not change, name Optional;
objeto.name = "Hola Mundo";

type Direction = {
  number: number;
  street: string;
  country: string;
};

type Persona = {
  readonly id: number;
  name: string;
  talla: Talla;
  direction: Direction;
};

const object: Persona = {
  id: 1,
  name: "Testing",
  talla: Talla.Medium,
  direction: {
    number: 1,
    street: "Test",
    country: "Colombia",
  },
};
