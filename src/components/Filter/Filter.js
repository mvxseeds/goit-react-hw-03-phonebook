import { Label, Input } from "./Filter.styled";
import PropTypes from "prop-types";

const Filter = ({ onChange, value }) => {
  return (
    <Label htmlFor="filter">
      Find contacts by name
      <Input type="text" onChange={onChange} value={value} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
