import axios from 'axios';

const http = axios.create({
    // baseURL: 'https://api.camprfi.com/api/v1',
    baseURL: 'http://localhost:8000/api/v1'
    // baseURL: 'https://127.0.0.1:8000/api/v1'
});

export const getAllDevices = async () => {
    const res = await http.get('/devices');
    return res.data;
};

export const getDeviceById = async (id) => {
    const res = await http.get(`/devices/${id}`);
    return res.data;
};

export const createDevice = async (data) => {
    const res = await http.post('/devices/admin', data, {withCredentials: true});
    return res.data;
};

export const updateDeviceById = async (id, data) => {
    const res = await http.put(`/devices/${id}`, data);
    return res.data;

};

export const deleteDeviceById = async (id) => {
    const res = await http.delete(`/devices/${id}/admin`);
    return res.data;
};

// user API
export const userLogin = async (data, config) => {
    const res = await http.post('/auth/login', data, config);
    return res.data;
}

export const registerUser = async (data, config) => {
    const res = await http.post('/auth/register', data, config);
    return res.data;
}

export const loadUser = async () => {
    const res = await http.get('/auth/me', {withCredentials: true});
    return res.data;
}

export const logoutUser = async () => {
    const res = await http.get('/auth/logout', {withCredentials: true} );
    return res.data;
}

// company API

export const getAllCompanies = async () => {
    const res = await http.get('/companies');
    return res.data;
};

export const getCompanyById = async (id) => {
    const res = await http.get(`/companies/${id}`);
    return res.data;
};

export const createCompany = async (data) => {
    const res = await http.post('/companies/admin', data, {withCredentials: true});
    return res.data;
};

export const updateCompanyById = async (id, data) => {
    const res = await http.put(`/companies/${id}`, data);
    return res.data;

};