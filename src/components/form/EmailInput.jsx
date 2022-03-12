import React from "react";
import Input from "./Input";

function EmailInput() {
  return (
    <Input
      label="Client's Email"
      name={"clientEmail"}
      placeholder="alexgrim@mail.com"
      type="email"
      rules={{
        required: {
          value: true,
          message: "Cannot be empty",
        },
      }}
    />
  );
}
export default EmailInput;
