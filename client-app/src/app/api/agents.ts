import axios, { AxiosResponse } from 'axios';
import { request } from 'node:http';
import { IActivity } from '../models/Activity';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response : AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Activities = {
    list: (): Promise<IActivity[]> => requests.get('activities'),
    details: (id: string) => requests.get(`activities/${id}`),
    delete: (id: string) => requests.del(`activities/${id}`),
    create: (activity: IActivity) => requests.post('activities', activity),
    update: (activity: IActivity, id: string) => requests.put(`activities/${id}`, activity),
}

export default {
    Activities
}