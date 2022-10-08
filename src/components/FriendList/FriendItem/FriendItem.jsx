import PropTypes from 'prop-types';
export const FriendItem = ({ avatar, name, isOnline, }) => {
    return <li >
        <span  ></span>
  <img  src={avatar} alt="User avatar" width="48" />
        <p>{ name}</p>
</li>
}
FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};