import { atom } from "recoil";


// create atom (like as create context)
export const noteState = atom({
    key: 'noteState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });