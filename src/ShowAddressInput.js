import React from "react";

export default function ShowAddressInput({
  showAddressInput,
  setShowAddressInput
}) {
  const showInputBox = () => setShowAddressInput(!showAddressInput);
  const addressText = showAddressInput ? "Hide Address" : "Add Address";
  return (
    <button
      style={{
        backgroundColor: showAddressInput ? "grey" : "",
        color: showAddressInput ? "white" : ""
      }}
      className="btn-add-address"
      onClick={showInputBox}
    >
      {addressText}
    </button>
  );
}
