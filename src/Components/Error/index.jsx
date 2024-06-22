import * as React from "react";
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { CardActionArea, } from "@mui/material";
const Error = ()=>{
    return(<>
        <Card sx={{ maxWidth: 700 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{display:'flex', alignItems:'center'}}>
                <ErrorTwoToneIcon color={'error'} sx={{marginRight: '5px'}}/>Something went Wrong please try again!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </>);
}
export default Error;