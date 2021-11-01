import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props {
  setTodos: (todo: string) => void;
}

function AddInput({ setTodos }: Props) {
  const [todo, settodo] = useState('sgsgg');
  const handleSubmit = () => {
    setTodos(todo);
    settodo('');
  };
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField
        fullWidth
        label="Add todo"
        value={todo}
        id="fullWidth"
        onChange={(e) => settodo(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Task
      </Button>
    </Box>
  );
}

export default AddInput;
