import styled from 'styled-components';
import { color, shape } from '../styles';

const Button = styled.button`
	margin-top: 2rem;
	background: ${color.backgroundMedium};
	border: 0px;
	padding: 1rem;
	color: ${color.textDark};
	border-radius: ${shape.borderRadius};
	letter-spacing: 0.1rem;

	&:hover {
		cursor: pointer;
	}
`;

export {
	Button
}