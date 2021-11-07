import { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CountUp from 'react-countup';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Count = styled(Typography)<{
  type?: 'primary' | 'success' | 'warning';
  theme?: Theme;
}>`
  ${({ type, theme }) =>
    type == 'primary' &&
    css`
      color: ${theme.palette.primary.main};
    `}

  ${({ type, theme }) =>
    type == 'success' &&
    css`
      color: ${theme.palette.success.main};
    `}

    ${({ type, theme }) =>
    type == 'warning' &&
    css`
      color: ${theme.palette.warning.main};
    `}
`;

interface Props {
  title: string;
  description: string;
  count: number;
  icon: ReactNode;
  type?: 'primary' | 'success' | 'warning';
}

export default function BasicCard({
  title,
  description,
  icon,
  count,
  type,
}: Props) {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          {title}
        </Typography>
        <Count variant="h5" sx={{ color: 'secondary' }} type={type}>
          <CountUp end={count} duration={5} />
        </Count>
        <Typography variant="body2">
          {description}
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ margin: 'auto', width: 'max-content' }}>
        <IconButton color={type}>{icon}</IconButton>
      </CardActions>
    </Card>
  );
}
