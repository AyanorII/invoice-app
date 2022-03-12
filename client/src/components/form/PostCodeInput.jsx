import React from "react";
import Input from "./Input";

function PostCode({side}) {
  return (
    <Input
      label="Post Code"
      name={`${side}PostCode`}
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
