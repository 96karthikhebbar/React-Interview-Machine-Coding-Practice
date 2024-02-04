import { useRef, useState, useEffect } from 'react';

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
	const [otp, setOtp] = useState(new Array(length).fill(''));

	const inputRefs = useRef([]);

	useEffect(() => {
		if (inputRefs.current[0]) {
			inputRefs.current[0].focus();
		}
	}, []);

	console.log('otp =', otp);
	console.log('inputRefs =', inputRefs);

	const handleChange = (index, e) => {
		const value = e.target.value;
		if (isNaN(value)) return;
		const newOtp = [...otp];
		// allow only one Input
		newOtp[index] = value.substring(value.length - 1);
		setOtp(newOtp);
	};
	const handleClick = () => {};
	const handleKeyDown = () => {};

	return (
		<div>
			{/* <h3>OtpInput</h3> */}
			{otp.map((value, index) => (
				<input
					className='otpInput'
					key={index}
					type='text'
					ref={(input) => (inputRefs.current[index] = input)}
					value={value}
					onChange={(e) => handleChange(index, e)}
					onClick={(e) => handleClick(index)}
					onKeyDown={(e) => handleKeyDown(index, e)}
				/>
			))}
		</div>
	);
};

export default OtpInput;
