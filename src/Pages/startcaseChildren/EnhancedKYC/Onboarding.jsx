import React, { useState } from 'react'
import { SmallSwitch, SwitchToggle } from '../../../components/SmallSwitch';
import FacialIcon from '../../../assets/facial.png'

const Onboarding = () => {

    const [address,setAddress] = useState(true)

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        countryCode: '+233',
        phoneNumber: '',
        email: '',
        idType: '',
        idNumber: '',
        facialRecongition: '', 
        digitalAddress: '',
        vehicleType: '',
        vehicleModel: '',
        vehicleYear: '',
        vehicleMileage: '',
        vehicleColor: '',
        vehicleCondition: '',
        passport: '',
        passportIDNumber: ''
    });

    const [asset, setAsset] = useState(true)

    const [sanction, setSanction] = useState(true)

    
  const handleIdTypeChange = (event) => {
    setUser({ ...user, idType: event.target.value });
  };

  const handleIdNumberChange = (event) => {
    setUser({ ...user, idNumber: event.target.value });
  };

  const handleFacialRecognitionChange = (event) => {
    const file = event.target.files[0]; 
    setUser({ ...user, facialRecongition: file }); 
  };

  const handleFacialIconClick = () => {
    document.getElementById('file-input').click()
  };


    const idCardTypes = [
        'Ghana Card',
        'Voter ID',
        'Passport',
        'NHIS',
        'SSNIT',
        'Driver\'s License',
    ];

  return (
    <>
        <div style={{overflowY: 'scroll', height: '60vh'}}>
            <div className="main-header">
                <h3>Candidate</h3>
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
                        <div className="input-field">
                            <div 
                                
                                className="input" 
                                style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '250px',
                                height: '60px',
                                marginTop: '12px'
                                }}
                                onClick={handleFacialIconClick} 
                            >
                                <label htmlFor="file-input">Facial Recognition</label>
                                <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '50px',
                                height: '50px',
                                cursor: 'pointer'
                                }}>
                                <img src={FacialIcon} alt="" />
                                </div>
                                <input 
                                type="file" 
                                id="file-input"
                                className='input' 
                                style={{ display: 'none' }} 
                                required={true}
                                onChange={handleFacialRecognitionChange}
                                />
                            </div>
                        </div>
                        {/* Displaying the selected image */}
                        {user.facialRecongition && (
                        <div className="input-field">
                            <img src={URL.createObjectURL(user.facialRecongition)} alt="Facial Recognition" />
                        </div>
                        )}
                    </div>

                    <div className='asset'>
                        <h3>Asset</h3>
                        <SmallSwitch 
                            label={null}
                            checked={asset}
                            onChange={(e) => setAsset(e.target.value)}
                        />
                    </div>

                    <div className="input-area">
                        <div className="input-field" style ={{marginBottom: '6px'}}>
                            <label htmlFor="first-name">Vehicle Type</label>
                            <input 
                                type="text" 
                                className='input' 
                                placeholder='Enter vehicle type'
                                required={true}
                                value={user.vehicleType}
                                onChange={(e) => setUser({ ...user, vehicle: e.target.value })}
                            />
                        </div>
                        <div className="input-field" style ={{marginBottom: '6px'}}>
                            <label htmlFor="last-name">Vehicle Make Model</label>
                            <input 
                            type="text" 
                            className='input' 
                            placeholder='Enter Vehicle Make Model'
                            required={true}
                            value={user.vehicleModel}
                            onChange={(e) => setUser({ ...user, vehicleModel: e.target.value })}
                            />
                        </div>

                        <div className="input-field" style ={{marginBottom: '6px'}}>
                            <label htmlFor="phone-number">Year</label>
                            <input 
                                type="text" 
                                className='input' 
                                style={{ width: '40px' }}
                                placeholder='Enter vehicle year'
                                required={true}
                                value={user.vehicleYear}
                                
                            />
                        </div>
                        <div className="input-field" style ={{marginBottom: '6px'}}>
                            <label htmlFor="last-name">Mileage</label>
                            <input 
                                type="text" 
                                className='input' 
                                placeholder='Enter vehicle mileeage'
                                required={true}
                                value={user.vehicleMileage}
                                onChange={(e) => setUser({ ...user, vehicleMileage: e.target.value })}
                            />
                        </div>


                        <div className="input-field">
                            <label htmlFor="phone-number">Color</label>  
                            <input 
                                type="text" 
                                className='input' 
                                style={{ width: '130px' }}
                                placeholder='Enter vehicle'
                                required={true}
                                value={user.vehicleColor}
                                onChange={(e) => setUser({...user, vehicleColor: e.target.value})}
                            />
                           
                        </div>
                        <div className="input-field">
                            <label htmlFor="last-name">Condition</label>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <input 
                                type="text" 
                                className='input' 
                                placeholder='Enter vehicle condition'
                                required={true}
                                value={user.vehicleCondition}
                                onChange={(e) => setUser({ ...user, vehicleCondition: e.target.value })}
                                />
                            </div> 
                        </div>
                    </div>
                    <div className='asset' style ={{borderTop: 'none'}}>
                        <h3>AML/Sanctions</h3>
                        <SmallSwitch 
                            label={null}
                            checked={sanction}
                            onChange={(e) => setSanction(e.target.value)}
                        />
                    </div>
                    <div className="input-field">
                        <label htmlFor="last-name">Candidate's Passport ID</label>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <input style = {{width: '100px'}}
                                type="text" 
                                className='input' 
                                placeholder='Passport'
                                required={true}
                                value={user.passport}
                                onChange={(e) => setUser({ ...user, passport: e.target.value })}
                            />
                            <input 
                                type="text" 
                                className='input' 
                                placeholder='Enter candidate’s digital address'
                                required={true}
                                value={user.passportIDNumber}
                                onChange={(e) => setUser({ ...user, passportIDNumber: e.target.value })}
                            />
                        </div> 
                    </div>

                </div>
                {/* Button */}
                <div className="button-area">
                    <button className='button'>
                    <p style={{ fontWeight: 'bold' }}>Start Verification</p>
                    </button>
                </div>
            </form>
            

        </div>
        
    </>
  )
}

export default Onboarding
