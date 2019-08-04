function newGame() {
    clearBoard()
    initializeBoard();
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
}

function createChecker(colorClass) {
    var checker = document
        .createElement("div");
    checker.classList.add("checker");
    checker.classList.add(colorClass);
    return checker;
}
