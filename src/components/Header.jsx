import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const arr1 = [
  "состояния больного",
  "состояния человека",
  "у больного",
  "человек",
];

const arr2 = [
  "приступ неврологии",
  "является анимия ",
  "бессоница",
  "нервное заболевание",
  "болезнь страха",
  "поражена ног",
  "тяжелая трамва головы",
  "черепно мозговая трамва",
  "плохо слышит",
  "сердечный приступ",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName === name
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export const Aside = () => {
  const theme = useTheme();

  const [selectedValues, setSelectedValues] = useState([]);
  const [savedValues, setSavedValues] = useState("");

  const handleChange = (event, index) => {
    const { value } = event.target;
    setSelectedValues((prevState) => {
      const updatedValues = [...prevState];
      updatedValues[index] = value;
      return updatedValues;
    });
  };

  const handleSave = () => {
    setSavedValues(selectedValues.filter(value => value !== "").join(" И "));
    setSelectedValues([]);
  };

  return (
    <>
      <div className="container">
        {/* 1 */}
        <div className="mt-10 flex space-x-6">
          <div className="mt-2">
            <h2 className="text-2xl">Если</h2>
          </div>
          <div>
            <FormControl>
              <InputLabel id="personName-label">Атр</InputLabel>
              <Select
                labelId="personName-label"
                id="personName"
                value={selectedValues[0] || ""}
                onChange={(event) => handleChange(event, 0)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr1.map((name, index) => (
                  <MenuItem
                    key={`arr1-${index}`}
                    value={name}
                    style={getStyles(name, selectedValues[0], theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mt-2">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl>
              <InputLabel id="personImg-label">Знач</InputLabel>
              <Select
                labelId="personImg-label"
                id="personImg"
                value={selectedValues[1] || ""}
                onChange={(event) => handleChange(event, 1)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr2.map((img, index) => (
                  <MenuItem
                    key={`arr2-${index}`}
                    value={img}
                    style={getStyles(img, selectedValues[1], theme)}
                  >
                    {img}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Add other blocks similarly */}

        <div className="mt-10 ml-20">
          <button className="w-[100px] h-[40px] bg-red-500 text-white rounded-lg" onClick={handleSave}>
            Сохранить
          </button>
          <div className="mt-4">
            {savedValues && <p>{savedValues}</p>}
          </div>
        </div>
      </div>
    </>
  );
};
