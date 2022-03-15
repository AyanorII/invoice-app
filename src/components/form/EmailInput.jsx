import React from "react";
import Input from "./Input";

function EmailInput({value}) {
  return (
    <Input
      name={"clientEmail"}
      value={value || ""}
      label="Client's Email"
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
