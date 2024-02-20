// this code creates a GRID and it allows you set the Row size & Column Size
// i divided it into 2 parts, first part to create the grid columns
//  and second part to create Grid rows
//  there is also an advanced solution there

// ////////////////
// *to set the grid columns

/*
let gridRowCounter = 0;
let gridRow = 8;
while (gridRowCounter < gridRow) {
    let gridRowOdd = "\ # # # #";
  	let gridRowEven = "# # # #\ ";
  	gridRowCounter += 1;
  	
  	if (gridRowCounter % 2 !== 0) {
    	console.log(gridRowOdd);
    } else {
    		console.log(gridRowEven);
    	};
};
*/

// /////////////////////////////
// *to set the grid rows;

/*
let gridRowOdd = "";
let gridRowEven = "";
let gridColumn = 8;

let gridColumnCounter = 0;
while (gridColumnCounter < gridColumn) {
  
	gridColumnCounter += 2;
  
  	gridRowOdd += " #";
  	gridRowEven += "# ";
};
console.log(gridRowOdd);
console.log(gridRowEven);
*/

// /////////////////////
// *combined grid column & grid row code

let gridRow = 8;
let gridColumn = 8;

let gridRowCounter = 0;
while (gridRowCounter < gridRow) {
	let createGridRowOdd = "";
	let createGridRowEven = "";
	let gridColumnCounter = 0;
	while (gridColumnCounter < gridColumn) {
		gridColumnCounter += 2;

		createGridRowOdd += " #";
		createGridRowEven += "# ";
	}

	let gridRowOdd = createGridRowOdd;
	let gridRowEven = createGridRowEven;
	gridRowCounter += 1;

	if (gridRowCounter % 2 !== 0) {
		console.log(gridRowOdd);
	} else {
		console.log(gridRowEven);
	}
}

// //////////////////////

// *Advance solution
/*
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/
