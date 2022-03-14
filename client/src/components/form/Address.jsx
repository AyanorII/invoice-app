import React from 'react';
import StreetAddressInput from './StreetAddressInput';
import CityInput from './CityInput';
import PostCode from './PostCodeInput';
import CountryInput from './CountryInput';

function Address({side}) {
  return (
    <>
      <StreetAddressInput side={side} />
      <CityInput side={side} />
      <PostCode side={side} />
      <CountryInput side={side} />
    </>
  );
}
export default Address
