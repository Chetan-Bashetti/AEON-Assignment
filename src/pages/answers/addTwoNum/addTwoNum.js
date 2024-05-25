import React from 'react';

import './addTwoNum.css';

const AddTwoNum = () => {
	const [numOne, setNumOne] = React.useState(0);
	const [numTwo, setNumTwo] = React.useState(0);
	const [result, setResult] = React.useState(0);

	const setState = (event, setter) => {
		const { value } = event.target;

		// CHECK IF THE ENTERED VALUES IS NUMBER
		let reg = new RegExp('^[0-9]*$');
		if (reg.test(value)) {
			setter(value);
		} else {
			alert('Only number are allowed');
		}
	};

	const caclulateSum = () => {
		setResult(Number(numOne) + Number(numTwo));
	};

	return (
		<div className='add-two-num-wrapper'>
			<h1>Adding two numbers</h1>
			<input
				placeholder='Number 1'
				value={numOne}
				onChange={(e) => {
					setState(e, setNumOne);
				}}
				className='input-box'
			/>
			<input
				placeholder='Number 2'
				value={numTwo}
				onChange={(e) => {
					setState(e, setNumTwo);
				}}
				className='input-box'
			/>
			<button onClick={() => caclulateSum()} className='btn'>
				Add Two Numbers
			</button>
			<div>Total : {result}</div>
		</div>
	);
};

export default AddTwoNum;
