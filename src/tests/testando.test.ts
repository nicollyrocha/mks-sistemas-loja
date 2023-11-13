const items = [
	{ id: 1, valor: '1200.00' },
	{ id: 2, valor: '600.00' },
	{ id: 3, valor: '3000.00' },
];

const stringToBR = (value: string) => {
	return `R$${Number(value).toLocaleString()}`;
};

export const addItem = (
	item: { id: number; valor: string },
	initialPrice?: number,
	initialCartProducts?: { id: number; valor: string }[]
) => {
	let cartProducts: { id: number; valor: string }[] = initialCartProducts || [];
	let totalPrice = initialPrice || 0;
	cartProducts.map(
		(item) => (
			(totalPrice = totalPrice + Number(item.valor)),
			(cartProducts = initialCartProducts ? initialCartProducts : [])
		)
	);
	cartProducts = [...cartProducts, item];
	totalPrice = totalPrice + Number(item.valor);

	return {
		cartProducts: cartProducts,
		totalPrice: stringToBR(totalPrice.toString()),
	};
};

describe('Testes básicos funcionalidades', () => {
	test('Formatando string do price para BRL', () => {
		expect(stringToBR('600.00')).toBe('R$600');
	});
	test('Add preço', () => {
		expect(addItem(items[0], 0)).toStrictEqual({
			cartProducts: [{ id: 1, valor: '1200.00' }],
			totalPrice: 'R$1.200',
		});
	});
	test('Add preço com preço inicial', () => {
		expect(addItem(items[1], 1800)).toStrictEqual({
			cartProducts: [{ id: 2, valor: '600.00' }],
			totalPrice: 'R$2.400',
		});
	});
	test('Add item com itens iniciais', () => {
		expect(addItem(items[1], 0, [items[2]])).toStrictEqual({
			cartProducts: [
				{ id: 3, valor: '3000.00' },
				{ id: 2, valor: '600.00' },
			],
			totalPrice: 'R$3.600',
		});
	});
	test('Add item com preço e itens iniciais', () => {
		expect(addItem(items[1], 2500, [items[2]])).toStrictEqual({
			cartProducts: [
				{ id: 3, valor: '3000.00' },
				{ id: 2, valor: '600.00' },
			],
			totalPrice: 'R$6.100',
		});
	});
});
