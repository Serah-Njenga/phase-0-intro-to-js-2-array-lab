// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield" ]

function destructivelyAppendCat(name) {
  cats.push(name)
}

function destructivelyPrependCat(name) {
  cats.unshift(name)
}

function destructivelyRemoveLastCat() {
  cats.pop()
}

function destructivelyRemoveFirstCat() {
  cats.shift()
}

function appendCat(name) {
  const home=[...cats,name]
  return home
}

function  prependCat(name) {
  const dog=[name,...cats]
  return dog
}

function removeLastCat() {
  const lion= cats.slice(0,-1)
  return lion
}

function removeFirstCat() {
  const snake= cats.slice(1)
  return snake
}