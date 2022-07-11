// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/svelte';
import FactBlock from './components/FactBlock.svelte';

test('should render', () => {
	const { getByText } = render(FactBlock);
	expect(getByText('Next')).toBeInTheDocument();

	expect(getByText('is 500')).toBeInTheDocument();

	expect(getByText('«Server»')).toBeInTheDocument();
});

test('should change fact', async () => {
	const { getByText } = render(FactBlock);

	const button = getByText('Next');
	const what = getByText('is 500');
	const fact = getByText('«Server»');

	await fireEvent.click(button);

	expect(what).not.toContain('is 500');
	expect(fact).not.toContain('«Server»');
});
