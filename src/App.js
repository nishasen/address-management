import "./styles.css";
import React, { useState } from "react";
import Address from "./Address";
import { userAddresses } from "./Api/userAddresses";
import { defaultAddress } from "./Api/defaultAddress";
import ShowAddressInput from "./ShowAddressInput";
import SavedAddressDisplay from "./SavedAddressDisplay";
//import { validPhoneNo, validPincode } from "./validation";

export default function App() {
  const [addresses, setAddresses] = useState([...userAddresses]);
  const [defaultAdd, setDefaultAdd] = useState(defaultAddress);
  const [showAddressInput, setShowAddressInput] = useState(false);
  return (
    <div className="App">
      <ShowAddressInput
        showAddressInput={showAddressInput}
        setShowAddressInput={setShowAddressInput}
      />
      <Address
        setAddresses={setAddresses}
        defaultAdd={defaultAdd}
        setDefaultAdd={setDefaultAdd}
        showAddressInput={showAddressInput}
        setShowAddressInput={setShowAddressInput}
      />
      <SavedAddressDisplay
        addresses={addresses}
        setAddresses={setAddresses}
        setDefaultAdd={setDefaultAdd}
        setShowAddressInput={setShowAddressInput}
      />
    </div>
  );
}
