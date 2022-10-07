export const Statistics = ({ title, stats })=> {
  return (
    <section >
      {title ? <h2>{title}</h2> : ''}
      <ul >
        {stats.map(el => {
          return (
            <li  key={el.id}>
              <span>{el.label}</span>
              <span>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}






