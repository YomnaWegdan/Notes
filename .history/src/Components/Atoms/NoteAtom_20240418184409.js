import { atom } from "recoil";


// create atom (such as create context)
const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
  });