import React from 'react'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const SwitchToggle = ({ checked, label, onChange }) => {
  return(
    <div style={{display: 'flex', alignContent: 'center', gap: '.5rem'}}>
      <StyledSwitch
        checked={checked}
        onChange={onChange}
        inputProps={{ 'aria-label': 'loans controlled' }}
      />
       <p style={{fontSize: '12px', color: '#a8adb1'}}>{label}</p>
  </div>
  )
}

const SmallSwitch = ({ label, onChange, checked }) => {
  
  return (
    <div className="switch">
        <p style={{fontSize: '13px', color: '#a8adb1'}}>{label}</p>
        <StyledSwitch
            checked={checked}
            onChange={onChange}
            inputProps={{ 'aria-label': 'loans controlled' }}
        />
    </div>
  )
}

const StyledSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      width: 35,
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      transform: 'translateX(-8px)',
      '&.Mui-checked': {
        transform: 'translateX(9px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 15,
      height: 15,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  

  export { SmallSwitch, SwitchToggle }
  
  
