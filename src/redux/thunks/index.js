import axios from 'axios';
import errorOccured from '../actions/commonActions';

const axiosInstance = axios.create({
    baseURL: 'https://foodiefast.herokuapp.com/API/v1/auth/',
});

axiosInstance.interceptors.response.use(
    response => response,
    error => Promise.reject(error.response.data),
);

const postDataThunkPublic = (endpoint, response, actionCreator, method) => (dispatch) => {
    return axiosInstance[method](endpoint, response).then((response) => {
        dispatch(actionCreator(response.data));
    }).catch((error) => {
        dispatch(errorOccured(error));
    });
};

const getDataThunkPublic = (endpoint, actionCreator) => (dispatch) => {
    return axiosInstance.get(endpoint).then((response) => {
        dispatch(actionCreator(response.data));
    }).catch((err) => {
        dispatch(errorOccured(err));
    });
};

const postDataThunkPrivate = (endpoint, data, actionCreator, method) => (dispatch) => {
    const token = localStorage.getItem('Token');

    axiosInstance.defaults.headers.common.Authorization = 'Bearer '.concat(token);
    return axiosInstance[method](endpoint, data).then((response) => {
        dispatch(actionCreator(response.data));
    }).catch((err) => {
        dispatch(errorOccured(err));
    });
};

export {
    postDataThunkPublic, postDataThunkPrivate, axiosInstance, getDataThunkPublic,
};
