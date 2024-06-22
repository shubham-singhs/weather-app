import { useState, useEffect } from "react";
import SkeletonLc from "./Components/Skeleton";
import CardInt from "./Components/Card";
import Error from "./Components/Error";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import SearchInt from "./Components/Search";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);
  const fetchDataForPosts = async (position) => {
    const URL = !position?`https://api.weatherapi.com/v1/current.json?key=65262a815b944d44ac8164121232610&q=${city}&aqi=no`:`https://api.weatherapi.com/v1/current.json?key=65262a815b944d44ac8164121232610&q=${position.coords.latitude},${position.coords.longitude}&aqi=no`;

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      let postsData = await response.json();
      setData(postsData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        fetchDataForPosts(position);
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);
  if(error){
    return (<Container>
      <Stack sx={{ height: '100vh' }} direction="row" justifyContent="center" alignItems="center">
      <Error />
      </Stack>
    </Container>);
  }
  if (loading) {
    return (<Container>
      <Stack sx={{ height: '100vh' }} direction="row" justifyContent="center" alignItems="center">
      <SkeletonLc />
      </Stack>
    </Container>);
  }

  return (
    <>
    <CityEnter setCity={setCity} fetchDataForPosts={fetchDataForPosts}/>
    <Container>
      <Stack sx={{ height: '100vh' }} direction="row" justifyContent="center" alignItems="center">
        <SearchInt data={data} />
      </Stack>
    </Container>
    </>
  );
}

export default App;
