import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// Application configurations
import { APP_TITLE } from "../../../../config";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core/styles";

// Material components
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import CarrierCommIcon from "@material-ui/icons/Chat";
import RoutingInstrIcon from "@material-ui/icons/LibraryBooks";
import RoutePlannerIcon from "@material-ui/icons/Schedule";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";

// Component styles
import styles from "./styles";

class Sidebar extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Typography
            variant="h4"
            style={{ fontFamily: "Stencil D", color: "#F96302" }}
          >
            {APP_TITLE}
          </Typography>
          {/* <Link className={classes.logoLink} to="/">
            <img
              alt="THD logo"
              className={classes.logoImage}
              src="/images/logos/logo.svg"
            />
          </Link> */}
        </div>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Logo />
          <Typography className={classes.nameText} variant="h6">
            User Name Here!
          </Typography>
        </div>
        <Divider className={classes.profileDivider} />
        <List component="div" disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <RoutePlannerIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Route Planner"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <CarrierCommIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Carrier Communications"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <RoutingInstrIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Routing Instructions"
            />
          </ListItem>
        </List>
        <Divider className={classes.listDivider} />
        <List
          component="div"
          disablePadding
          subheader={
            <ListSubheader className={classes.listSubheader}>
              Support
            </ListSubheader>
          }
        >
          <ListItem
            className={classes.listItem}
            component="a"
            href="https://devias.io/contact-us"
            target="_blank"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Customer support"
            />
          </ListItem>
        </List>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
