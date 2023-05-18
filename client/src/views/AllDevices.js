import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    getAllDevices,
    deleteDeviceById,
} from "../services/internalApiService";

export const AllDevices = (props) => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        getAllDevices()
            .then((data) => {
                setDevices(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDeleteClick = (idToDelete) => {
        deleteDeviceById(idToDelete)
            .then((deletedDevice) => {
                const filteredDevices = devices.filter((device) => {
                    return device._id !== idToDelete;
                });

                setDevices(filteredDevices);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-50 mx-auto text-center">
            <Link to="/devices/new">Add new device</Link>
            <h2>Devices</h2>
            {devices.map((device) => {
                const { _id, deviceNumber } = device;
                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <Link to={`/devices/${_id}`}>
                            <h4>{deviceNumber}</h4>
                        </Link>
                        <p>{deviceNumber}</p>
                        <div className="mt-2">
                            <button
                                onClick={(e) => {
                                    handleDeleteClick(_id);
                                }}
                                className="btn btn-sm btn-outline-danger mx-1"
                            >
                                Delete
                            </button>
                            <Link
                                to={`/devices/${_id}/edit`}
                                className="btn btn-sm btn-outline-warning mx-1"
                            >
                                Edit
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllDevices;
