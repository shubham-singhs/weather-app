import { Skeleton } from "@mui/material";
import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Button, CardActionArea, CardActions } from "@mui/material";
const SkeletonLc = ()=>{
return(
    <>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <Skeleton variant="rectangular" height={60} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <Skeleton variant="rectangular" height={60} />
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <Skeleton variant="rectangular" height={60} />
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{marginTop:'5px'}}>
          <Skeleton variant="rectangular" height={60} />
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="body2" color="primary">
        <Skeleton variant="rectangular" width={210} height={60} />
        </Button>
        <Button size="body2" color="primary">
        <Skeleton variant="rectangular" width={210} height={60} />
        </Button>
      </CardActions>
    </Card>
    </>
);
}
export default SkeletonLc;
