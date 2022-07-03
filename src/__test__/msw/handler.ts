import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';
import clientData from '__test__/data/prismic/client.json';
import homePageData from '__test__/data/prismic/home-page.json';
import layoutData from '__test__/data/prismic/main-layout.json';
import donationData from '__test__/data/pure-in-api/donations.json';
import airPollutionData from '__test__/data/open-weather/air-pollutions-history.json';

const handler: RestHandler<MockedRequest<DefaultBodyType>>[] = [
	rest.get('https://pure-in.cdn.prismic.io/api/v2', (req, res, ctx) => {
		return res(ctx.json(clientData));
	}),
	rest.get('https://pure-in.cdn.prismic.io/api/v2/documents/search', (req, res, ctx) => {
		const query = req.url.searchParams.get('q');
		const pattern = /\((.+),\s+"(.+)"\)/;

		if (query) {
			const result = pattern.exec(query);
			if (result) {
				const type = result[1];
				const value = result[2];
				switch (type) {
					case 'my.pages.route':
						if (value === '/') return res(ctx.json(homePageData));
						break;
					case 'document.type':
						switch (value) {
							case 'layouts':
								return res(ctx.json(layoutData));
						}
				}
			}
		}

		return res(ctx.json(homePageData));
	}),
	rest.get('https://pure-in-backend.herokuapp.com/donations', (req, res, ctx) => {
		return res(ctx.json(donationData));
	}),
	rest.get('https://api.openweathermap.org/data/2.5/air_pollution/history', (req, res, ctx) => {
		return res(ctx.json(airPollutionData));
	}),
	rest.get('ttps://maps.googleapis.com/maps/vt', (req, res, ctx) => {
		return res(ctx.json(airPollutionData));
	}),
];

export default handler;

