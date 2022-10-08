import { FriendItem } from "./FriendItem/FriendItem"

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