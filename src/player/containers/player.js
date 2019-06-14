import React from "react";
import Video from "react-native-video";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Layout from "../components/layout";
import ControlLayout from "../components/control-layout";
import PlayPause from "../components/play-pause";

class Player extends React.Component {
  state = {
    loading: true,
    paused: false
  };
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    });
  };
  onBuffer = ({ isBuffering }) => {
    this.setState({
      loading: isBuffering
    });
  };

  // Una vez cargado el video obtenemos y convertimos la duración a un formato legible
  onLoad = payload => {
    let duration = payload.duration / 60;
    let minutes = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    let time = (minutes + seconds * 10).toFixed(2);
    this.setState({
      duration: time
    });
  };

  render() {
    return (
      <Layout
        loading={this.state.loading}
        video={
          <Video
            source={{
              uri:
                "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
            }}
            ref={ref => {
              this.player = ref;
            }}
            fullscreen={false}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            paused={this.state.paused}
            onLoad={this.onLoad}
          />
        }
        loader={<ActivityIndicator color="red" />}
        control={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
});

export default Player;
