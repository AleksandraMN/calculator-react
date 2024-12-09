

export const handleNum = ({operator, result, operand1, setOperand1, operand2, setOperand2}, value) => {
	if (operator === '' && !result) {
		if (operand1 === '0') {
			setOperand1(value);
		} else {
			setOperand1(operand1 + value);
		}
	} else {
		if (operator === '') return;
		if (operand2 === '0') {
			setOperand2(value);
		} else {
			setOperand2(operand2 + value);
		}
	}
};
