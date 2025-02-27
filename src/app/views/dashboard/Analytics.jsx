import React, { Component, Fragment } from "react";
import {
  Grid,
  Card
} from "@material-ui/core";

import ProjectView from "./shared/ProjectView";
import ProjectInfo from "./shared/ProjectInfo";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Loading from "../../../matx/components/MatxLoadable/Loading"
import {getDashboardData} from "../../redux/actions/DashboardActions"

class Dashboard1 extends Component {

  state = {
    loading: true,
    success: false,
    dashboardData: [],
    error: {},
    currentSubject: null
  };
  constructor(props) {
    super(props);
    this.selectProject = this.selectProject.bind(this);
  }
  componentDidMount() {
    this.props.getDashboardData({
      uid: this.props.user.uid
    });
  }

  componentWillReceiveProps(nextProps) {

    //console.log(nextProps.dashboard.data);

    this.setState({
      loading: nextProps.dashboard.loading,
      success: nextProps.dashboard.success,
      dashboardData: nextProps.dashboard.data,
      error: nextProps.dashboard.error
    })

  }

  selectProject(index) {
    this.setState({
      currentSubject: this.state.dashboardData.subjectData[index]
    })
    //.log(this.state.currentSubject)
  }

  render() {

    let { theme, user } = this.props;

    if(this.state.loading == true || this.state.dashboardData == null) return <Loading/>;

    return (
      <Fragment>
        <div className="pb-86 pt-30 px-30 bg-primary">
        </div>
        <div className="analytics m-sm-30 mt--72">
          <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <ProjectView theme={theme} subjectData={this.state.dashboardData.subjectData} selectProject={this.selectProject}/>
            </Grid>
            <ProjectInfo projects={this.state.dashboardData.subjectData} project={this.state.currentSubject}/>

          </Grid>
        </div>
      </Fragment>
    );
  }
}



Dashboard1.propTypes = {
  user: PropTypes.object.isRequired,
  getDashboardData: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  getDashboardData: PropTypes.func.isRequired,
  user: state.user,
  dashboard: state.dashboard,
});

export default withStyles({}, { withTheme: true })(
  withRouter(
    connect(mapStateToProps, {
      getDashboardData
    })(Dashboard1)
  )
);
