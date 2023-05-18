import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { handleGetAllCompanies } from "../../actions/companyActions";

export const AllCompanies = (props) => {

  const dispatch = useDispatch();

  const { loading, companies }  = useSelector(state => state.companies)
  console.log(companies)

  useEffect(() => {
    dispatch(handleGetAllCompanies());
  }, [dispatch]);

  const handleDeleteClick = (idToDelete) => {
    // deleteDeviceById(idToDelete)
    //   .then((deletedDevice) => {
    //     const filteredDevices = devices.filter((device) => {
    //       return device._id !== idToDelete;
    //     });

    //     setDevices(filteredDevices);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="w-50 mx-auto text-center">
      <Link to="/company/new">Add new company</Link>
      <h2>Companies</h2>
      {companies.map((company) => {
        const { _id, companyName, companyEmail } = company;
        return (
          <div key={_id} className="shadow mb-4 rounded border p-4">
            <Link to={`/companies/${_id}`}>
              <h4>{companyName}</h4>
            </Link>
            <p>{companyEmail}</p>
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
                to={`/companies/${_id}/edit`}
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

export default AllCompanies;
