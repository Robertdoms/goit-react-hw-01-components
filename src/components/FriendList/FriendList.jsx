import { Container } from 'components/FriendList/FriendList.styled';
import FriendListItem from 'components/FriendList/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendListItem friends={friends} />
    </Container>
  );
};

export default FriendList;
