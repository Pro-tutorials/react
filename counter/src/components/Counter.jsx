import './Counter.css';
import PropTypes from 'prop-types';

const Counter = ({ count }) => {
    return <div className="count">{count}</div>;
};

Counter.propTypes = {
    count: PropTypes.number.isRequired
};

export default Counter;
