import PropTypes from 'prop-types';
import {
  Container,
  FriendCard,
  FriendName,
  FriendAvatar,
  FriendOnlineStatus,
} from 'components/FriendList/FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendCard key={id}>
          <FriendOnlineStatus isOnline={isOnline}></FriendOnlineStatus>
          <FriendAvatar src={avatar} alt={name} />
          <FriendName>{name}</FriendName>
        </FriendCard>
      ))}
    </Container>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
