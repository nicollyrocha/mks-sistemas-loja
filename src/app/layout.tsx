'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const queryClient = new QueryClient();
	return (
		<html lang='en'>
			<head>
				<title>MKS Sistemas</title>
			</head>
			<body className={inter.className}>
				<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
			</body>
		</html>
	);
}
