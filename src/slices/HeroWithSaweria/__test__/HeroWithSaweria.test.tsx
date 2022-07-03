import React from 'react';
import { render, screen, userEvent, waitForElementToBeRemoved } from 'test/app-test-utils';
import { App } from 'App';
import { HeroWithSaweriaType } from '..';
import { results as HomePageData } from '__test__/data/prismic/home-page.json';
import { asText } from '@prismicio/richtext';

it('render hero with saweria', async () => {
	render(<App />, { route: '/' });
	const loadingComponent = document.querySelector('.dots-container');
	await waitForElementToBeRemoved(loadingComponent);
	const slices = HomePageData[0].data.body;
	const heroData = slices.find(
		(data) => data.slice_type === 'herowithsaweria'
	) as HeroWithSaweriaType;
	const heroEl = document.querySelector('section.hero');
	expect(heroEl).toBeInTheDocument();
	if (!heroEl) return;
	const title = asText(heroData.primary.title);
	const titleEl = screen.getByText(title);
	expect(titleEl).toBeInTheDocument();
});

