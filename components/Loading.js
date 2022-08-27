import { LinearProgress, CircularProgress } from "@mui/material"
import styled from 'styled-components'

const Loading = () => {
	return (
		<LoadingContainer>
			<LinearProgress color="success" />
			<CircularProgress color="success" />
			loading
		</LoadingContainer>
	)
}

export default Loading

const LoadingContainer = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
`;