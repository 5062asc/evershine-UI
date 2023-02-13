import React from "react";
import "./add.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { TextField, Button, Checkbox, Typography, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Add() {
  const [age, setAge] = React.useState("");
  const [mop, setMop] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleMop = (event) => {
    setMop(event.target.value);
  };

  return (
    <div className="form-container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {},
        }}
      >
        <Paper elevation={3}>
          <Box
            sx={{
              m: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              className="cfont"
              // sx={{ color: "rgb(255, 215, 0)" }}
            >
              Add Transaction For Clinic
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  // required
                  // value={formEmail}
                  fullWidth
                  label="Patient ID"
                  name="pID"
                  autoComplete
                  // onChange={(e) => setFormEmail(e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  // value={formPassword}
                  name="pName"
                  label="Patient Name"
                  id="pName"

                  // onChange={(e) => setFormPassword(e.target.value)}
                />
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  // value={formPassword}
                  name="case"
                  label="Case Description"
                  id="case"

                  // onChange={(e) => setFormPassword(e.target.value)}
                />
                <TextField
                  margin="normal"
                  // required
                  fullWidth
                  // value={formPassword}
                  name="cost"
                  label="Cost"
                  id="cost"

                  // onChange={(e) => setFormPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <div style={{ paddingTop: "3%" }}>
                  <Stack spacing={3}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Doctor Name
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Doctor Name"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Akash</MenuItem>
                        <MenuItem value={20}>Sanjna</MenuItem>
                        {/* <MenuItem value={30}>Thirty</MenuItem> */}
                      </Select>
                    </FormControl>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Mode of Payment
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mop}
                        label="Mode of Payment"
                        onChange={handleMop}
                      >
                        <MenuItem value={10}>UPI</MenuItem>
                        <MenuItem value={20}>Cash</MenuItem>
                        <MenuItem value={30}>Card</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </div>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
            <Box
              component="form"
              //   onSubmit={handleSubmit}
              // noValidate
              sx={{ mt: 1 }}
            ></Box>
          </Box>
        </Paper>
      </Box>
      {/* </Container> */}
    </div>
  );
}

export default Add;
