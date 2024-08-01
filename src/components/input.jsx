const Input = ({ handleChange }) => {
	const changeValue = (e) => {
		handleChange(e.target.value);
	};

	return (
		<div>
			<input
				className="border border-gray-400 px-1 rounded-sm"
				type="text"
				onChange={changeValue}
			/>
		</div>
	);
};

export default Input;
