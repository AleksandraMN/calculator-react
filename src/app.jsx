import { useState } from 'react';
import styles from './app.module.css';
import {
	handleClearResult,
	handleNum,
	handleOperator,
	handleResult,
	handleShowResult,
} from './handlers';
import { buttons } from './buttons';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('');

	const state = {
		operand1,
		setOperand1,
		operator,
		setOperator,
		operand2,
		setOperand2,
		result,
		setResult,
	};

	
	const showClassInput = () => (!result ? styles['calculator-screen'] : styles.result);

	const showClassButton = (value) =>
		value === '+' || value === '-'
			? styles.operator
			: value === '='
				? styles['equal-sign']
				: value === 'C'
					? styles['all-clear']
					: null;

	return (
		<div className={styles.app}>
			<div className={styles.calculator}>
				<input
					type="text"
					className={showClassInput()}
					value={!result ? `${operand1}${operator}${operand2}` : result}
					disabled
				/>

				<div className={styles['calculator-keys']}>
					{buttons.map((value) => (
						<button
							key={value}
							type="button"
							className={showClassButton(value)}
							value={value}
							onClick={() => {
								handleResult(
									state,
									value,
									handleClearResult,
									handleShowResult,
									handleOperator,
									handleNum,
								);
							}}
						>
							{value}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
