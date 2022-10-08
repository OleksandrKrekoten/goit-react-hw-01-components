import PropTypes from 'prop-types';
import { BsFillHandThumbsUpFill, BsFillPersonFill, BsGeoAltFill, BsTagsFill, BsEyeFill, BsFillPersonPlusFill} from "react-icons/bs";
import { UserName, UserPhoto,Tag, Location, ProfileContainer, CardContainer, ListStatistics, ListItemStatistics,StatisticsLabel, StatisticsQuantity} from './Profile.styled';
export const Profile = ({ user: { tag, location, avatar, stats, username } }) => {
  
    return <CardContainer >
  <ProfileContainer>
    <UserPhoto
      src={avatar}
      alt="User avatar"
    />
        <UserName><BsFillPersonFill/>{username}</UserName>
        <Tag><BsTagsFill/>@{tag}</Tag>
        <Location><BsGeoAltFill/>{location}</Location>
  </ProfileContainer>

  <ListStatistics >
    <ListItemStatistics>
          <StatisticsLabel >
            <BsFillPersonPlusFill />
            Followers
          </StatisticsLabel>
      <StatisticsQuantity >
        {stats.followers}
      </StatisticsQuantity>
    </ListItemStatistics>
    <ListItemStatistics>
      <StatisticsLabel >
        <BsEyeFill/>
      Views
      </StatisticsLabel>
      <StatisticsQuantity >
        {stats.views}
      </StatisticsQuantity>
    </ListItemStatistics>
    <ListItemStatistics>
      <StatisticsLabel >
        <BsFillHandThumbsUpFill/>
      Likes
      </StatisticsLabel>
          <StatisticsQuantity >
            {stats.likes}
          </StatisticsQuantity>
    </ListItemStatistics>
  </ListStatistics>
</CardContainer>
}
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};