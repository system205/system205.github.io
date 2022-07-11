import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import FactBlock from './components/FactBlock.svelte';

test('should render', () => {
	const { getByText } = render(FactBlock);
	expect(getByText('500')).toBeInTheDocument();
	expect(getByText('Server')).toBeInTheDocument();
});
