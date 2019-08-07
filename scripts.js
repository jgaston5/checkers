
var idCounter = 1;
var kingClassName = "king";
function newGame() {
    showInfo("New game");
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
        showError("There is a checker there")
    }
}

function isValidMove(checker, targetSquare) {
    var isValidMoveResult = targetSquare.childNodes
        && targetSquare.childNodes.length > 0;

    targetSquare.childNodes.forEach(childNode => {
        var spaceHasChecker = (childNode.childNode && childNode.className.indexOf("checker") >= 0)
        if (spaceHasChecker) {
            isValidMoveResult = false;
        }
    });
    return isValidMoveResult;
}

function showAlert(alertId, message, timeout) {
    var alerts = document.querySelectorAll(".alert");
    alerts.forEach(alert => alert.style.display = "none");
    var alertBox = document.getElementById(alertId);
    alertBox.innerText = message;
    alertBox.style.display = "block";
    setTimeout(() => alertBox.style.display = "none", timeout);
}

function showError(message, timeout = 3000) {
    var alertId = "errorAlert";
    showAlert(alertId, message, timeout);
}

function showInfo(message, timeout = 3000) {
    var alertId = "infoAlert";
    showAlert(alertId, message, timeout);
}

function showSucces(message, timeout = 3000) {
    var alertId = "successAlert";
    showAlert(alertId, message, timeout);
}

function makeKing() {
    var checkerId = 3;
    var checker = document.getElementById(checkerId);
    if (!isKing(checker)) {
        checker.classList.add(kingClassName);
    }
}

function isKing(checker) {
    return checker.classList.contains(kingClassName);
}