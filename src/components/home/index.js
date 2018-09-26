import React from "react";
import BlockOne from './block-one';
import BlockList from './block-list';
import NavBar from './nav-bar';

export default class Home extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <NavBar/>
        <BlockOne />
        {/* <BlockList /> */}
      </div>
    );
  }
};
