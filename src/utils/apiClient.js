// @flow
import axios from 'axios';
import { ApiBase, Brand, Messages } from './constants';
import store from '../redux/store';
import { showSnackbar } from '../redux/ducks/snackbar';

const apiClient: Object = axios.create({
    baseURL: ApiBase,
    headers: {
        applicationMode: 'ONLINE',
        brandCode: Brand,
        'content-type': 'application/json; charset=utf-8',
        environmentType: 'LIVE',
        'Ocp-Apim-Subscription-Key': '3b55f80acf2d435db5e43ab3f2853531',
    },
});

apiClient.interceptors.response.use(
    value => value,
    error => {
        store.dispatch(showSnackbar(error.message ? ? Messages.ApiError));

        return Promise.reject(error);
    },
);

export default apiClient;