function isMonotonic(array) {
	let prevSign;
	let currentSign;
	for (let i = 0; i < array.length - 1; i++) {
		if (array[i+1] - array[i] > 0) {
			currentSign = 1;
		} else if (array[i+1] - array[i] < 0) {
			currentSign = -1;
		} else {
			continue;
		}
		if (prevSign) {
			if (currentSign != prevSign) {
				return false
			}
		}
	 prevSign = currentSign;
	}
	return true;
}

exports.isMonotonic = isMonotonic;
