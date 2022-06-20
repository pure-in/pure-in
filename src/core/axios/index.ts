import axios from 'axios';

export const saweria = axios.create({
	baseURL: 'https://pure-in-backend.herokuapp.com',
});

