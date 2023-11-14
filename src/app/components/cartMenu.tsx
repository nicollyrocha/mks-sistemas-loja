import { Dispatch, SetStateAction } from 'react';
import CloseCart from '../icons/closeCart';
import CloseCartSm from '../icons/closeCartSm';
import { IProductsProps } from '../pages/home';
import {
	Button,
	ButtonAddOrRemove,
	CartMenu,
	InputQtd,
	MiniCard,
	Title,
} from '../styles';

export const CartMenuComponent = ({
	openCart,
	cartProducts,
	setTotalPrice,
	totalPrice,
	setCartProducts,
	setOpenCart,
}: {
	openCart: boolean;
	cartProducts: IProductsProps[];
	setTotalPrice: (value: SetStateAction<number>) => void;
	totalPrice: number;
	setCartProducts: Dispatch<SetStateAction<IProductsProps[]>>;
	setOpenCart: (value: SetStateAction<boolean>) => void;
}) => {
	const arrayWithoutDuplicatesForCart = cartProducts.filter(
		(valor, indice, self) => {
			return self.indexOf(valor) === indice;
		}
	);

	const onClickDeleteProductFromCart = (item: IProductsProps) => {
		const cartProductsFiltered = cartProducts.filter(
			(itemFilter) => itemFilter.id !== item.id
		);
		const cartProductsFilteredToTotalPrice = cartProducts.filter(
			(itemFilter) => itemFilter.id === item.id
		);
		setCartProducts(cartProductsFiltered);
		setTotalPrice(
			totalPrice - Number(item.price) * cartProductsFilteredToTotalPrice.length
		);
	};

	const onClickClose = () => {
		setOpenCart(false);
	};

	const removeItem = (item: IProductsProps) => {
		const cartProductsFiltered = cartProducts.filter(
			(itemFilter) => itemFilter.id === item.id
		);
		if (cartProductsFiltered.length >= 1) {
			setTotalPrice(totalPrice - Number(item.price));
			return cartProducts.splice(cartProducts.lastIndexOf(item), 1);
		} else {
			const cartProductsFilteredRemove = cartProducts.filter(
				(itemFilter) => itemFilter.id !== item.id
			);
			const cartProductsFilteredToTotalPrice = cartProducts.filter(
				(itemFilter) => itemFilter.id === item.id
			);
			setCartProducts(cartProductsFilteredRemove);
			setTotalPrice(
				totalPrice - Number(item.price) * cartProductsFilteredToTotalPrice.length
			);
		}
	};

	const addItem = (item: IProductsProps) => {
		setCartProducts([...cartProducts, item]);
		setTotalPrice(totalPrice + Number(item.price));
	};

	const cartProductsFilteredForMap = (item: IProductsProps) =>
		cartProducts.filter((itemFilter) => itemFilter.id === item.id);

	return (
		<>
			{openCart ? (
				<CartMenu
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between',
					}}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '60px',
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								padding: '30px 30px 0px 30px',
							}}
						>
							<Title
								style={{
									width: '200px',
									fontSize: '27px',
									fontWeight: '700',
									color: 'white',
									flexWrap: 'nowrap',
								}}
							>
								Carrinho <br /> de compras
							</Title>
							<div
								style={{
									display: 'flex',
									justifyContent: 'end',
								}}
							>
								<CloseCart onClickClose={onClickClose} />
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '20px',
							}}
						>
							{arrayWithoutDuplicatesForCart.length > 0 ? (
								arrayWithoutDuplicatesForCart.map((item) => {
									const price = Number(item.price).toLocaleString();

									return (
										<>
											<div>
												<MiniCard key={item.id} style={{ position: 'relative' }}>
													<div
														style={{
															position: 'absolute',
															marginLeft: '345px',
															marginTop: '-90px',
														}}
													>
														<CloseCartSm
															onClickClose={onClickDeleteProductFromCart}
															item={item}
														/>
													</div>
													<img
														src={item.photo}
														style={{
															width: '46px',
															height: '57px',
															objectFit: 'contain',
															marginTop: '10px',
														}}
														alt='produto'
													/>
													<div
														style={{
															display: 'flex',
															width: '113px',
															paddingRight: '10px',
															paddingLeft: '10px',
															alignItems: 'center',
														}}
													>
														<Title style={{ fontSize: '13px', width: '113px' }}>
															{item.name}
														</Title>
													</div>
													<div
														style={{
															display: 'flex',
															flexDirection: 'column',
															gap: '3px',
														}}
													>
														<div style={{ color: 'black', fontSize: '10px' }}>Qtd:</div>
														<InputQtd>
															<ButtonAddOrRemove
																style={{
																	cursor:
																		cartProductsFilteredForMap(item).length > 1
																			? 'pointer'
																			: 'auto',
																}}
																disabled={
																	cartProductsFilteredForMap(item).length === 1 ? true : false
																}
																onClick={() => removeItem(item)}
															>
																-
															</ButtonAddOrRemove>
															<div style={{ color: '#BFBFBF' }}>|</div>
															{cartProductsFilteredForMap(item).length}
															<div style={{ color: '#BFBFBF' }}>|</div>
															<ButtonAddOrRemove onClick={() => addItem(item)}>
																+
															</ButtonAddOrRemove>
														</InputQtd>
													</div>
													<Title
														style={{
															marginTop: '10px',
															display: 'flex',
															justifyContent: 'center',
															fontSize: '14px',
															fontWeight: '700',
														}}
													>
														R$ {price}
													</Title>
												</MiniCard>
											</div>
										</>
									);
								})
							) : (
								<div>Nenhum produto no carrinho.</div>
							)}
						</div>
					</div>

					<div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								width: '100%',
								textAlign: 'center',
								marginBottom: '10px',
								padding: '0px 30px 20px 30px',
							}}
						>
							<Title style={{ fontWeight: '700', color: 'white', fontSize: '28px' }}>
								Total:
							</Title>
							<Title style={{ fontWeight: '700', color: 'white', fontSize: '28px' }}>
								R${totalPrice}
							</Title>
						</div>
						<Button
							style={{
								backgroundColor: 'black',
								color: 'white',
								fontSize: '28px',
								fontWeight: '700',
								height: '97px',
							}}
						>
							Finalizar compra
						</Button>
					</div>
				</CartMenu>
			) : (
				<></>
			)}
		</>
	);
};
