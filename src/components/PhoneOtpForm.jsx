import {useState} from 'react'

const PhoneOtpForm = () => {
  return (
    <div>
        <form onSubmit={() => {}}>
            <input 
                type="text" 
                value={phoneNumber}
                onChange={handlePhoneNumChange}
            />
        </form>
    </div>
  )
}

export default PhoneOtpForm