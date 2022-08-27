import styled from "styled-components"
import Head from 'next/head'
import { Button } from "@mui/material"
import { auth, provider } from "../firebase"
import { signInWithPopup } from 'firebase/auth'

const Login = () => {

	const signIn = () => {
		signInWithPopup(auth, provider).catch(alert)
	}

	return (
		<Container>
			<Head>
				<title>Login</title>
			</Head>

			<LoginContiner>
				<Logo src="https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg"/>
				<LoginButton onClick={signIn} variant="outline">Sign in with Google</LoginButton>
			</LoginContiner>
		</Container>
	)
}

export default Login

const Container = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	background-color: whitesmoke;
`;


const LoginContiner = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: lightgray;
	gap: 40px;
	border-radius: 10px;
	padding: 40px;
`;

const Logo = styled.img`
	height: 100px;
`;

const LoginButton = styled(Button)`
	color: white;
	font-weight: bold;
	background-color: green;
	width: 200px;
	:hover {
		background-color: darkgreen;
		color: lightgreen;
	}
`;