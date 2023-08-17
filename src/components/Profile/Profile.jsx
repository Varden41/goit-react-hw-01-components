import PropTypes from 'prop-types';

import {
  ProfileBox,
  DescriptionBox,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox className="profile">
      <DescriptionBox className="description">
        <Avatar src={avatar} alt={username} className="avatar" />
        <Name>Petra Marica</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionBox>

      <Stats>
        <StatsItem>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </StatsItem>
      </Stats>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
