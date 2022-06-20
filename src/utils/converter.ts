export const convertToCurrecny = (input: string): string => {
	const formatter = new Intl.NumberFormat();

	return formatter.format(parseInt(input)).replace(/,/gi, '.');
};
