import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { isConnected, transactionRequest } from "@gemwallet/api";
import styles from "./Form.module.scss";

export const Form = () => {
  const [value, setValue] = useState();

  const handleValueChange = (amount) => {
    setValue(amount);
  };

  const handleDonateButton = () => {
    isConnected().then((isConnected) => {
      if (isConnected) {
        const transaction = {
          chain: "xrp",
          network: "TEST",
          transaction: "payment",
          amount: value,
          destination: "rNsgBuWPVeHYvmkeaHxq1BKyncqMK3M415",
          token: "xrp",
          apiVersion: 1,
        };
        transactionRequest(transaction).then((status) => {
          if (status === "success") {
            alert("Your donation was properly made over the network");
          }
        });
      } else {
        alert("Please install GemWallet extension, it doesn't seem installed");
      }
    });
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
        <Button variant="contained" onClick={handleDonateButton}>
          Donate
        </Button>
      </div>
    </Paper>
  );
};
