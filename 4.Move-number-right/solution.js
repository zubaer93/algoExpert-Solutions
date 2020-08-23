function moveElementToEnd(array, toMove) {
  const result = [];
	let pointer = array.length - 1;
	let i = 0;
	for (item of array){
		if (item != toMove) {
			result[i] = item;
			i++;
		} else {
			result[pointer] = toMove;
			pointer--;
		}
	}
	return result;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

