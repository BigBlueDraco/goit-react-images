import PropTypes from 'prop-types';

export const Button = func => {
  return (
    <button className="Button" onClick={e => this.props.func(e)}>
      Load more
    </button>
  );
};
Button.propTypes = {
  func: PropTypes.func,
};
