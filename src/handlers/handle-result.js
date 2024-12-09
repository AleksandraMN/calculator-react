export const handleResult = (
	state,
	value,
	handleClearResult,
	handleShowResult,
	handleOperator,
	handleNum,
) =>
	value === 'C'
		? handleClearResult(state)
		: value === '='
			? handleShowResult(state)
			: value === '+' || value === '-'
				? handleOperator(state, value)
				: handleNum(state, value);
