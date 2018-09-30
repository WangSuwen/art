import React from "react";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MonitorIndex from '@components/monitor';


class MonitorContainer extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <MonitorIndex />
      </div>
    );
  }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MonitorContainer);