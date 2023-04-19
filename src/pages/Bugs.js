import { Box } from '@chakra-ui/react';
import React from 'react';
import Bug from '../components/Bug';
// import Search from '../components/shared/Search';
export default function Bugs(){
    return(<Box maxWidth={"1200px"} margin='40px auto'>
        {/* <Search /> */}
        <Bug />
        <Bug />
        <Bug />
    </Box>)
}