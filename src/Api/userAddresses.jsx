import { v4 as uuidv4 } from "uuid";

export const userAddresses = [
  {
    id: uuidv4(),
    name: "Nisha Sen",
    phoneNo: "1234567890",
    pincode: "123456",
    city: "Ujjain",
    state: "Madhya Pradesh",
    address: "H/No. 23, New Raipur road",
    addressType: "home"
  },
  {
    id: uuidv4(),
    name: "Aarindom Sen",
    phoneNo: "1234457890",
    pincode: "123456",
    city: "Ujjain",
    state: "Madhya Pradesh",
    address: "H/No. 23, New Raipur road",
    addressType: "work"
  }
];
