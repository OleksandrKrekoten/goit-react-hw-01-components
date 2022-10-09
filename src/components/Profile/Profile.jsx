import PropTypes from 'prop-types';
import {
  BsFillHandThumbsUpFill,
  BsFillPersonFill,
  BsGeoAltFill,
  BsTagsFill,
  BsEyeFill,
  BsFillPersonPlusFill,
} from 'react-icons/bs';
import {
  UserName,
  UserPhoto,
  Tag,
  Location,
  ProfileContainer,
  CardContainer,
  ListStatistics,
  ListItemStatistics,
  StatisticsLabel,
  StatisticsQuantity,
} from './Profile.styled';
export const Profile = ({ tag, location, avatar, stats, username }) => {
  return (
    <CardContainer>
      <ProfileContainer>
        <UserPhoto src={avatar} alt="User avatar" />
        <UserName>
          <BsFillPersonFill />
          {username}
        </UserName>
        <Tag>
          <BsTagsFill />@{tag}
        </Tag>
        <Location>
          <BsGeoAltFill />
          {location}
        </Location>
      </ProfileContainer>

      <ListStatistics>
        <ListItemStatistics>
          <StatisticsLabel>
            <BsFillPersonPlusFill />
            Followers
          </StatisticsLabel>
          <StatisticsQuantity>{stats.followers}</StatisticsQuantity>
        </ListItemStatistics>
        <ListItemStatistics>
          <StatisticsLabel>
            <BsEyeFill />
            Views
          </StatisticsLabel>
          <StatisticsQuantity>{stats.views}</StatisticsQuantity>
        </ListItemStatistics>
        <ListItemStatistics>
          <StatisticsLabel>
            <BsFillHandThumbsUpFill />
            Likes
          </StatisticsLabel>
          <StatisticsQuantity>{stats.likes}</StatisticsQuantity>
        </ListItemStatistics>
      </ListStatistics>
    </CardContainer>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
