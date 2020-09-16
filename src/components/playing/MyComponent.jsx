import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const colors = ["blue", "green", "red", "yellow", "violet", "indigo", "pink"];

const MyComponent = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Select a color!</FormLabel>
        <RadioGroup
          aria-label="color"
          name="color"
          value={value}
          onChange={handleChange}
        >
          {colors.map((color) => (
            <FormControlLabel
              data-testid={`${color}-radio-button`}
              value={color}
              key={color}
              control={<Radio />}
              label={color}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <div data-testid="result">
        {colors.includes(value) && <p>You selected {value}!</p>}
      </div>
    </>
  );
};

export default MyComponent;
