import { PropTypes } from 'prop-types';

function Display({ total }) {
  return (
    <thead>
      <tr>
        <th colSpan="4">
          <input className="display" type="text" disabled value={total} />
        </th>
      </tr>
    </thead>
  );
}
export default Display;

Display.defaultProps = {
  total: '0',
};

Display.propTypes = {
  total: PropTypes.string,
};
