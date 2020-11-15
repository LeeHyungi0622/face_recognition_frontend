import React,{Component} from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Particles from "react-particles-js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
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
      imageUrl: ""
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(
    function(response){
      // Do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
        <FaceRecognition imageURL={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
