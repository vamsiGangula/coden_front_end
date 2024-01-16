import React, { useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
} from "@mui/material";
import NextCookies from  "next-cookies";
import Styles from "../styles/register.module.scss";
import { _Signup } from "../utils/api/TrajectoryApiCalls";

function Register() {
  const [newDataPoint, setNewDataPoint] = useState({ x: "", y: "", user_name: "", user_email: "", user_phone: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!newDataPoint.user_name) {
      newErrors.user_name = "User Name is required";
      valid = false;
    }

    // Add email validation
    if (!newDataPoint.user_email || !/^\S+@\S+\.\S+$/.test(newDataPoint.user_email)) {
      newErrors.user_email = "Valid email is required";
      valid = false;
    }

    // Add phone number validation
    if (!newDataPoint.user_phone || !/^\d{10}$/.test(newDataPoint.user_phone)) {
      newErrors.user_phone = "Valid 10-digit phone number is required";
      valid = false;
    }

    // Add validation for x and y coordinates if needed

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDataPoint((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const registerbody = {
        userid: NextCookies({ ctx: "" })?.userDetails?.id
          ? NextCookies({ ctx: "" })?.userDetails?.id
          : NextCookies({ ctx: "" }).sessionid,
        user_name: newDataPoint?.user_name,
        user_email: newDataPoint?.user_email,
        user_phone: newDataPoint?.user_phone,
        coordinates: [
          {
            latitude: newDataPoint?.x,
            longitude: newDataPoint?.y,
          },
        ],
      };

      const resp = await _Signup(registerbody, NextCookies("ctx"));
      console.log(resp, "=====resp");
    }
  };

  return (
    <>
      <div className={Styles.registermain + " registermain "}>
        <div className={Styles.reg2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h1 className={Styles.reg3}>Sign Up</h1>
            </Grid>
            <Grid item xs={12}>
              <p className={Styles.reg4}>Create an account to get started</p>
            </Grid>
          </Grid>
        </div>
        <div className={Styles.reg1 + " reg1 "}>
          <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} className={Styles.reg5}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="User Name"
                    name="user_name"
                    value={newDataPoint.user_name}
                    onChange={handleInputChange}
                    error={Boolean(errors.user_name)}
                    helperText={errors.user_name}
                  />
                </Grid>
                <Grid item xs={12} className={Styles.reg5}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="User Email"
                    name="user_email"
                    value={newDataPoint.user_email}
                    onChange={handleInputChange}
                    error={Boolean(errors.user_email)}
                    helperText={errors.user_email}
                  />
                </Grid>
                <Grid item xs={12} className={Styles.reg5}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Mobile Number"
                    name="user_phone"
                    value={newDataPoint.user_phone}
                    onChange={handleInputChange}
                    error={Boolean(errors.user_phone)}
                    helperText={errors.user_phone}
                  />
                </Grid>
                <Grid item xs={12} className={Styles.reg5}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="X Coordinate"
                    name="x"
                    value={newDataPoint.x}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} className={Styles.reg5}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Y Coordinate"
                    name="y"
                    value={newDataPoint.y}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: 20 }}
              >
                Sign Up
              </Button>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Register;
