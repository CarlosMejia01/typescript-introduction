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
