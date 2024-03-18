import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

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

// array

const names = [
  "состояния больного",
  "состояния человека",
  "у больного",
  "человек",
];



const imgs = [
  "приступ неврологии",
  "является анимия ",
  "бессоница",
  "нервное заболевание",
];

// array

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const Main = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [personLife, setPersonLife] = React.useState([]);
  const [personImg, setPersonImg] = React.useState([]);
  const [personFull, setPersonFull] = React.useState([]);
  const [personSelect, setPersonSelect] = React.useState([]);
  const [personDay, setPersonDay] = React.useState([]);
  const [personLike, setPersonLike] = React.useState([]);
  const [personHello, setPersonHello] = React.useState([]);

  //   1

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   1

  //   2

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLife(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   2

  //   3

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonImg(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   3

  //   4

  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonFull(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   4

  //   5

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonSelect(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   5

  //   6

  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonDay(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   6

  //   7

  const handleChange6 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonLike(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   7

  //   8

  const handleChange7 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonHello(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //   8

  return (
    <>
      <div className="container">
        {/* 1 */}
        <div className="flex space-x-6">
          {/* 1 */}
          <div className="mt-4">
            <h2 className="text-2xl">Если</h2>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Атр
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personName}
                onChange={handleChange}
                label="Age"
              >
                {names.map((name) => (
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

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Знач
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personLife}
                onChange={handleChange1}
                label="Age"
              >
                {imgs.map((name) => (
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

          {/* 1 */}
        </div>

        {/* 1 */}

        {/* 2 */}
        <div className="flex space-x-6">
          {/* 2 */}
          <div className="mt-4 ml-8">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Атр
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personImg}
                onChange={handleChange2}
                label="Age"
              >
                {names.map((name) => (
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

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Знач
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personFull}
                onChange={handleChange3}
                label="Age"
              >
                {names.map((name) => (
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

          {/* 2 */}
        </div>
        {/* 2 */}

        {/* 3 */}
        <div className="flex space-x-6">
          {/* 3 */}
          <div className="mt-4 ml-8">
            <h2 className="text-2xl">И</h2>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Атр
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personSelect}
                onChange={handleChange4}
                label="Age"
              >
                {names.map((name) => (
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

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Знач
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personDay}
                onChange={handleChange5}
                label="Age"
              >
                {names.map((name) => (
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

          {/* 3 */}
        </div>

        {/* 3 */}

        {/* 4 */}
        <div className="flex space-x-6 relative right-3">
          {/* 4 */}
          <div className="mt-4">
            <h2 className="text-2xl">Тогда</h2>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Атр
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personLike}
                onChange={handleChange6}
                label="Age"
              >
                {names.map((name) => (
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

          <div className="mt-4">
            <h2 className="text-2xl">=</h2>
          </div>

          <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Знач
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={personHello}
                onChange={handleChange7}
                label="Age"
              >
                {names.map((name) => (
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

          {/* 4 */}
        </div>

        {/* 4 */}

        <div className="mt-10 ml-20">
          <button className="w-[100px] h-[40px] bg-red-500 text-white rounded-lg ">
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
};
