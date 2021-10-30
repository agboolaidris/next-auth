import { Button as Btn } from '@mui/material';
import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const Button = ({ children }: Props) => {
  return <Btn>{children}</Btn>;
};

export default Button;
