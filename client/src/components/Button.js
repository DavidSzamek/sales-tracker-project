import styled from 'styled-components';
import { color, shape } from '../styles';

const Button = styled.button`
	margin-top: 2rem;
	background: #4169E1;
	border: 0px;
	padding: 1rem;
	color: white;
	border-radius: ${shape.borderRadius};
	letter-spacing: 0.1rem;
	width: 100px;
	margin-left: 60px;

	&:hover {
		cursor: pointer;
	}
`;

export {
	Button
}