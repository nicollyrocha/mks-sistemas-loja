import { SkeletonCard, SkeletonHeader } from '../styles';

export const SkeletonHome = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '50px',
				marginBottom: '50px',
			}}
		>
			<SkeletonHeader />
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
				{' '}
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
				<SkeletonCard />
			</div>
		</div>
	);
};
