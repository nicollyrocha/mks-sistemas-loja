import { IProductsProps } from '@/app/pages/home';

const createdAt = '2026-01-01T00:00:00.000Z';

export const products: IProductsProps[] = [
	{
		id: 1,
		name: 'Iphone 11 128 GB',
		brand: 'Apple',
		description:
			'Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.',
		photo: '/products/iphone.svg',
		price: '5000.00',
		createdAt,
		updatedAt: createdAt,
	},
	{
		id: 2,
		name: 'AirPods',
		brand: 'Apple',
		description:
			'Com os AirPods, você desfruta de um som de alta qualidade sem fios e com estojo de recarga.',
		photo: '/products/airpods.svg',
		price: '1200.00',
		createdAt,
		updatedAt: createdAt,
	},
	{
		id: 3,
		name: 'Apple Watch Series 7',
		brand: 'Apple',
		description:
			'O Apple Watch faz coisas que outros aparelhos não conseguem porque ele fica no seu pulso.',
		photo: '/products/watch.svg',
		price: '3200.00',
		createdAt,
		updatedAt: createdAt,
	},
	{
		id: 4,
		name: 'Macbook Air',
		brand: 'Apple',
		description:
			'Chip M1 com desempenho excepcional, bateria para o dia todo e um design ultrafino.',
		photo: '/products/macbook.svg',
		price: '8200.00',
		createdAt,
		updatedAt: createdAt,
	},
	{
		id: 5,
		name: 'iPad Air',
		brand: 'Apple',
		description:
			'Tela Liquid Retina de 10,9 polegadas, chip poderoso e compatível com Apple Pencil.',
		photo: '/products/ipad.svg',
		price: '4500.00',
		createdAt,
		updatedAt: createdAt,
	},
	{
		id: 6,
		name: 'Headset Gamer',
		brand: 'HyperX',
		description:
			'Som surround 7.1, almofadas confortáveis e microfone com cancelamento de ruído.',
		photo: '/products/headset.svg',
		price: '600.00',
		createdAt,
		updatedAt: createdAt,
	},
	{
		id: 7,
		name: 'Controle Sem Fio',
		brand: 'Sony',
		description:
			'Resposta tátil e gatilhos adaptáveis para uma experiência de jogo imersiva.',
		photo: '/products/console.svg',
		price: '450.00',
		createdAt,
		updatedAt: createdAt,
	},
	{
		id: 8,
		name: 'Câmera Digital',
		brand: 'Canon',
		description:
			'Sensor de 24 MP, gravação em Full HD e Wi-Fi integrado para compartilhar suas fotos.',
		photo: '/products/camera.svg',
		price: '3000.00',
		createdAt,
		updatedAt: createdAt,
	},
];
