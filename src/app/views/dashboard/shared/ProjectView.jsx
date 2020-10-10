import React, { Component } from "react";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Tooltip,
  Button
} from "@material-ui/core";

const ProjectView = ({theme, subjectData, selectProject}) => {
  //console.log(subjectData);
  return (
    <Grid container spacing={3} className="mb-24">
      {subjectData.map((project, index) => {
        return (<Grid item xs={12} md={6} key={project.id}>
          <Card className="p-sm-24 mb-24">
      <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
        <img src="/assets/images/illustrations/upgrade.svg" alt="upgrade" />
        <p className="text-muted m-0 py-24">
          {project.name}
        </p>
        <Button
          className="uppercase"
          size="large"
          variant="contained"
          color="primary"
          onClick={() => selectProject(index)}
        >
          View Class
        </Button>
      </Card>
    </Card>
      </Grid>)
      })}
    </Grid>
  );
};

export default ProjectView;
