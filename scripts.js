
var idCounter = 1;
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

    checker.id = idCounter;
    idCounter++;
    return checker;
}

function dragenter(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();

    var checkerId = event.dataTransfer.getData("text");
    var checker = document.getElementById(checkerId);
    var targetSquare = event.target;
    var isValidMoveResult = isValidMove(checker, targetSquare);
    if (isValidMoveResult) {
        event.target.appendChild(checker);
    } else {
        alert("there is a checker there")
    }
}

function isValidMove(checker, targetSquare) {
    var isValidMoveResult = targetSquare.childNodes
        && targetSquare.childNodes.length > 0;

    targetSquare.childNodes.forEach(childNode => {
        console.log("node className " + childNode.childNode)
        var spaceHasChecker = (childNode.childNode && childNode.className.indexOf("checker") >= 0)
        if (spaceHasChecker) {
            isValidMoveResult = false;
        }
    });
    return isValidMoveResult;
}