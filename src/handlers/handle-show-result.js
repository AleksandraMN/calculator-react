export const handleShowResult = ({operand2, operand1, operator, setOperand1, setOperand2, setResult, setOperator}) => {
	let calculatedResult;
	if (operand2 === '') {
		calculatedResult = Number(operand1);
	} else {
		if (operator === '+') {
			calculatedResult = Number(operand1) + Number(operand2);
		}
		if (operator === '-') {
			calculatedResult = Number(operand1) - Number(operand2);
		}
	}
	setResult(calculatedResult);
	setOperand1(calculatedResult);
	setOperand2('');
	setOperator('');
};
