// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendCatArray = [...cats, name];
    return appendCatArray; 
}

function prependCat(name) {
    const prependCatArray = [name, ...cats];
    return prependCatArray;
}

function removeLastCat() {
    const removeLastCatArray = cats.slice(0, cats.length - 1);
    return removeLastCatArray;
}

function removeFirstCat() {
    const removeFirstCatArray = cats.slice(1);
    return removeFirstCatArray;
}
