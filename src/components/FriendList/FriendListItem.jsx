import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendName,
  FriendAvatar,
  FriendOnlineStatus,
} from 'components/FriendList/FriendList.styled';

const FriendListItem = ({ friends }) => {
  return friends.map(({ id, isOnline, avatar, name }) => (
    <FriendCard key={id}>
      <FriendOnlineStatus isOnline={isOnline}></FriendOnlineStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>cZx
    </FriendCard>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendListItem;
