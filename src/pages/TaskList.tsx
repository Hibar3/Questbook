import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { TaskProgress } from "../../api/TaskProgress";
//import MyComp from './bruno';

export interface ListProps {
  taskList?: TaskProgress[];
}

export default function TaskList({ taskList }: ListProps) {
  return (
    <div>
      {taskList?.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.project}/${e.teamName}`} href="/[task]/[team]">
            <a>
              Navigate to {e.project}'s {e.teamName}
            </a>
            {/* <MyComp/> */}
          </Link>
        </div>
      ))}
    </div>
  );
}

TaskList.getInitialProps = async () => {
  const response = await fetch("http://localhost:4001/task");
  const TaskList: TaskProgress[] | undefined = await response.json();
  console.log(TaskList)
  return { taskList: TaskList };
};
