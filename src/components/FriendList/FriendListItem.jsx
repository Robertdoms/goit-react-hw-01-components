import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendName,
  FriendAvatar,
  FriendOnlineStatus,
} from 'components/FriendList/FriendList.styled';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <FriendCard key={id}>
      <FriendOnlineStatus isOnline={isOnline}></FriendOnlineStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
