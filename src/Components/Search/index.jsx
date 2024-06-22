import { Button, TextField } from "@mui/material";
const CityEnter = ({ setCity, fetchDataForPosts }) => {
    const handleChnage =(e)=>{
        setCity(e.target.value)
    }
    const handleClick =(e)=>{
        fetchDataForPosts()
        e.target.value=''
    }
  return (
    <>
      <TextField
        id="standard-basic"
        label="Enter City Details"
        variant="standard"
        onChange={handleChnage}
      />{" "}
      <Button onClick={handleClick}>Enter</Button>
    </>
  );
};
export default CityEnter;
