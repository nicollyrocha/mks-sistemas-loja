export const stringToBR = (value: string) => {
	return `R$${Number(value).toLocaleString()}`;
};
