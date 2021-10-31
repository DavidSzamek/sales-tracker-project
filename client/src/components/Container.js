import styled from 'styled-components';
import { color, shape } from '../styles';

const StyledContainer = styled.div`
	padding: 2rem;
	background: ${color.backgroundLight};
	border: 1px black dashed;
	font-size: 1.4rem;
	margin-top: 20px;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 312px;
	margin-top: 150px;

	input {
		border: none;
		margin: 5px;
		background: ${color.backgroundLight};

	}
	${props => `
		text-align: ${props.alignContent};
	`}
`;

const Container = props => <StyledContainer {...props} />

export {
	Container
}