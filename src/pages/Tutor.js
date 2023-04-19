import { Box } from '@chakra-ui/react';
import React from 'react';
import Lesson from '../components/Lesson/lesson';

export default function Tutor(){
    return(
        <Box maxWidth={"1200px"} margin='40px auto' background={'#fff'} borderRadius='24px'>
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
        </Box>
    )
}