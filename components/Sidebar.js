import { Avatar, IconButton, Button } from '@mui/material';
import styled from 'styled-components'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import * as EmailValidator from 'email-validator'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Sidebar = () => {

	const createChat = () => {
		const input = prompt('Please enter recipient email address');

		if(!input) return null;

		if(EmailValidator.validate(input)){
			// PUSH TO DATABASE CHATS COLLECTION
		}
	}

	return (
		<Container>
			<Header>
				<UserAvatar onClick={()=>signOut(auth)}/>
				<IconsContainer>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</IconsContainer>
			</Header>

			<Search>
				<SearchIcon />
				<SearchInput placeholder='search chats'/>
			</Search>

			<SidebarButton onClick={createChat}>Start New Chat</SidebarButton>

			{/* LIST OF CHATS */}
		</Container>
	)
}

export default Sidebar

const Container = styled.div``;

const Header = styled.div`
	display: flex;
	position: sticky;
	top: 0;
	background-color: white;
	z-index: 1;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	height: 80px;
	border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
	cursor: pointer;
	transition: ease-in-out 400ms;
	:hover {
		opacity: 0.7;
		transition: ease-in-out 400ms;
	}
`;

const IconsContainer = styled.div``;

const Search = styled.div`
	display:flex;
	align-items:center;
	padding: 5px;
	border-radius: 2px;
`;

const SearchInput = styled.input`
	outline: none;
	border: none;
	flex: 1;
`;

const SidebarButton = styled(Button)`
	width:100%;
	border-top: 1px solid whitesmoke ;
	border-bottom: 1px solid whitesmoke ;
`;