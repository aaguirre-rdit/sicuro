import React from 'react';
import { Image } from "react-native";

export default class Spinner extends React.Component {

  render() {
    return <Image style={this.props.style} source={this.props.source} />;
  }
}
