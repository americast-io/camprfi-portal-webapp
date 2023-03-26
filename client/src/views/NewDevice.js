import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createDevice } from '../services/internalApiService';

import { useDispatch, useSelector } from 'react-redux';

export const NewDevice = (props) => {
    const navigate = useNavigate();

    const [deviceNumber, setDeviceNumber] = useState('');
    const [imei, setImei] = useState('');
    const [modelNumber, setModelNumber] = useState('');
    const [ iccid, setIccid] = useState('');

    const [errors, setErrors] = useState(null);

    const { user, loading } = useSelector(state => state.auth);
    const { isAuthenticated, error} = useSelector(state => state.auth);
    

    const handleNewDeviceSubmit = (event) => {
        event.preventDefault();

        const newDevice = {
            deviceNumber: deviceNumber,
            imei: imei,
            modelNumber: modelNumber,
            iccid: iccid
        }

        createDevice(newDevice)
        .then((data) => {
            navigate('/devices')
        })
        .catch((error) => {
            setErrors(error?.response?.data?.errors);
        });
    };

    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <form onSubmit={(e) => handleNewDeviceSubmit(e)}>
               
                <div className="form-group">
                    <label className="h6">Device Number</label>
                    {errors?.deviceNumber && (
                        <span style={{ color: 'red' }}> {errors?.deviceNumber?.message}</span>
                    )}
                    <input onChange={(event) => {
                        setDeviceNumber(event.target.value);
                    }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">IMEI</label>
                    {errors?.imei && (
                        <span style={{ color: 'red' }}> {errors?.imei?.message}</span>
                    )}
                    <input onChange={(event) => {
                        setImei(event.target.value);
                    }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">Model Number</label>
                    {errors?.modelNumber && (
                        <span style={{ color: 'red' }}> {errors?.modelNumber?.message}</span>
                    )}
                    <input onChange={(event) => {
                        setModelNumber(event.target.value);
                    }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label className="h6">ICCID</label>
                    {errors?.iccid && (
                        <span style={{ color: 'red' }}> {errors?.iccid?.message}</span>
                    )}
                    <input onChange={(event) => {
                        setIccid(event.target.value);
                    }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    );
};

export default NewDevice;