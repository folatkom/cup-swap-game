function cupSwapping(swaps) {
	let ballPosition = 'B';
	let newPosition = 'B';
	for (let i = 0; i < swaps.length; i++){
		if (swaps[i].charAt(0) == ballPosition){
			newPosition = swaps[i].charAt(1);
		}
		else if (swaps[i].charAt(1) == ballPosition){
			newPosition = swaps[i].charAt(0);
		}
		ballPosition = newPosition;
	}
	return ballPosition;
}


cupSwapping(['AB', 'CA']);
cupSwapping(['BA', 'AC', 'CA', 'BC']);
cupSwapping(['AC', 'CA', 'CA', 'AC']);
