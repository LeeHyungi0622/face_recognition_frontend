import React,{Component} from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Particles from "react-particles-js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import './App.css';
import Clarifai from "clarifai";

const api_key = "781101ee50fd412cbca37cd7701fd894"
const app = new Clarifai.App({apiKey: api_key})


const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: "",
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3', "https://samples.clarifai.com/face-det.jpg").then(
    function(response){
      // Do something with response
      console.log(response);
    },
    function(err){
      // There was an error
      console.log(err);
    }
);
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles" 
          params={particlesOptions}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        {/*<FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
