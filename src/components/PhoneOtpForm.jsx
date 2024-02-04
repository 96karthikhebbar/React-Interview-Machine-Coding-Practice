import { useState } from 'react';

const PhoneOtpForm = () => {
	const [phoneNumber, setPhoneNumber] = useState('');
	const [showOtpInput, setShowOtpInput] = useState(false);

	const handlePhoneNumChange = (event) => {
		setPhoneNumber(event.target.value);
	};

	function handlePhoneNumSubmit(event) {
		event.preventDefault();

		// Phone Num Validattion
		const regex = /[^0-9]/g;
		if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
			alert('Invalid Phone Number');
			return;
		}

		// call Back-End API

		// Show input Field
		setShowOtpInput(true);

		return alert('Hi.... Test123!!!');
	}

	return (
		<div>
			{!showOtpInput ? (
				<form onSubmit={handlePhoneNumSubmit}>
					<input
						type='text'
						value={phoneNumber}
						onChange={handlePhoneNumChange}
						placeholder='Enter Phone Number'
					/>
					<button type='submit'>Submmit</button>
				</form>
			) : (
				<div>
					<p>Enter Otp sent to {phoneNumber}</p>
				</div>
			)}
		</div>
	);
};

export default PhoneOtpForm;
