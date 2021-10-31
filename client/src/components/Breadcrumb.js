import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color, shape } from '../styles';

const BreakcrumbWrapper = styled.div`
	padding: 10px 20px;
	background: #4169E1;
	border: 1px black solid;

	a {
		color: white;
		text-decoration: none;
		font-size: 1.4rem;

		&:hover {
			text-decoration: underline;
		}
	}
`;

const Breadcrumb = ({
	location,
	text
}) => {
	return (
		<BreakcrumbWrapper>
			<Link to={location}>{text}</Link>
		</BreakcrumbWrapper>
	)
}

export {
	Breadcrumb
}