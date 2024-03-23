import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { CardSelect } from "./CardSelect";

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

// esli
const arr1 = [
  "состояния больного",
  "состояния человека",
  "у больного",
  "человек",
];

// zn1
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

// esli
const arr3 = [
  "состояния больного",
  "состояния человека",
  "у больного",
  "человек",
];

// zn1
const arr4 = [
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

// esli
const arr5 = [
  "состояния больного",
  "состояния человека",
  "у больного",
  "человек",
];

// zn1
const arr6 = [
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

export const Main = () => {
  const theme = useTheme();

  const [personName, setPersonName] = React.useState("");
  const [personImg, setPersonImg] = React.useState("");

  const [personName1, setPersonName1] = React.useState("");
  const [personImg1, setPersonImg1] = React.useState("");

  const [personName2, setPersonName2] = React.useState("");
  const [personImg2, setPersonImg2] = React.useState("");

  const handleChange = (event, setState) => {
    const { value } = event.target;
    setState(value);
  };
  return (
    <>
      <div className="container">
        <div>
          <h2 className="mt-10 text-2xl hover:text-blue-500">Факты</h2>
          <div className="flex justify-between">
            {/* atr1 */}

            <div>
              <div className="flex space-x-6 mt-10">
                <div>
                  <FormControl>
                    <InputLabel id="personName-label">Атр</InputLabel>
                    <Select
                      labelId="personName-label"
                      id="personName"
                      value={personName}
                      onChange={(event) => handleChange(event, setPersonName)}
                      MenuProps={MenuProps}
                      sx={{ width: "200px", background: "white" }}
                    >
                      {arr1.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
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
                      value={personImg}
                      onChange={(event) => handleChange(event, setPersonImg)}
                      MenuProps={MenuProps}
                      sx={{ width: "200px", background: "white" }}
                    >
                      {arr2.map((img) => (
                        <MenuItem
                          key={img}
                          value={img}
                          style={getStyles(img, personImg, theme)}
                        >
                          {img}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="ml-40 mt-12">
                <button className="w-[150px] h-[50px] text-2xl bg-blue-500 border-2 border-blue-600 rounded-xl text-white">
                  Выбрать
                </button>
              </div>
            </div>

            {/* atr1 */}

            {/* atr2 */}

            <div>
              <div className="ml-40">
                <button className="w-[150px] h-[50px] text-2xl bg-blue-400 border-2 border-blue-500 rounded-xl text-white">
                  Вывод
                </button>
              </div>
              <div className="flex space-x-6 mt-10">
                <div>
                  <FormControl>
                    <InputLabel id="personName-label">Атр</InputLabel>
                    <Select
                      labelId="personName-label"
                      id="personName"
                      value={personName1}
                      onChange={(event) => handleChange(event, setPersonName1)}
                      MenuProps={MenuProps}
                      sx={{ width: "200px", background: "white" }}
                    >
                      {arr3.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName1, theme)}
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
                      value={personImg1}
                      onChange={(event) => handleChange(event, setPersonImg1)}
                      MenuProps={MenuProps}
                      sx={{ width: "200px", background: "white" }}
                    >
                      {arr4.map((img) => (
                        <MenuItem
                          key={img}
                          value={img}
                          style={getStyles(img, personImg1, theme)}
                        >
                          {img}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            {/* atr2 */}
          </div>

          {/* result */}

          <div className="w-[300px] h-[80px] rounded-lg bg-blue-200 border border-blue-500 mt-10"></div>

          <h2 className="mt-16 text-2xl hover:text-blue-500">Цель</h2>

          <div className="flex space-x-6 mt-10">
            <div>
              <FormControl>
                <InputLabel id="personName-label">Атр</InputLabel>
                <Select
                  labelId="personName-label"
                  id="personName"
                  value={personName2}
                  onChange={(event) => handleChange(event, setPersonName2)}
                  MenuProps={MenuProps}
                  sx={{ width: "200px", background: "white" }}
                >
                  {arr5.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName2, theme)}
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
                  value={personImg2}
                  onChange={(event) => handleChange(event, setPersonImg2)}
                  MenuProps={MenuProps}
                  sx={{ width: "200px", background: "white" }}
                >
                  {arr6.map((img) => (
                    <MenuItem
                      key={img}
                      value={img}
                      style={getStyles(img, personImg2, theme)}
                    >
                      {img}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
