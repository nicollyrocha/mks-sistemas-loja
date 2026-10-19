import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';
import { IProductsProps } from '@/app/pages/home';

// Substitui a antiga API externa (mks-frontend-challenge no Heroku),
// mantendo o mesmo contrato: GET ?page=&rows=&sortBy=&orderBy= -> { products, count }
export const GET = (request: NextRequest) => {
	const params = request.nextUrl.searchParams;
	const page = Math.max(Number(params.get('page')) || 1, 1);
	const rows = Math.max(Number(params.get('rows')) || 10, 1);
	const sortBy = (params.get('sortBy') || 'id') as keyof IProductsProps;
	const orderBy = params.get('orderBy')?.toUpperCase() === 'ASC' ? 1 : -1;

	const sorted = [...products].sort((a, b) => {
		const valueA = sortBy === 'price' ? Number(a.price) : a[sortBy];
		const valueB = sortBy === 'price' ? Number(b.price) : b[sortBy];
		if (valueA === undefined || valueB === undefined) return 0;
		return valueA > valueB ? orderBy : valueA < valueB ? -orderBy : 0;
	});

	const start = (page - 1) * rows;

	return NextResponse.json({
		products: sorted.slice(start, start + rows),
		count: products.length,
	});
};
