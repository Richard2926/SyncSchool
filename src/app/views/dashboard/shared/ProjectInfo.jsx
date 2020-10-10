import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Button, IconButton, Fab } from "@material-ui/core";
import { SimpleCard, MatxProgressBar } from "matx";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));


const ProjectInfo = ({projects, project}) => {
    projects =[
        {
        id: "somethsrin",
        name: "anme",
        noOfAssignments: 3
    },{
        id: "somewrfthin",
        name: "anme",
        noOfAssignments: 2
    },{
        id: "somethwfin",
        name: "anme",
        noOfAssignments: 1
    },
    
]
  const classes = useStyles();

  if(project == null){
    return (
      <div>
      <SimpleCard title="Select a Project on the left !">
        <small className="text-muted">Your project info will appear here !</small>

        { projects.map((item) => {
          return (
            <div key={item.id}><div className="py-8" />
            <small className="text-muted">{item.name}</small>
            <div className="pt-8" />
            <MatxProgressBar value={100} color="primary" text="Ranodm" />
            <MatxProgressBar value={100} color="primary" text={"Assigments : " + item.noOfAssignments} />
            <div className="py-4" />
            </div>
          )
        })}
        

      </SimpleCard>
    </div>)
  }

  return (
    
    <div>
      <SimpleCard title={project.name}>
        <div>Hello</div>
      </SimpleCard>
    </div>
  );
};

export default ProjectInfo;
