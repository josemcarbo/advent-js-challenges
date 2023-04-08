/**
 Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...
Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.
Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.
El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:
Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!
 */

// i --> column, j --> row
// up --> i, j-1
// down --> i, j+1
// left --> i-1, j
// right --> i+1, j
function canMouseEat (direction, game) {
  const rows = game.length
  const columns = game[0].length
  let mouse = null

  for (let i = 0; i < game.length && !mouse; i++) {
    for (let j = 0; j < game[i].length && !mouse; j++) {
      if (game[i][j] === 'm') {
        mouse = [i, j]
      }
    }
  }

  const moves = {
    up: [mouse[0] - 1, mouse[1]],
    down: [mouse[0] + 1, mouse[1]],
    left: [mouse[0], mouse[1] - 1],
    right: [mouse[0], mouse[1] + 1]
  }
  const move = moves[direction]

  if (move[0] >= rows || move[1] >= columns) { return false }

  return Boolean(game[move[0]][move[1]].trim())
}

const room = [
  ['', '', ''],
  ['', '', 'm'],
  ['', '', '*']
]

console.log(canMouseEat('up', room)) // false
console.log(canMouseEat('down', room)) // true
console.log(canMouseEat('right', room)) // false
console.log(canMouseEat('left', room)) // false

// const room2 = [
//   ['*', ' ', ' ', ' '],
//   [' ', 'm', '*', ' '],
//   [' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', '*']
// ]

// console.log(canMouseEat('up', room2)) // false
// console.log(canMouseEat('down', room2)) // false
// console.log(canMouseEat('right', room2)) // true
// console.log(canMouseEat('left', room2)) // false

// export default function canMouseEat(direction, game) {
//     const rows = game.length
//     const columns = game[0].length
//     const mouse = game.map((v, i) => [i, v.indexOf('m')]).filter(v => v[1] > 0)[0]
//     const moves = {
//       up: [mouse[0] - 1, mouse[1]],
//       down: [mouse[0] + 1, mouse[1]],
//       left: [mouse[0], mouse[1] - 1],
//       right: [mouse[0], mouse[1] + 1]
//     }
//     const move = moves[direction]

//     if (move[0] >= rows || move[1] >= columns) { return false }

//     return Boolean(game[move[0]][move[1]].trim())
//   }
