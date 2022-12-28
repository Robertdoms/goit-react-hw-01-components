import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendName,
  FriendAvatar,
  FriendOnlineStatus,
} from 'components/FriendList/FriendList.styled';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendCard>
      <FriendOnlineStatus isOnline={isOnline}></FriendOnlineStatus>
      <FriendAvatar src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
