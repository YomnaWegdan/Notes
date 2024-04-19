import { atom } from "recoil";


// create atom (like as create context)
export const noteState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });