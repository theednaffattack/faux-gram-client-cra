import React, { Component } from "react";

interface IMountedProofProps {
  handleUpdateMessageState: any;
}

export default class MountedProof extends Component<
  IMountedProofProps,
  object
> {
  componentDidMount() {
    this.props.handleUpdateMessageState();
  }
  render() {
    return <div> .</div>;
  }
}
