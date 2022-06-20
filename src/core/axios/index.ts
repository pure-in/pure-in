import axios from 'axios';

export const saweria = axios.create({
	baseURL: 'https://pure-in-backend.herokuapp.com',
});

const openWeatherApiKey = process.env.REACT_APP_OPENWEATHER_API ?? '';

export const openWeather = axios.create({
	baseURL: 'http://api.openweathermap.org/data/2.5',
	params: {
		appid: openWeatherApiKey,
	},
});

