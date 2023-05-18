import './App.css';
import { useEffect } from 'react';

import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AllDevices } from './views/AllDevices';
import { OneDevice } from './views/OneDevice';
import { NewDevice } from './views/NewDevice';
import { EditDevice } from './views/EditDevice';
import { NotFound } from './views/NotFound';
import  AllCompanies from './views/Company/AllCompanies';
import {Login} from './components/user/Login';
import { Register } from './components/user/Register';
import { loadUserAction } from './actions/userActions';
import store from './store';
import  Header  from './components/layout/Header';
import Dashboard from './views/Dashboard';
import OneCompany from './views/Company/OneCompany';






function App() {

  const { user, isAuthenticated, error} = useSelector(state => state.auth);

  useEffect(() => {
    store.dispatch(loadUserAction())
  }, [])

  return (
    <div className="container">
    <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/devices" element={<AllDevices />} />
        <Route path="/devices/:id/edit" element={<EditDevice />} />
        <Route path="/devices/:id" element={<OneDevice />} />
        <Route path="/devices/new" element={<NewDevice />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/companies" element={<AllCompanies />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/companies/:id" element={<OneCompany/>} />


      </Routes>

    </div>
  );
}

export default App;
