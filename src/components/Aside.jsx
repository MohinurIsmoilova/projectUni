import React from "react";
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

// and

const arr3 = [
  "свет кожи",
  "тело часто",
  "голова",
  "боль в плече",
  "он",
  "дыхание",
  "есть нарушения памяти",
  "скованность шеи",
  "нервничать",
  "охлаждение тела",
];

// zn2
const arr4 = [
  "бледнеет ИЛИ краснеет",
  "потеет",
  "болит",
  "есть",
  "упадает в обморок",
  "замедляется",
  "да",
];

// 3

const arr5 = [
  "потливость",
  "слаба",
  "сильная боль",
  "Эпилепсия",
  "потеря аппетита",
  "одышка",
  "головокружение",
  "разговаривает сам с собой",
  "тремор рук",
];

const arr6 = ["имеется", "наблюдается", "появляется в лице", "да"];

// 4

const arr7 = [
  "слезы текут",
  "нервы",
  "спит меньше",
];

const arr8 = [
  "да",
  "устанут",
  "да",
];

// 5

const arr9 = [
  "выделения слюны",
  "есть бессоница",
];

const arr10 = [
  "да",
];

// 6

const arr11 = [
  "появление высыпание области болезни",
  "назначение",
];

const arr12 = [
  "да",
  "физиотерапия",
];


// 7

const arr13 = [
  "появление высыпание области болезни",
  "назначение",
];

const arr14 = [
  "да",
  "физиотерапия",
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

  const [personName, setPersonName] = React.useState("");
  const [personImg, setPersonImg] = React.useState("");

  //   2

  const [personName1, setPersonName1] = React.useState("");
  const [personImg1, setPersonImg1] = React.useState("");

  //   3

  const [personName2, setPersonName2] = React.useState("");
  const [personImg2, setPersonImg2] = React.useState("");

  //   4

  const [personName3, setPersonName3] = React.useState("");
  const [personImg3, setPersonImg3] = React.useState("");

  //   5

  const [personName4, setPersonName4] = React.useState("");
  const [personImg4, setPersonImg4] = React.useState("");

  //   6

  const [personName5, setPersonName5] = React.useState("");
  const [personImg5, setPersonImg5] = React.useState("");

  //   7

  const [personName6, setPersonName6] = React.useState("");
  const [personImg6, setPersonImg6] = React.useState("");
  // Add more state variables as needed for other dropdowns

  const handleChange = (event, setState) => {
    const { value } = event.target;
    setState(value);
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
                value={personName}
                onChange={(event) => handleChange(event, setPersonName)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
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
                sx={{ width: "500px" }}
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
          {/* Add more dropdowns here */}
        </div>

        {/* 1 */}

        {/* 2 */}
        <div className="mt-10 flex space-x-6 ml-8">
          <div className="mt-2">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl>
              <InputLabel id="personName-label">Атр</InputLabel>
              <Select
                labelId="personName-label"
                id="personName"
                value={personName1}
                onChange={(event) => handleChange(event, setPersonName1)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
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
                sx={{ width: "500px" }}
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
          {/* Add more dropdowns here */}
        </div>
        {/* 2 */}

        {/* 3 */}
        <div className="mt-10 flex space-x-6 ml-8">
          <div className="mt-2">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl>
              <InputLabel id="personName-label">Атр</InputLabel>
              <Select
                labelId="personName-label"
                id="personName"
                value={personName2}
                onChange={(event) => handleChange(event, setPersonName2)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr5.map((name) => (
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
                value={personImg2}
                onChange={(event) => handleChange(event, setPersonImg2)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
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
          {/* Add more dropdowns here */}
        </div>
        {/* 3 */}

        {/* 4 */}
        <div className="mt-10 flex space-x-6 ml-8">
          <div className="mt-2">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl>
              <InputLabel id="personName-label">Атр</InputLabel>
              <Select
                labelId="personName-label"
                id="personName"
                value={personName3}
                onChange={(event) => handleChange(event, setPersonName3)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr7.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName3, theme)}
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
                value={personImg3}
                onChange={(event) => handleChange(event, setPersonImg3)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr8.map((img) => (
                  <MenuItem
                    key={img}
                    value={img}
                    style={getStyles(img, personImg3, theme)}
                  >
                    {img}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Add more dropdowns here */}
        </div>
        {/* 4 */}

          {/* 5 */}
        <div className="mt-10 flex space-x-6 ml-8">
          <div className="mt-2">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl>
              <InputLabel id="personName-label">Атр</InputLabel>
              <Select
                labelId="personName-label"
                id="personName"
                value={personName4}
                onChange={(event) => handleChange(event, setPersonName4)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr9.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName4, theme)}
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
                value={personImg4}
                onChange={(event) => handleChange(event, setPersonImg4)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr10.map((img) => (
                  <MenuItem
                    key={img}
                    value={img}
                    style={getStyles(img, personImg4, theme)}
                  >
                    {img}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Add more dropdowns here */}
        </div>
        {/* 5 */}


  {/* 6 */}
        <div className="mt-10 flex space-x-6 ml-8">
          <div className="mt-2">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl>
              <InputLabel id="personName-label">Атр</InputLabel>
              <Select
                labelId="personName-label"
                id="personName"
                value={personName5}
                onChange={(event) => handleChange(event, setPersonName5)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr11.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName5, theme)}
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
                value={personImg5}
                onChange={(event) => handleChange(event, setPersonImg5)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr12.map((img) => (
                  <MenuItem
                    key={img}
                    value={img}
                    style={getStyles(img, personImg5, theme)}
                  >
                    {img}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Add more dropdowns here */}
        </div>
        {/* 6 */}

        {/* 7 */}
        <div className="mt-10 flex space-x-6 relative right-3">
          <div className="mt-2">
            <h2 className="text-2xl">Тогда</h2>
          </div>
          <div>
            <FormControl>
              <InputLabel id="personName-label">Атр</InputLabel>
              <Select
                labelId="personName-label"
                id="personName"
                value={personName6}
                onChange={(event) => handleChange(event, setPersonName6)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr13.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName6, theme)}
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
                value={personImg6}
                onChange={(event) => handleChange(event, setPersonImg6)}
                MenuProps={MenuProps}
                sx={{ width: "500px" }}
              >
                {arr14.map((img) => (
                  <MenuItem
                    key={img}
                    value={img}
                    style={getStyles(img, personImg6, theme)}
                  >
                    {img}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          {/* Add more dropdowns here */}
        </div>
        {/* 7 */}


        <div className="mt-10 ml-20">
          <button className="w-[100px] h-[40px] bg-red-500 text-white rounded-lg ">
            Сохранить
          </button>
         
        </div>
      </div>
    </>
  );
};
