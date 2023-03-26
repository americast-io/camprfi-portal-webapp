import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { 
    getDeviceById,
    updateDeviceById,
} from '../services/internalApiService';

export const EditDevice = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [deviceNumber, setDeviceNumber] = useState('');
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        getDeviceById(id)
            .then((data) => {
                setName(data.name);
                setDeviceNumber(data.deviceNumber);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleEditDeviceSubmit = (event) => {
        event.preventDefault();

        const editedDevice = {
            name,
            deviceNumber,
        }

        updateDeviceById(id, editedDevice)
        .then((updatedDevice) => {
            navigate(`/devices/${id}`)

        })
        .catch((error) => {
            setErrors(error?.response?.data?.errors);
        })
    };


    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
            <form onSubmit={(e) => handleEditDeviceSubmit(e)}>
                <div className="form-group">
                    <label className="h6">Name</label>
                    {errors?.name && (
                        <span style={{ color: 'red' }}> {errors?.name?.message}</span>
                    )}
                    <input onChange={(event) => {
                        setName(event.target.value);
                    }}
                        type="text"
                        className="form-control"
                        value={name}
                    />
                </div>
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
                        value={deviceNumber}
                    />
                </div>
                <button className="btn btn-sm btn-outline-success">Submit</button>
            </form>
        </div>
    );
};

export default EditDevice;