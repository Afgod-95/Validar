import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import Vector from '../assets/vector9.png';
import { FaRegFile } from 'react-icons/fa';
import {  NavLink, } from 'react-router-dom';
import './Sidebar.css'
import { FaRegUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from 'react-responsive'

const Sidebar = ({ children }) => {
    const [active,setActive] = useState(false)
    const [verification, setVerification] = useState('40 verification of 100 used')
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 5,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700],
        },
    }));

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    
      
    const links = [
        {
            id: 0,
            name: 'Dashboard',
            icon: <MdOutlineSpaceDashboard className='icons'/>,
            href: '/',
        },
        {
            id: 1,
            name: 'Start Case',
            icon: <FiEdit className='icons' />,
            href: '/start-case',
            childrens: [
                {
                    id: 2,
                    name: 'Know your Customer (KYC)',
                    icon: Vector,
                    href: '/start-case/kyc',
                },
                {
                    id: 3,
                    name: 'Know your Business (KYB)',
                    icon: Vector,
                    href: '/start-case/kyb',
                },
            ],
        },
        {
            id: 4,
            name: 'Case History',
            icon: <FaRegFile className='icons' />,
            href: '/case-history',
        },
    ];


    return (
        <>
        <div className="container">
            <div className='side-bar-container'>
                <div className="side-bar">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="links">
                        {links.map((item, index) => (
                            <div key={index} className="link-container">
                                <NavLink to={item.href} activeClassName="active" className="link">
                                    <p className="icons">{item.icon}</p>
                                    <p className="text">{item.name}</p>
                                </NavLink>
                                {item.childrens && (
                                    <div className="children">
                                        {item.childrens.map((child, childIndex) => (
                                            <NavLink className="child-link link" key={childIndex} to={child.href} activeClassName = 'active'>
                                                <img src={child.icon} className="child-icon" alt={child.name} />
                                                <p className="child-text">{child.name}</p>
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="bottom">
                            <div>
                                <div className="bar"></div>
                                <div className="usage">
                                    <p className=''>Usage</p>
                                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                                        <Stack spacing={2} sx={{ width: 200, justifyContent: 'center' }}>
                                            <BorderLinearProgress variant="determinate" value={40} />
                                        </Stack>
                                        <div>
                                            <p>{verification}</p>
                                            <NavLink to="/upgrade" className="_link" activeClassName = 'active' >
                                                <p >Upgrade</p>
                                            </NavLink>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="links">
                                <NavLink to='/account' className="link">
                                    <FaRegUser className='icons'/>
                                    <p className="text">Account</p>
                                </NavLink>

                                <NavLink to='/logout' className="link">
                                    <TbLogout2 className='icons'/>
                                    <p className="text">Logout</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>{ children }</div>
        </div>        
        {/* --------------DO YOUR MOBILE HERE SINCE YOU DIDN'T PROVIDE IS ----------------------*/}
        </>
        

    );
    
};

export default Sidebar;
