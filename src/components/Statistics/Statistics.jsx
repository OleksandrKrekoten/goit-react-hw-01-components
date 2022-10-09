import PropTypes from 'prop-types';
import { ListStatistics, ItemStatistics, Title } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}
      <ListStatistics>
        {stats.map(({ id, label, percentage }) => {
          return (
            <ItemStatistics key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </ItemStatistics>
          );
        })}
      </ListStatistics>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
