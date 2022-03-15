import React from "react";
import Input from "./Input";

function ProductDescription({ invoice }) {
  return (
    <Input
      name="description"
      value={invoice ? invoice.description : ""}
      label="Product Description"
      placeholder="Graphic Design"
      rules={{required: "Cannot be empty" }}
      />
  );
}
export default ProductDescription;
