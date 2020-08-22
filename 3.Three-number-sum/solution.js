function threeNumberSum(array, targetSum) {
	const sortedArray = array.sort((a, b) => a - b);
	const triplet = [];
	let leftPointer;
	let rightPointer;
	for (let i = 0; i < sortedArray.length; i++) {
			leftPointer = i+1;
			rightPointer = sortedArray.length -1;
			while (leftPointer < rightPointer) {
				if (sortedArray[i]+sortedArray[leftPointer]+sortedArray[rightPointer] == targetSum) {
					triplet.push([sortedArray[i], sortedArray[leftPointer], sortedArray[rightPointer]])
					leftPointer++;
					rightPointer--;
				} else if (sortedArray[i]+sortedArray[leftPointer]+sortedArray[rightPointer] < targetSum) {
					leftPointer++;
				} else {
					rightPointer--;
				}
			}
	}
	return triplet;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

