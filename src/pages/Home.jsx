import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    const data = await axios(url);
    console.log(data);
  };
  getTutorials();

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
