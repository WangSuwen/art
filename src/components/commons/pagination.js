import React from "react";
import PropTypes from 'prop-types';

import '@styles/pagination.scss';

export default class Pagination extends React.Component{
  constructor(props) {
    super(props);
  }
  static propTypes = {
    classes: PropTypes.string,
    activeClass: PropTypes.string,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number,
    clickHandle: PropTypes.func
  };
  renderPagination = () => {
    const lis = [];
    for (let i = 0; i < this.props.pageSize; i++) {
      if (this.props.currentPage === i + 1) {
        lis.push(<li onClick={() => { this.props.clickHandle(i + 1) }} key={i} className="pagination-active">{i + 1}</li>);
      } else {
        lis.push(<li onClick={() => { this.props.clickHandle(i + 1) }} key={i}>{i + 1}</li>);
      }
    }
    return lis;
  }
  render() {
    return (
      <ul className={this.props.classes ? this.props.classes : "pagination"}>
        <li className={this.props.currentPage === 1 ? "pagination-disable" : ""}>{"<"}</li>
        {this.renderPagination()}
        <li className={this.props.currentPage === this.props.pageSize ? "pagination-disable" : ""}>{">"}</li>
      </ul>

    );
  }
};
