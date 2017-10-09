"use strict";
import React, {Component, PropTypes} from "react";
import {Image, Platform, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ProgressController from "./progressControls";
import Video from "react-native-video";
import Icon from 'react-native-vector-icons/MaterialIcons';
let FORWARD_DURATION = 7;
class VideoPlayer extends Component {

    constructor(props, context, ...args) {
        super(props, context, ...args);
        this.state = {paused: false};
    }

    onVideoEnd() {
        this.videoPlayer.seek(0);
        this.setState({key: new Date(), currentTime: 0, paused: true});
    }

    onVideoLoad(e) {
        this.setState({currentTime: e.currentTime, duration: e.duration});
    }

    onProgress(e) {
        this.setState({currentTime: e.currentTime});
    }

    playOrPauseVideo(paused) {
        this.setState({paused: !paused});
    }

    onBackward(currentTime) {
        let newTime = Math.max(currentTime - FORWARD_DURATION, 0);
        this.videoPlayer.seek(newTime);
        this.setState({currentTime: newTime})
    }

    onForward(currentTime, duration) {
        if (currentTime + FORWARD_DURATION > duration) {
            this.onVideoEnd();
        } else {
            let newTime = currentTime + FORWARD_DURATION;
            this.videoPlayer.seek(newTime);
            this.setState({currentTime: newTime});
        }
    }

    getCurrentTimePercentage(currentTime, duration) {
        if (currentTime > 0) {
            return parseFloat(currentTime) / parseFloat(duration);
        } else {
            return 0;
        }
    }

    onProgressChanged(newPercent, paused) {
        let {duration} = this.state;
        let newTime = newPercent * duration / 100;
        this.setState({currentTime: newTime, paused: paused});
        this.videoPlayer.seek(newTime);
    }

    render() {
        let {onClosePressed, video, volume} = this.props;
        let {currentTime, duration, paused} = this.state;
        const completedPercentage = this.getCurrentTimePercentage(currentTime, duration) * 100;
        return <View style={styles.fullScreen} key={this.state.key}>
            <View style={[styles.cancelButton]}>
                <TouchableOpacity onPress={onClosePressed} style={{alignItems: "flex-end"}}>
                   <Icon name="close" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.videoView}
                         onPress={this.playOrPauseVideo.bind(this, paused)}>
                <Video ref={videoPlayer => this.videoPlayer = videoPlayer}
                       onEnd={this.onVideoEnd.bind(this)}
                       onLoad={this.onVideoLoad.bind(this)}
                       onProgress={this.onProgress.bind(this)}
                       source={{uri:video.uri}}
                       paused={paused}
                       volume={Math.max(Math.min(1, volume), 0)}
                       resizeMode="contain"
                       style={styles.videoContainer}/>
                {paused &&
                <Icon name="play-arrow" size={20} color="#fff" />}
            </TouchableOpacity>
            <View style={[styles.controller]}>
                <View
                    style={[styles.progressBar]}>
                    <ProgressController duration={duration}
                                          currentTime={currentTime}
                                          percent={completedPercentage}
                                          onNewPercent={this.onProgressChanged.bind(this)}/>
                </View>
            </View>
        </View>;
    }
}

let styles = StyleSheet.create({
    fullScreen: {flex: 1, backgroundColor: "black"},
    controller: {
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    controllerButton: {height: 20, width: 20},
    videoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    progressBar: {
        alignSelf: "stretch",
        margin: 20
    },
    videoContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    videoIcon: {
        position: "relative",
        alignSelf: "center",
        width: 79,
        height: 78,
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    }
});

VideoPlayer.propTypes = {
    video: PropTypes.object.isRequired,
    volume: PropTypes.number,
    onClosePressed: PropTypes.func.isRequired
};

export default VideoPlayer;