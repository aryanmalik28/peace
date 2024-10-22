import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logoslider from '../components/Logoslider';
import Home_info from '../components/Home_info';
import img1 from '../images/homeimgnew-min.jpeg';


const Home = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      setJoke(response.data.setup + ' ' + response.data.punchline);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

    return (
      <div className='home-page'>
        
        <div className='home-allcontent'>

        

        <div className='home-project-intro-quote'>
          <h4>Mental health affects how we think, feel, and act. It plays a crucial role in our overall well-being and can impact our relationships, work, and daily life.</h4>
          
        
        </div>
        <div className="random-joke">
          <header className="random-joke-header">
            <blockquote>
              <h2>Mental health is just as important as physical health. Our mission is to provide resources, support, and community for those navigating their mental health journey.</h2>
            </blockquote>
          </header>
        </div>
        <div className='home-project-intro'>
        <p>Every individual's mental health journey is unique. We encourage you to take the first step towards better mental health by exploring our resources, engaging with the community, and prioritizing self-care. </p>
        </div>

        <div className="random-joke">
          <header className="random-joke-header">
            <blockquote>
              <h2>Mental health is just as important as physical health. Our mission is to provide resources, support, and community for those navigating their mental health journey.</h2>
            </blockquote>
          </header>
        </div>
         <div className='home-project-intro'>
        <p>
        Access to the right resources can make a significant difference in one's mental health journey. Our platform offers a range of resources, including articles, videos, and expert advice. We also provide a directory of mental health professionals and support groups, ensuring that help is just a click away. Remember, reaching out for support is a sign of strength.
        </p>
        </div>

        <Home_info />

        <Logoslider />
        </div>
      </div>
    );
  }; 
export default Home;

