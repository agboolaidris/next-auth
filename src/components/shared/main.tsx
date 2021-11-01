import React from 'react';
import Box from '@mui/material/Box';

interface TodosProp {
  id: number;
  name: string;
}
interface Props {
  todos: [] | TodosProp[];
}

function Main({ todos }: Props) {
  return (
    <Box>
      {todos.length == 0 ? (
        <p>No Todo yet</p>
      ) : (
        todos.map((todo: TodosProp) => <p key={todo.id}>{todo.name}</p>)
      )}
    </Box>
  );
}

export default Main;
