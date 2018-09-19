import React from "react";
import BlockOne from './block-one';

export default class Home extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BlockOne />
      </div>
    );
  }
};
