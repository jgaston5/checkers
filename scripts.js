
var counter = 1;
function newGame() {
    clearBoard()
    initializeBoard();
    markValidSquares()
}
function markValidSquares() {
    var squares = document.querySelectorAll(".valid-square");
    squares.forEach(square => {
        square.ondrop = drop;
        square.ondragover = dragenter
    });
}

function initializeBoard() {
    initializeRedSquares();
    initializeWhiteSquares();
}

function clearBoard() {
    var checkers = document.querySelectorAll(".checker");
    if (checkers && checkers.length > 0) {
        checkers.forEach(checker => {
            checker.remove();
        });
    }

}

function initializeWhiteSquares() {
    var squares = document.querySelectorAll(".white-square");
    squares.forEach(square => {
        square.appendChild(createChecker("white"));
    });
}

function initializeRedSquares() {
    var squares = document.querySelectorAll(".red-square");
    squares.forEach(square => {
        var checker = createChecker("red");
        square.appendChild(checker);
    });
    squares.forEach(x => x.ondrop)
}

function createChecker(colorClass) {
    var checker = document
        .createElement("div");
    checker.classList.add("checker");
    checker.classList.add(colorClass);
    checker.draggable = true;
    checker.ondragstart = drag

    checker.id = counter;
    counter++;
    return checker;
}

function dragenter(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}