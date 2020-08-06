function tinyFriend(friends) {
	if (!friends) {
		return "Please give name of friends in an array";
	}
	let minValue = friends[0];
	for (let i = 0; i < friends.length; i++) {
		if (friends[i] < minValue) {
			minValue = friends[i];
		}
	}
	return [minValue];
}

// const tinyfriend = tinyFriend(["a", "b", "cc", "dd", "efe"]);
// console.log(tinyfriend);

function feetToMile(feet) {
	if (feet <= 0) {
		return "Distance can't be negative";
	}
	return feet / 5280;
}

// const feettomile = feetToMile("5280");
// console.log(feettomile);

function woodCalculator(woodForChair, woodForTable, woodForBed) {
	if (!woodForTable || !woodForChair || !woodForBed) {
		return "Please give chair,table and bed amount";
	}
	return woodForChair * 1 + woodForTable * 3 + woodForBed * 5;
}

// console.log(woodCalculator(2, 3, 5));

function brickCalculator(floors) {
	if (floors <= 0) {
		return "Floor number can't be negative";
	}

	if (floors <= 10) {
		return floors * 15 * 1000;
	} else if (floors > 10 && floors <= 20) {
		const overTenthFloor = floors - 10;
		return 10 * 15 * 1000 + overTenthFloor * 12 * 1000;
	} else if (floors > 20) {
		const overTwentiethFloor = floors - 20;
		return 10 * 15 * 1000 + 10 * 12 * 1000 + overTwentiethFloor * 10 * 1000;
	}
}

// console.log(brickCalculator(5));
