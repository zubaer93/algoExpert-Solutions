function isValidSubsequence(array, sequence) {
  let sequencePos = 0;	
	for (item of array) {
		if (sequencePos == sequence.length) {
			break;
		}
		if (sequence[sequencePos] == item) {
			sequencePos++;
		}
	}
	return sequencePos === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;

