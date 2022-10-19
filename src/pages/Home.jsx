import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
