import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';

import { getDeviceById,
    deleteDeviceById,
} from "../services/internalApiService";

export const OneDevice = (props) => {
    const { id } = useParams();
    const [device, setDevice] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getDeviceById(id)
            .then((data) => {
                setDevice(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (device === null) {
        return null;
    }

    const { deviceNumber } = device;

    const handleDeleteClick = () => {
        deleteDeviceById(id)
            .then((deletedDevice) => {
                navigate("/devices");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="shadow mb-4 rounded border p-4">
            <h2>Device</h2>
            <h3>Device Number: {deviceNumber}</h3>

            <div className="mt-2">
                        <button
                            onClick={(e) => {
                                handleDeleteClick(id);
                            }}
                            className="btn btn-sm btn-outline-danger mx-1">Delete
                        </button>
                        <Link
                            to={`/devices/${id}/edit`}
                            className="btn btn-sm btn-outline-warning mx-1"
                        >
                            Edit
                        </Link>
                    </div>
        </div>
    );
};

export default OneDevice;