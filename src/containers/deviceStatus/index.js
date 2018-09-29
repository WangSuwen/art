import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { listStatusToogle } from '@actions/blockList';


class HomeContainer extends React.Component{
  constructor(props) {
    super(props);
  }
  static propTypes = {
    blockList: PropTypes.object,
    listStatusToogle: PropTypes.func
  };
  render() {
    const _props = this.props;
    return (
      <div className="home-index">
        设备状态页面
      </div>
    );
  }
};

const mapStateToProps = ({ blockList }) => ({
  blockList
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ listStatusToogle }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);