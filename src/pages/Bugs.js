import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import Bug from '../components/Bug';
import DocumentBug from '../components/Bug/form';
import PageIntro from '../components/shared/intro';
import { useAuth } from '../contexts/AuthContext';
// import Search from '../components/shared/Search';

export default function Bugs(){
    const [showForm, setShowForm] = React.useState(false);
    const {user} = useAuth();
    return(<Box maxWidth={"1200px"} margin='40px auto'>
        {/* <Search /> */}
        <Box
        border="2px solid #3e92cc"
        marginTop="40px"
        padding={"50px"}
        fontSize="20px"
        background="#fff"
        borderRadius="20px"
      >
        <PageIntro
          user={user}
          cost={"5"}
        />{" "}
        { !showForm && (
          <Button
            leftIcon={<IoMdAdd size='24px' />}
            colorScheme="blue"
            variant="outline"
            onClick={() => setShowForm(!showForm)}
          >
            Document a bug
          </Button>
        )}{" "}
        {showForm && (
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => setShowForm(!showForm)}
          >
            Cancel
          </Button>
        )}
        {showForm && <DocumentBug />}
      </Box>
        <Bug />
        <Bug />
        <Bug />
    </Box>)
}