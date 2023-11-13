import styled from 'styled-components';

export const Header = styled.header`
	background-color: #0f52ba;
	border: none;
	padding: 10px;
	color: white;
	height: 101px;
	display: flex;
	justify-items: start;
	justify-content: space-between;
	align-items: center;
	gap: 7px;
	padding: 0px 60px;
`;

export const Card = styled.div`
	background-color: white;
	border: none;
	color: white;
	height: 285px;
	width: 218px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 2px 8px 0px #00000022;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
`;

export const Button = styled.button`
	border: none;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 7px;
	cursor: pointer;
	justify-self: end;
`;

export const Title = styled.div`
	color: black;
	font-weight: 400;
	font-size: 16px;
	width: 122px;
`;

export const Tag = styled.div`
	background-color: #373737;
	color: white;
	font-weight: 700;
	font-size: 15px;
	border-radius: 5px;
	height: 26px;
	padding: 0px 10px;
	display: flex;
	align-items: center;
`;

export const CartMenu = styled.div`
	background-color: #0f52ba;
	color: white;
	height: 100%;
	width: 486px;
	display: flex;
	flex-direction: column;
	box-shadow: -5px 0px 6px 0px #00000021;
	position: absolute;
	align-self: end;
	gap: 50px;
`;

export const MiniCard = styled.div`
	background-color: white;
	border: none;
	color: white;
	height: 101px;
	width: 385px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 2px 8px 0px #00000022;
	border-radius: 8px;
	display: flex;
	flex-direction: row;
	padding: 0px 30px 0px 30px;
`;

export const InputQtd = styled.div`
	background-color: white;
	border: #bfbfbf;
	color: black;
	height: 19px;
	width: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	box-shadow: 0px 2px 8px 0px #00000022;
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	padding-right: 5px;
	padding-left: 5px;
	font-size: 8px;
`;

export const ButtonAddOrRemove = styled.button`
	background-color: white;
	border: none;
	color: black;
	height: 10px;
	width: 7px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
`;

export const SkeletonHeader = styled.header`
	background-color: #c0c0c0;
	border: none;
	padding: 10px;
	color: white;
	height: 101px;
	display: flex;
	justify-items: start;
	justify-content: space-between;
	align-items: center;
	gap: 7px;
	padding: 0px 60px;
	animation: pulse 2s infinite;
`;

export const SkeletonCard = styled.div`
	background-color: #c0c0c0;
	border: none;
	color: white;
	height: 285px;
	width: 218px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 2px 8px 0px #00000022;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
`;
