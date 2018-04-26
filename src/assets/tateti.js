// 1

$(document).ready(restart);
// 2
 var IA_PLAYER = 1,
 USER_PLAYER = 2;


// 3
 // Resetea y comienza el juego
 function restart() {
 $('.result').html('');
 $('.restart').hide();


 generateUIBoard();
 userMoves(getInitialBoard());
 }


// 4
 // Retorna un tablero vacío
 function getInitialBoard() {
 return [
 [null,null,null],
 [null,null,null],
 [null,null,null]];
 }


// 5
 // Genera el tablero en la página
 function generateUIBoard() {
 $('ul').empty();
 for (var i = 0; i < 9; i++) {
 $('ul').append('<li><div class="cell"></div></li>');
 }
 }


// 6
 // Actualiza la página para reflejar el estado actual del
 // tablero
 function updateUI(board) {
 for (var row = 0; row < 3; row++) {
 for (var col = 0; col < 3; col++) {
 var index = ((row * 3) + col) + 1;
 if (board[row][col] != null) {
 $('li:nth-child('+index+') .cell')
 .addClass('marked')
 .addClass('player-' + board[row][col]);
 }
 }
 }
 }


// 7
 // Juega el jugador humano.
 function userMoves(board) {
 $('.cell:not(.marked)').click(function() {
 $('.cell').unbind();


 var $li = $(this).parent();
 var row = Math.floor($li.index() / 3);
 var col = $li.index() % 3;
 board = checkCell(row, col, USER_PLAYER, board);
 updateUI(board);


 var w = winner(board);
 if (w !== null) {
 finish(w);
 }
 else {
 setTimeout(function() { iaMoves(board); }, 1000);
 }
 });
 }


// 8
 // Juega la máquina. Devuelve el nuevo board.
 function iaMoves(board) {
 var options = getFreePositions(board);
 var optionIndex = randomIntTo(options.length-1);
 var coords = options[optionIndex];


 // marcamos la casilla
 board = checkCell(coords[0], coords[1], IA_PLAYER, board);
 updateUI(board);


 var w = winner(board);
 if (w !== null) {
 finish(w);
 }
 else {
 userMoves(board);
 }
 }


// 9
 function finish(winner) {
 if (winner == IA_PLAYER) {
 $('.result').html("Perdiste contra un jugador Random!");
 } else if (winner == USER_PLAYER) {
 $('.result').html("Ganaste!");
 } else {
 $('.result').html("Es un empate!");
 }
 $('.restart').show();
 }


// Retorna un int random entre 0 y n inclusive.
 function randomIntTo(n) {
 return parseInt(Math.random() * (n+1));
 }


// Marca la casilla y retorna el nuevo tablero
 function checkCell(row, col, player, board) {
 board[row][col] = player;
 return board;
 }


// 10
 // Devuelve las coordenadas como [fila,columna] de las posiciones
 // libres del tablero
 function getFreePositions(board) {
 var freePositions = [];
 for (var row = 0; row < 3; row++) {
 for (var col = 0; col < 3; col++) {
 if (board[row][col] === null) {
 freePositions.push([row, col]);
 }
 }
 }
 return freePositions;
 }


// 11
 // Retorna el ganador del tablero indicado, null si no hay ganador, 0
 // si hay empate.
 function winner(board) {
 // verificar columnas
 for (var c = 0; c <= 2; c++) {
 if (tatetiCol(c, board)) return board[0][c];
 }
 // verificar filas
 for (var r = 0; r <= 2; r++) {
 if (tatetiRow(r, board)) return board[r][0];
 }
 // verificar diagonales
 if (tatetiDiagonals(board)) return board[1][1];
 // verificar empate
 if (getFreePositions(board) == 0) return 0; // empate
 return null;
 }


// 12
 // True si las celdas de la columna indicada son iguales y no nulas
 function tatetiCol(col, board) {
 return board[0][col] != null
 && (board[0][col] == board[1][col] && board[1][col] == board[2][col]);
 }


// 13
 // True si las celdas de la fila indicada son iguales y no nulas
 function tatetiRow(row, board) {
 return board[row][0] != null
 && (board[row][0] == board[row][1] && board[row][1] == board[row][2]);
 }


// 14
 // True si alguna de las diagonales tienen valores iguales y no nulos
 function tatetiDiagonals(board) {
 return (board[0][0] != null && (board[0][0] == board[1][1] && board[1][1] == board[2][2]))
 || (board[0][2] != null && (board[0][2] == board[1][1] && board[1][1] == board[2][0]));
 }