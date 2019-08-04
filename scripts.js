function newGame() {
    initializeBoard();
}

function initializeBoard() {
    initializeRedSquares();
    initializeWhiteSquares();
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
