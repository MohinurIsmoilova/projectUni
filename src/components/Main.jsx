import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";

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

  const [sentences, setSentences] = useState([]);
  const [sentences1, setSentences1] = useState([]);

  const addSentence = (sentence) => {
    setSentences([...sentences, sentence]);
  };

  const addSentences = (sentence) => {
    setSentences1([...sentences1, sentence]);
  };

  return (
    <>
      <div className="container">
        <div>
          <h2 className="mt-10 text-2xl hover:text-blue-500">Факты</h2>
          <div className="flex justify-between">
            {/* atr1 */}

            <div>
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      {sentences1.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      {sentences1.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      {sentences1.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences1.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences1.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences1.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
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
                      sx={{ width: "200px", background: "white" }}
                    >
                      {sentences1.map((sentence, index) => (
                        <MenuItem key={index} value={sentence}>
                          {sentence}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {/* Add more dropdowns here */}
              </div>
              {/* 7 */}

              <div className="ml-56 mt-12">
                <button className="w-[150px] h-[50px] text-2xl bg-blue-500 border-2 border-blue-600 rounded-xl text-white">
                  Выбрать
                </button>
              </div>
              <div className="rounded-lg bg-blue-200 border border-blue-500 mt-10">
                <h1 className="p-4 text-center text-2xl">Базы знаний</h1>
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
