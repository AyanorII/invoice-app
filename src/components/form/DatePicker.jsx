import React from "react";
import styled from "styled-components";
import { useFormContext, Controller } from "react-hook-form";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import ErrorMessage from "./ErrorMessage";

const Wrapper = styled.div`
  .date-picker {
    background: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.text.secondary}30;
    border-radius: 5px;
    width: 100%;

    & > div {
      color: ${(props) => props.theme.text.primary};
    }
  }
`;

function Dates(props) {
  const [value, setValue] = React.useState(new Date());
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Wrapper className={props.className}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {errors.invoiceDate && (
          <ErrorMessage>{errors.invoiceDate.message}</ErrorMessage>
        )}
        <Controller
          name="createdAt"
          control={control}
          rules={{ required: "Cannot be empty" }}
          defaultValue={new Date()}
          render={({ field }) => (
            <DatePicker
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
                field.onChange(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} size="small" className="date-picker" />
              )}
            />
          )}
        />
      </LocalizationProvider>
    </Wrapper>
  );
}
export default Dates;
