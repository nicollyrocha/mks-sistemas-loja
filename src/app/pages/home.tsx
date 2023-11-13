import DisplayProducts from '../components/products';
import { Button, Header } from '../styles';
import '../page.module.css';
import ShopCart from '../icons/shoppingCart';
import { useState } from 'react';
import { getProducts } from '@/services/getProducts';
import { useQuery } from 'react-query';
import { CartMenuComponent } from '../components/CartMenu';
import { SkeletonHome } from '../components/skeletonHome';

export interface IProductsProps {
	brand: string;
	createdAt: string;
	description: string;
	id: number;
	name: string;
	photo: string;
	price: string;
	updatedAt: string;
}

export const HomePage = () => {
	const [totalPrice, setTotalPrice] = useState(0);
	const [cartProducts, setCartProducts] = useState<IProductsProps[]>([]);
	const [openCart, setOpenCart] = useState(false);
	const retrieveProducts = async () => {
		const response = await getProducts();
		return response.products;
	};
	const {
		data: products,
		error,
		isLoading,
	} = useQuery('products', retrieveProducts);

	if (isLoading) return <SkeletonHome />;
	if (error) return <div>An error occurred</div>;

	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '50px',
					marginBottom: '50px',
				}}
			>
				<CartMenuComponent
					cartProducts={cartProducts}
					openCart={openCart}
					setCartProducts={setCartProducts}
					setOpenCart={setOpenCart}
					setTotalPrice={setTotalPrice}
					totalPrice={totalPrice}
				/>
				<Header>
					<div style={{ display: 'flex', gap: '5px' }}>
						<div
							style={{
								fontWeight: 'normal',
								fontSize: '40px',
							}}
						>
							MKS
						</div>
						<div style={{ marginTop: '22px', fontWeight: '300' }}>Sistemas</div>
					</div>
					<div
						style={{
							width: '90px',
						}}
					>
						<Button
							style={{
								backgroundColor: 'white',
								color: 'black',
								borderRadius: '8px 8px 8px 8px',
								height: '45px',
							}}
							onClick={() => setOpenCart(true)}
						>
							<ShopCart />
							<div>{cartProducts.length}</div>
						</Button>
					</div>
				</Header>
				<DisplayProducts
					cartProducts={cartProducts}
					setCartProducts={setCartProducts}
					products={products}
					setTotalPrice={setTotalPrice}
					totalPrice={totalPrice}
				/>
			</div>
		</>
	);
};
