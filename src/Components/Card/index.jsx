import * as React from "react";

import Card from "@mui/material/Card";
import Avatar from '@mui/material/Avatar';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cloud from "../../assets/cloud.jpg";

import { Button, CardActionArea, CardActions } from "@mui/material";
import { format } from "date-fns";

const CardInt = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 800, display: 'flex', flexDirection: 'Row' }}>
      <CardActionArea>
        <CardMedia component="img" image={cloud} alt="green iguana" height={300}/>
        
      </CardActionArea>
      <CardActions sx={{minWidth: 300, display: 'flex', flexDirection: 'Column', justifyContent: 'space-around' }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.location.name}
          </Typography>
          <Typography variant="body2" color="text.primary" sx={{display: 'flex', flexDirection: 'Row', justifyContent: 'space-around', alignItems: 'center' }} component="div">
            <strong>{data.current.condition.text}</strong><Avatar alt="Remy Sharp" src={data.current.condition.icon} />
          </Typography>
          <Typography variant="body2" color="text.primary">
          <strong>last Updated:{format(data.current.last_updated, "dd/MM/yyyy")}
          &nbsp;&nbsp;{format(data.current.last_updated,"HH:mm a")}</strong> 
          </Typography>
        <Button size="body2" color="primary">
          Temp: {data.current.temp_c}
          {"\u00b0"}C
        </Button>
        <Button size="body2" color="primary">
          Feels Like: {data.current.feelslike_c}
          {"\u00b0"}C
        </Button>
      </CardActions>
    </Card>
  );
};
export default CardInt;
