// Qs. Create a nested array to show the following tic-tac-toe game state.
// Board State:
// [ 'X', null, 'O' ]
// [ null, 'X', null ]
// [ 'O', null, 'X' ]


let game=[['X', null, 'O'],[null, 'X' ,null],['O', null ,'X']];

game[0][1]="O";
console.log(game);
