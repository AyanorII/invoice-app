import React from "react";
import Input from "./Input";

function PostCode({ side, value }) {
  return (
    <Input
      name={`${side}Address.postCode`}
      value={value}
      label="Post Code"
      placeholder="E1 3EZ"
      className="postcode"
      rules={{
        required: {
          value: true,
          message: "Cannot be empty",
        },
      }}
    />
  );
}
export default PostCode;
