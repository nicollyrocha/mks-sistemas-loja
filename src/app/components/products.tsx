import React, { Dispatch, SetStateAction } from 'react';
import '../page.module.css';
import { Button, Card, Tag, Title } from '../styles';
import ShopIcon from '../icons/shoppingBag';
import { IProductsProps } from '../pages/home';
import { stringToBR } from '@/functions';

const DisplayProducts = ({
	setCartProducts,
	cartProducts,
	products,
	setTotalPrice,
	totalPrice,
}: {
	setCartProducts: Dispatch<SetStateAction<IProductsProps[]>>;
	cartProducts: IProductsProps[];
	products: IProductsProps[];
	setTotalPrice: Dispatch<SetStateAction<number>>;
	totalPrice: number;
}) => {
	const onClickAddToCart = (item: IProductsProps) => {
		setCartProducts([...cartProducts, item]);
		setTotalPrice(totalPrice + Number(item.price));
	};

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: ' repeat(4, 1fr)',
				gap: '30px',
				justifyItems: 'center',
				overflow: 'hidden',
				alignSelf: 'center',
				justifySelf: 'center',
			}}
		>
			{products.map((item: IProductsProps) => {
				const price = stringToBR(item.price);

				return (
					<Card key={item.id}>
						<img
							src={item.photo}
							style={{
								width: '171px',
								height: '115px',
								objectFit: 'contain',
								marginTop: '10px',
							}}
							alt='produto'
						/>
						<div
							style={{
								display: 'flex',
								width: '218px',
								paddingRight: '10px',
								paddingLeft: '10px',
								alignItems: 'center',
							}}
						>
							<Title>{item.name}</Title>
							<Tag>{price}</Tag>
						</div>
						<div
							style={{
								color: 'black',
								fontSize: '10px',
								fontWeight: '300',
								padding: '0px 10px',
							}}
						>
							{item.description}
						</div>
						<Button
							style={{
								backgroundColor: ' #0f52ba',
								color: 'white',
								height: '32px',
								borderRadius: '0px 0 8px 8px',
							}}
							onClick={() => onClickAddToCart(item)}
						>
							<ShopIcon />
							<div>COMPRAR</div>
						</Button>
					</Card>
				);
			})}
		</div>
	);
};

export default DisplayProducts;
