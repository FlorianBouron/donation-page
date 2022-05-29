import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./Form.module.scss";

export const Form = () => {
  const [value, setValue] = useState();

  const handleValueChange = (amount) => {
    setValue(amount);
  };

  return (
    <Paper className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h6">Your donation</Typography>
      </div>
      <div className={styles.body}>
        <ButtonGroup aria-label="outlined primary button group">
          <Button
            variant={value === 5 ? "contained" : "outlined"}
            onClick={() => handleValueChange(5)}
          >
            XRP 5
          </Button>
          <Button
            variant={value === 50 ? "contained" : "outlined"}
            onClick={() => handleValueChange(50)}
          >
            XRP 50
          </Button>
          <Button
            variant={value === 500 ? "contained" : "outlined"}
            onClick={() => handleValueChange(500)}
          >
            XRP 500
          </Button>
        </ButtonGroup>
        <div className={styles.textAreaContainer}>
          <TextField
            className={styles.textArea}
            label="Your comment"
            multiline
            rows={2}
          />
        </div>
        <Button variant="contained">Donate</Button>
      </div>
    </Paper>
  );
};
