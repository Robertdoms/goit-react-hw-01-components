import PropTypes from 'prop-types';
import { Container } from 'components/FriendList/FriendList.styled';
import FriendListItem from 'components/FriendList/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendListItem friends={friends} />
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.string.isRequired,
};
export default FriendList;
