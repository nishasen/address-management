import React, { useEffect } from "react";
import "./styles.css";

export default function SavedAddressDisplay({
  addresses,
  setAddresses,
  setDefaultAdd,
  setShowAddressInput
}) {
  const editAddess = (id) => {
    setShowAddressInput(true);
    const filterAddress = addresses.filter((address) => address.id === id);
    setDefaultAdd(...filterAddress);
  };
  const deleteAddress = (id) => {
    const resetAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(resetAddresses);
  };

  return (
    <div>
      {addresses.map(
        ({ id, name, phoneNo, pincode, city, state, address, addressType }) => (
          <div className="address-display" key={id}>
            <div className="address-type">{addressType.toUpperCase()}</div>
            <h4>
              {name.toUpperCase()} {phoneNo}
            </h4>
            <p>
              <span className="para-style">ADDRESS</span> - {address}, {city},{" "}
              {state}
            </p>
            <p>
              <span className="para-style">PINCODE</span> - {pincode}
            </p>
            <div className="btn-saved-address">
              <button className="btn-edit" onClick={() => editAddess(id)}>
                Edit
              </button>
              <button className="btn-delete" onClick={() => deleteAddress(id)}>
                Delete
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}
