import "./styles.css";
import { v4 as uuidv4 } from "uuid";

export default function Address({
  setAddresses,
  defaultAdd,
  setDefaultAdd,
  showAddressInput,
  setShowAddressInput
}) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDefaultAdd({ ...defaultAdd, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAddress =
      defaultAdd.id === ""
        ? { ...defaultAdd, id: uuidv4() }
        : { ...defaultAdd };
    setAddresses((prevAddress) =>
      defaultAdd.id === ""
        ? [...prevAddress, newAddress]
        : prevAddress.map((address) =>
            address.id === newAddress.id
              ? ({ ...address } = newAddress)
              : address
          )
    );
    setShowAddressInput(false);
    setDefaultAdd({
      id: "",
      name: "",
      phoneNo: "",
      pincode: "",
      city: "",
      state: "",
      address: "",
      addressType: ""
    });
  };

  const cancelInput = () => {
    setDefaultAdd({
      id: "",
      name: "",
      phoneNo: "",
      pincode: "",
      city: "",
      state: "",
      address: "",
      addressType: ""
    });
    setShowAddressInput(false);
  };

  return (
    <form
      style={{ display: showAddressInput ? "flex" : "none" }}
      className="address-form"
      onSubmit={(e) => handleSubmit(e)}
    >
      <label className="address-label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={defaultAdd.name}
        onChange={(e) => handleChange(e)}
        className="address-input"
        required
      />

      <label className="address-label" htmlFor="phoneNo">
        Phone no.
      </label>
      <input
        type="number"
        name="phoneNo"
        value={defaultAdd.phoneNo}
        onChange={(e) => handleChange(e)}
        className="address-input"
        required
      />

      <label className="address-label" htmlFor="pincode">
        Pincode
      </label>
      <input
        type="number"
        name="pincode"
        value={defaultAdd.pincode}
        onChange={(e) => handleChange(e)}
        className="address-input"
        required
      />

      <label className="address-label" htmlFor="city">
        City
      </label>
      <input
        type="text"
        name="city"
        value={defaultAdd.city}
        onChange={(e) => handleChange(e)}
        className="address-input"
        required
      />

      <label className="address-label" htmlFor="state">
        State
      </label>
      <input
        type="text"
        name="state"
        value={defaultAdd.state}
        onChange={(e) => handleChange(e)}
        className="address-input"
        required
      />

      <label className="address-label" htmlFor="address">
        Address
      </label>
      <textarea
        name="address"
        value={defaultAdd.address}
        onChange={(e) => handleChange(e)}
        className="address-input"
        required
      />

      <p className="address-label">Address type</p>
      <div className="radio-box">
        <div className="input-div">
          <input
            className="radio-input"
            type="radio"
            id="home"
            name="addressType"
            value="home"
            checked={defaultAdd.addressType === "home"}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="home">Home</label>
        </div>
        <div class="input-div">
          <input
            className="radio-input"
            type="radio"
            id="work"
            name="addressType"
            value="work"
            checked={defaultAdd.addressType === "work"}
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="work">Work</label>
        </div>
      </div>

      <div className="address-btn-box">
        <button className="btn-save" type="submit">
          Save
        </button>
        <button className="btn-cancel" onClick={cancelInput}>
          Cancel
        </button>
      </div>
    </form>
  );
}
