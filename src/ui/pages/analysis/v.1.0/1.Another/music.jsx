import React from "react";
import Switch from "@mui/material/Switch";

// ref: https://stackoverflow.com/questions/47686345/playing-sound-in-react-js
class Music extends React.Component {
  state = {
    play: false,
  };
  // audio = new Audio(this.props.url)
  audio = new Audio("http://streaming.tdiradio.com:8000/house.mp3");
  // http://streaming.tdiradio.com:8000/house.mp3

  componentDidMount() {
    this.audio.addEventListener("ended", () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ play: false })
    );
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };

  render() {

	const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
      <div>
        	<Switch {...label} defaultChecked size="small" />
			<Switch {...label} defaultChecked />
        {/* <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button> */}
      </div>
    );
  }
}

export default Music;
