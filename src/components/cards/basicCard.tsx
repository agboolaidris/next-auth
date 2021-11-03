import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CountUp from 'react-countup';

export default function BasicCard() {
  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total Ussers
        </Typography>
        <Typography variant="h5" component="div">
          <CountUp end={100} duration={5} />
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
        </Typography>
      </CardContent>
      <CardActions sx={{ margin: 'auto', width: 'max-content' }}>
        <IconButton>
          <PeopleAltIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
