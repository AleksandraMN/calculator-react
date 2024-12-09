
export const handleOperator = ({operator, operand1, setResult, setOperator}, value) => {
	if (operand1 === '0' || operator) return;
	setResult('');
	setOperator(value);
};
