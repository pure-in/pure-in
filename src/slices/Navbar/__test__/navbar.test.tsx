import React from 'react';
import { App } from 'App';
import {
	act,
	getByRole,
	render,
	screen,
	userEvent,
	waitFor,
	waitForElementToBeRemoved,
} from 'test/app-test-utils';
import { results as Layout } from '__test__/data/prismic/main-layout.json';
import { NavbarType } from '..';
import { rest } from 'msw';
import server from '__test__/msw/server';
import homePageData from '__test__/data/prismic/home-page.json';
import layoutData from '__test__/data/prismic/main-layout.json';

it('render navbar without crashing', async () => {
	render(<App />, { route: '/' });
	const loadingComponent = document.querySelector('.dots-container');
	await waitForElementToBeRemoved(loadingComponent);
	const navbarEl = screen.getByRole('navigation');
	expect(navbarEl).toBeInTheDocument();
	if (!navbarEl) return;
	const slices = Layout[0].data.body;
	const navbarData = slices.find((data) => data.slice_type === 'navbar') as NavbarType;
	const linksData = navbarData.items;
	linksData.forEach((link) => {
		if (link.label) {
			const linkEl = getByRole(navbarEl, 'link', { name: link.label });
			expect(linkEl).toBeInTheDocument();
		}
	});
});

it('Should be show link on mobile', async () => {
	server.use(
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
							homePageData.results[0].data.body = [];
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
		})
	);
	act(() => {
		render(<App />, { route: '/' });
	});
	const loadingComponent = document.querySelector('.dots-container');
	await waitForElementToBeRemoved(loadingComponent);
	const navbarEl = screen.getByRole('navigation');
	expect(navbarEl).toBeInTheDocument();
	const hamburgetBtn = screen.getByTestId('hamburger-btn');
	expect(hamburgetBtn).toBeInTheDocument();
	expect(screen.queryByTestId('mobile-link')).not.toBeInTheDocument();
	act(() => {
		userEvent.click(hamburgetBtn);
	});
	expect(screen.getByTestId('mobile-link')).toBeInTheDocument();
});

// act(()=>{
//     const navbar = container.querySelector('#sandbox > nav');
//     fireEvent.change(navbar,{
//         target: { value: "nav"}
//     })
//     expect(screen.getByText()).toBeInTheDocument();s
// })

