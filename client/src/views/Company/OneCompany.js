import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { 
    handleGetCompanyById,
} from "../../actions/companyActions";

export const OneCompany = (props) => {
    const { id } = useParams();
    const { loading, company } = useSelector(state => state.companyDetails)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleGetCompanyById(id))
    }, [dispatch]);

    if (company === null) {
        return null;
    }


    const handleDeleteClick = () => {
        // deleteDeviceById(id)
        //     .then((deletedDevice) => {
        //         navigate("/devices");
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    }

    return (
        <div className="shadow mb-4 rounded border p-4">
            <h2>Company</h2>
            <h3>Company name: {company.companyName}</h3>
            <h3>Company email: {company.email}</h3>

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

export default OneCompany;