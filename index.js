"use strict";

const scores = [];

const displayScores = () => scores.join(", ");

const calculateAverage = () => {
	const total = scores.reduce( (prev, curr) => prev + parseInt(curr), 0);
	return total / scores.length;
};

// load user entries in scores array
for (let i = 2; i < process.argv.length; i++) {
	const score = parseFloat(process.argv[i]);
	if (!isNaN(score)) {
		// adding to scores list
		scores.push(score);

	} else {
		console.error(`invalid score: ${process.argv[i]}`)
	}
}

// display all scores
console.log(`${displayScores()} :all scores`)

// display average score
// average =calculateAverage()
console.log(`average: ${calculateAverage()}`)

// Name
console.log(" Abdullahi Mohamed,8918098");
