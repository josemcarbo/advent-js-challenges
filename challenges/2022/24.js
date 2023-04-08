/**
 It's the day! Today we're going to deliver gifts… but the warehouses are a maze and the elves are lost.

Indielfo Jones wants to write a program that, upon receiving a matrix, knows if it can quickly exit the maze from its entrance to the exit.

Mazes have the following positions:

W: It's a wall, you can't pass through there. S: Entry point to the warehouse. E: Exit point from the warehouse. : White spaces are where you can pass through.

Valid movements are from one position up, down, left, or right. You can't move diagonally.

canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> true

// You can exit because you start at [0, 4]
// and there's a path to the exit which is [4, 4]

canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
]) // -> false

// There's no way to get from [0, 4] to [4, 4]
Remember that:

You only have to return whether you can exit the maze with a boolean.
You can't jump over W walls.
You can't exit the limits of the matrix, you always have to follow an internal path.
 */

function canExit (maze) {
  const columns = maze[0].length
  const arr = maze.flat()
  const max = arr.length
  const border = columns - 1
  const s = arr.indexOf('S')
  const e = arr.indexOf('E')
  const visited = [s]

  const movement = (sAt) => {
    const up = sAt - columns
    const down = sAt + columns
    const left = sAt % columns === 0 ? -1 : sAt - 1
    const right = sAt ===
    border || (sAt - border) % columns === 0
      ? -1
      : sAt + 1

    const moves = [up, down, left, right]
      .filter(v =>
        !visited.includes(v) &&
         v >= 0 &&
         v < max &&
         arr[v] !== 'W'
      )

    visited.push(...moves)

    moves.map(v => movement(v))
  }

  movement(s)

  const canExit = visited.some(v => v === e)

  return canExit
}

console.log(canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
])) // -> true

// You can exit because you start at [0, 4]
// and there's a path to the exit which is [4, 4]
/**
 * convertir la matriz lineal
 * moves:
 *  up --> i - length
 * down --> i + length
 */
console.log(canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
])) // -> false

console.log(canExit([['E', ' ', ' ', ' ', 'S']])) // -> true
