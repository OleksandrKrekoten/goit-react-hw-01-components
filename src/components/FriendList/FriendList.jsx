import { FriendItem } from "./FriendItem/FriendItem"
import PropTypes from 'prop-types';
export const FriendList = ({friends}) => {
    return <ul>
 {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
</ul>
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.string,
};