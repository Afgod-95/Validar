import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import StartCase from '../Pages/StartCase';
import KYC from '../Pages/startcaseChildren/KYC';
import KYB from '../Pages/startcaseChildren/KYB';
import Sidebar from '../components/Sidebar';
import CaseHistory from '../Pages/CaseHistory';

const Navigation = () => {
    return (
       
            <>
            <div>
                <Sidebar>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/start-case" element={<StartCase />} />
                    <Route path="/start-case/kyc" element={<KYC />} />
                    <Route path="/start-case/kyb" element={<KYB />} />
                    <Route path="/case-history" element={<CaseHistory />} />
                </Routes>
                </Sidebar>

            </div>
                
            </>
        
    );
};

export default Navigation;
