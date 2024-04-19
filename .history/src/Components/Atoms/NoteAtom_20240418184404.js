import { atom } from "recoil";


// create atom (such as c)
const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });