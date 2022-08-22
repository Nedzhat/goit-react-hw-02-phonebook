import PropTypes from 'prop-types';

export const Filter = ({text, onChange}) => {
    return <div><p>{text}</p>
      <input type="text" name="find" onChange={onChange}/></div>
}

Filter.propTypes = {
    text: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}