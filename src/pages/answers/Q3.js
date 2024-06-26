import React from 'react';

const QuestionThree = () => {
	React.useEffect(() => {
		// SUCCESS CASE
		console.log(
			'FOR INPUT = [2, 7, 11, 15] and TARGET = 9 ',
			twoSum([2, 7, 11, 15], 9)
		);
		console.log('FOR INPUT = [-1, 0] and TARGET = -1 ', twoSum([-1, 0], -1));
		console.log('FOR INPUT = [2, 3, 4] and TARGET = 6 ', twoSum([2, 3, 4], 6));

		// ERROR CASE
		console.log(twoSum([2, 3, 4], 4));
	}, []);

	const twoSum = (numbers, target) => {
		for (let i = 0; i < numbers.length; i++) {
			for (let j = 1; j < numbers.length; j++) {
				if (numbers[i] + numbers[j] === target) {
					return [i + 1, j + 1];
				}
			}
		}
		return console.error('indexes not found');
	};

	return (
		<div>
			<h4>This is Question 3</h4>
		</div>
	);
};
export default QuestionThree;
