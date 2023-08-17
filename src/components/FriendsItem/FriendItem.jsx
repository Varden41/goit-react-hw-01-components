import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendItem.styled';
const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>{isOnline}</Status>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;
