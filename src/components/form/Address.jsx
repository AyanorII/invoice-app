import React, {useState} from "react";
import StreetAddressInput from "./StreetAddressInput";
import CityInput from "./CityInput";
import PostCode from "./PostCodeInput";
import CountryInput from "./CountryInput";

function Address({ side, invoice }) {
  const [inv, setInv] = useState({
    street: invoice ? invoice[`${side}Address`].street : "",
    city: invoice ? invoice[`${side}Address`].city : "",
    postCode: invoice ? invoice[`${side}Address`].postCode : "",
    country: invoice ? invoice[`${side}Address`].country : "",
  })
  return (
    <>
      <StreetAddressInput side={side} value={inv.street} />
      <CityInput side={side} value={inv.city} />
      <PostCode side={side} value={inv.postCode} />
      <CountryInput side={side} value={inv.country} />
    </>
  );
}
export default Address;
