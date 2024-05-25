import React from 'react';
import QuestionThree from './pages/answers/Q3';
import AddTwoNum from './pages/answers/addTwoNum';
import Navbar from './pages/navbar/navbar';

import './App.css';

function App() {
	const [displayTask, setDisplayTask] = React.useState(0);
	return (
		<div className='App'>
			<div>
				<div>
					<button onClick={() => setDisplayTask(0)} className='task-btn'>
						Task 1
					</button>
					<button onClick={() => setDisplayTask(1)} className='task-btn'>
						Task 2
					</button>
					<button onClick={() => setDisplayTask(2)} className='task-btn'>
						Task 3
					</button>
				</div>
				<div>
					{displayTask === 0 && <QuestionThree />}
					{displayTask === 1 && <AddTwoNum />}
					{displayTask === 2 && <Navbar />}
				</div>
			</div>
		</div>
	);
}

export default App;
