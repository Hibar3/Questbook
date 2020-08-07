import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { ProjectType } from "../../api/ProjectType";

export interface mainProps {
  projectList?: ProjectType[];
}

export default function Graph({ projectList }: mainProps) {
  console.log(projectList)
    return (
      <Paper>
        <Chart
          data={projectList}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Story"
            valueField="high"
            argumentField="name"
            color="#ffd700"
          />
          <BarSeries
            name="Task"
            valueField="medium"
            argumentField="name"
            color="#c0c0c0"
          />
          <BarSeries
            name="Bugs"
            valueField="low"
            argumentField="name"
            color="#cd7f32"
          />
          <Animation />
          {/* <Legend position="bottom" rootComponent={Root} labelComponent={Label} /> */}
          <Title text="Task completion" />
          <Stack />
        </Chart>
      </Paper>
    );
  
}

Graph.getInitialProps = async () => {
  const res = await fetch("http://localhost:4001/tasks");
  const projectList: ProjectType[] | undefined = await res.json();
  console.log( projectList );
  return {projectList: projectList}
}

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});

// const legendRootBase = ({ classes, ...restProps }) => (
//   <Legend.Root {...restProps} className={classes.root} />
// );
// const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
// const legendLabelStyles = () => ({
//   label: {
//     whiteSpace: 'nowrap',
//   },
// });
// const legendLabelBase = ({ classes, ...restProps }) => (
//   <Legend.Label className={classes.label} {...restProps} />
// );
// const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
