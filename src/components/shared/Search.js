import {FormControl, Input } from "@chakra-ui/react";
import React from "react";
import {IoMdSearch} from 'react-icons/io';
export default function Search() {
  return (
    <FormControl>
      <Input type="email"  />
      <IoMdSearch color='blue'/>
    </FormControl>
  );
}
