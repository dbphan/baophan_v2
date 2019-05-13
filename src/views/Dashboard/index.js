import React, { Component } from "react";

// Externals
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core/styles";

// Material components

// Shared layouts
import DashboardLayout from "../../layouts/Dashboard";

// Custom components

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: "100%"
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>Dashboard</div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
