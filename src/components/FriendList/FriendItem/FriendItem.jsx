import PropTypes from 'prop-types';
import{FriendListItem,Marker} from './FriendItem.styled'
export const FriendItem = ({ avatar, name, isOnline, }) => {
    return <FriendListItem >
        <Marker isOnline={isOnline}></Marker>
  <img  src={avatar} alt="User avatar" width="48" />
        <p>{ name}</p>
</FriendListItem>
}
FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};