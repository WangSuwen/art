import React from "react";
import BlockOne from './block-one';
import BlockList from './block-list';

export default class Home extends React.Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <BlockList />
        <BlockOne />
      </div>
    );
  }
};
