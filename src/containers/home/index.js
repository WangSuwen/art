import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { listStatusToogle } from '@actions/blockList';

import BlockOne from '@components/home/block-one';
import BlockList from '@components/home/block-list';
import NavBar from '@components/home/nav-bar';

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
        <NavBar
          listStatus={_props.blockList.status}
          listStatusToogle={_props.listStatusToogle}
        />
        <BlockOne />
        <BlockList listStatus={_props.blockList.status}/>
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