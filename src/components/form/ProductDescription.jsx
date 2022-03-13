import React from "react";
import styled from "styled-components";
import Input from "./Input";

function ProductDescription() {
  return (
    <Input
      name="productDescription"
      label="Product Description"
      placeholder="Graphic Design"
      rules={{required: "Cannot be empty" }}
      />
  );
}
export default ProductDescription;
