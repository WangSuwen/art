import React from "react";
import PropTypes from 'prop-types';
import monitor from '@api/monitor';
import '@styles/navigator.scss';

export default class LeftSide extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="left">
        <ul className="">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    );
  }
};
