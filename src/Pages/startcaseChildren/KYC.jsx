import React, { useState } from 'react';
import Header from '../../components/Header';
import Switched from '../../components/Switched';
import { SmallSwitch, SwitchToggle } from '../../components/SmallSwitch';
import FacialIcon from '../../assets/facial.png'; 
import Address from './KYC_forms/Address';
import Onboarding from './EnhancedKYC/Onboarding';


const KYC = () => {
  const [onboardingChecked, setOnboardingChecked] = useState(true);
  const [loansChecked, setLoanChecked] = useState(false);
  const [creditScoreChecked, setCreditScoreChecked] = useState(false);
  const [rentalChecked, setRentalChecked] = useState(false);
  const [addressChecked, setAddressChecked] = useState(false);

  const [kycChecked, setKycChecked] = useState(true);
  const [enhancedKYCChecked, setEnhancedKYCChecked] = useState(false);

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
    digitalAddress: ''
  });
  const handleSwitchChange = (type) => {
    switch (type) {
      case 'onboarding':
        setOnboardingChecked(true)  
        setLoanChecked(false);
        setCreditScoreChecked(false);
        setRentalChecked(false);
        setAddressChecked(false);
        break;

      case 'loans':
        setOnboardingChecked(false);
        setLoanChecked(true);
        setCreditScoreChecked(false);
        setRentalChecked(false);
        setAddressChecked(false);
        break;

      case 'creditScore':
        setOnboardingChecked(false);
        setLoanChecked(false);
        setCreditScoreChecked(true);
        setRentalChecked(false);
        setAddressChecked(false);
        break;

      case 'rental':
        setOnboardingChecked(false);
        setLoanChecked(false);
        setCreditScoreChecked(false);
        setRentalChecked(true);
        setAddressChecked(false);
        break;

      case 'address':
        setOnboardingChecked(false);
        setLoanChecked(false);
        setCreditScoreChecked(false);
        setRentalChecked(false);
        setAddressChecked(true);
        break;

      default:
        break;
    }
  };

  const idCardTypes = [
    'Ghana Card',
    'Voter ID',
    'Passport',
    'NHIS',
    'SSNIT',
    'Driver\'s License',
  ];


  const handleEnhancedKYC_Change = (type) => {
    switch(type) {
      case 'enhancedKYC':
        setEnhancedKYCChecked(true);
        setKycChecked(false); 
        break;
  
      case 'kyc':
        setKycChecked(true); 
        setEnhancedKYCChecked(false); 
        break;
  
      default:
        break;
    }
  };
  


  const handleIdTypeChange = (event) => {
    setUser({ ...user, idType: event.target.value });
  };

  const handleIdNumberChange = (event) => {
    setUser({ ...user, idNumber: event.target.value });
  };

  const handleFacialRecognitionChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    setUser({ ...user, facialRecongition: file }); // Store the file data
  };

  const handleFacialIconClick = () => {
    document.getElementById('file-input').click()
  };

  return (
    <div className='page'>
      <div className='header-contain'>
        <div className="main">
          <div className="header-cont">
            <Header />
          </div>
        </div>
      </div>

      <div className='main'>
        <div className="main-header">
          <h3>E-KYC</h3>
          <p>Provide the details of the candidate</p>
        </div>
        <div className="switch-container">
        <Switched 
          label={'Onboarding'}
          checked={onboardingChecked}
          onChange={() => handleSwitchChange('onboarding')}
        />

        <Switched 
          label={'Loans'}
          checked={loansChecked}
          onChange={() => handleSwitchChange('loans')}
        />

        <Switched 
          label={'Credit Score'}
          checked={creditScoreChecked}
          onChange={() => handleSwitchChange('creditScore')}
        />

        <Switched
          label={'Rental/Lease'}
          checked={rentalChecked}
          onChange={() => handleSwitchChange('rental')}
        />

        <Switched
          label={'Address'}
          checked={addressChecked}
          onChange={() => handleSwitchChange('address')}
        /> 
        
        </div>
        <div className="switch-container switch-cont">
          <SmallSwitch
            label={'KYC'}
            checked={kycChecked}
            onChange={() => handleEnhancedKYC_Change('kyc')}
          />
          <SmallSwitch
            label={'Enhanced KYC'}
            checked={enhancedKYCChecked}
            onChange={() => handleEnhancedKYC_Change('enhancedKYC')}
          />
        </div>  
      </div>
      <div className="header-contain"></div>
      <div className="main">
        {/* .....................kyc start.......................*/}
        {onboardingChecked && kycChecked && (
          <>
         
            <div className="main-header">
              <h3>Candidate</h3>
            </div>
    
            <form action="" className='form-container'>
                <div className="input-container">
                  <div className="input-area">
                    <div className="input-field">
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
                    <div className="input-field">
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
    
                    <div className="input-field">
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
                    <div className="input-field">
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
  
        )}
        {addressChecked && kycChecked && (
          <>
            <Address />
          </>
        )}

        {/* .....................kyc end.......................*/}

        {/* .....................enhanced kyc start.......................*/}
        {/* .....................enhanced kyc end.......................*/} 
        {enhancedKYCChecked && enhancedKYCChecked &&(
          <>
            <Onboarding />
          </>
        )} 
      </div>
    </div>
  );
}

export default KYC;
