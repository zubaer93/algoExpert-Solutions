function twoNumberSum(array, targetSum) {
  const storage = [];
	for ( num of array ) {
		let potentialMatch = targetSum - num
		if (potentialMatch in storage) {
			return [potentialMatch, num];
		} else {
			storage[num] = true;
		}
	}
	return [];
}

exports.twoNumberSum = twoNumberSum;
