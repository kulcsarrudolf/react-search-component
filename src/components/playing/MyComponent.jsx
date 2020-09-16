import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const MyComponent = () => {
  const [value, setValue] = React.useState("red");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Colors</FormLabel>
        <RadioGroup
          data-testid="color-input"
          aria-label="color"
          name="color"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="red" control={<Radio />} label="Red" />
          <FormControlLabel value="blue" control={<Radio />} label="Blue" />
          <FormControlLabel value="white" control={<Radio />} label="White" />
        </RadioGroup>
      </FormControl>

      <div data-testid="result">
        {value === "red" && <p>red</p>}
        {value === "blue" && <p>blue</p>}
        {value === "white" && <p>white</p>}
      </div>
    </>
  );
};

export default MyComponent;
