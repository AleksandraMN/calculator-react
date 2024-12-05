import { useState } from 'react';
import styles from './App.module.css';

const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', 'C'];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState('');

	const handleAddValue = (value) => {
		if (!operator) {
			setOperand1(operand1 + value);
		 } else {
			setOperand2(operand2 + value);
		 }
  };

	const handleOperatorClick = (value) => {
		if (!operand1) return;
      setOperator(value);
			setResult('');
  };

	const handleShowRezult = (value) => {
		let calculatedResult;
		if (operand1 && operator && operand2) {
			try {
			  if (operator === '+') {
					calculatedResult = Number(operand1) + Number(operand2);
				}
				if (operator === '-') {
					calculatedResult = Number(operand1) - Number(operand2);
				};
			  setResult(calculatedResult);
			  setOperand1(calculatedResult);
		    setOperand2('');
		    setOperator('');
			} catch (error) {
			  setResult('Ошибка');
			}
		 }
	  };

	const handleClearRezult = (value) => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
	};

  return (
		<div className={styles.App}>
			<div className={styles.calculator}>
        <input type="text" className={!result ? styles['calculator-screen'] : styles.result} value={!result ? `${operand1}${operator}${operand2}` : result} disabled />

        <div className={styles['calculator-keys']}>
					{nums.map((value) => <button key={value} type="button" className={value === '+' ? styles.operator : value === '-' ? styles.operator : value === '=' ? styles['equal-sign'] : value === 'C' ? styles['all-clear'] : null} value={value} onClick={(e) => {value === 'C' ? handleClearRezult(value) : value === '=' ? handleShowRezult(value) : value === '+' ? handleOperatorClick(value) : value === '-' ?  handleOperatorClick(value) : handleAddValue(value)}}>{value}</button>)}
        </div>
      </div>
		</div>
	);
};

