'use client';
import DisplayPosts from './components/products';
import RootLayout from './layout';
import { HomePage } from './pages/home';
import './page.module.css';

export default function Home() {
	return (
		<RootLayout>
			<div className='main'>
				<HomePage />
			</div>
		</RootLayout>
	);
}
