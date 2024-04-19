import React, { useState } from 'react'
import { SwitchToggle } from '../../../components/SmallSwitch';

const Address = () => {

const [address,setAddress] = useState(true)

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+233',
    phoneNumber: '',
    email: '',
    idType: '',
    idNumber: '',
    digitalAddress: ''
  });


  const idCardTypes = [
    'Ghana Card',
    'Voter ID',
    'Passport',
    'NHIS',
    'SSNIT',
    'Driver\'s License',
  ];

  const handleIdTypeChange = (event) => {
    setUser({ ...user, idType: event.target.value });
  };

  const handleIdNumberChange = (event) => {
    setUser({ ...user, idNumber: event.target.value });
  };

  return (
    <>
        
        <div className="main-header">
            <h3>Address</h3>
        </div>

        <form action="" className='form-container'>
            <div className="input-container">
                <div className="input-area">
                    <div className="input-field" style ={{marginBottom: '6px'}}>
                        <label htmlFor="first-name">First Name</label>
                        <input 
                        type="text" 
                        className='input' 
                        placeholder='First Name'
                        required={true}
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        />
                    </div>
                    <div className="input-field" style ={{marginBottom: '6px'}}>
                        <label htmlFor="last-name">Last Name</label>
                        <input 
                        type="text" 
                        className='input' 
                        placeholder='Last Name'
                        required={true}
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        />
                    </div>

                    <div className="input-field" style ={{marginBottom: '6px'}}>
                        <label htmlFor="phone-number">Candidate's Phone Number</label>
                        <div style={{ display: 'flex', gap: '.5rem' }}>
                            <input 
                                type="text" 
                                className='input' 
                                style={{ width: '40px' }}
                                placeholder='Country Code'
                                required={true}
                                value={user.countryCode}
                                
                            />
                            <input 
                                type="text" 
                                className='input' 
                                style={{ width: '150px' }}
                                placeholder='Phone Number'
                                required={true}
                                value={user.phoneNumber}
                                onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="input-field" style ={{marginBottom: '6px'}}>
                        <label htmlFor="last-name">Email</label>
                        <input 
                            type="text" 
                            className='input' 
                            placeholder='Email'
                            required={true}
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>


                    <div className="input-field">
                        <label htmlFor="phone-number">Candidate's ID</label>
                        <div style={{ display: 'flex', gap: '.5rem' }}>
                            <select 
                                style={{ width: '90px' }}
                                name="id-type" 
                                id="id-type"
                                className='input' 
                                value={user.idType}
                                onChange={handleIdTypeChange}
                            >
                                <option value="" >ID Type</option>
                                {idCardTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                                ))}
                            </select>   
                            <input 
                                type="text" 
                                className='input' 
                                style={{ width: '130px' }}
                                placeholder='ID Number'
                                required={true}
                                value={user.idNumber}
                                onChange={handleIdNumberChange}
                            />
                        </div>
                    </div>
                    </div>
                    <div className="input-field">
                    <label htmlFor="last-name">Digital Address</label>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <input 
                        type="text" 
                        className='input' 
                        placeholder='Enter candidate’s digital address'
                        required={true}
                        value={user.digitalAddress}
                        onChange={(e) => setUser({ ...user, digitalAddress: e.target.value })}
                        />
                        <SwitchToggle 
                            label = 'Toggle for Physical Address Verification'
                            checked={user.physicalAddress}
                            onChangee={(e) => setAddress(e.target.value)}
                        />
                    </div>
                        
                    </div>
                </div>
                <div className="button-area">
                    <button className='button'>
                    <p style={{ fontWeight: 'bold' }}>Start Verification</p>
                    </button>
                </div>
                </form>


    
    
    </>
  )
}

export default Address
