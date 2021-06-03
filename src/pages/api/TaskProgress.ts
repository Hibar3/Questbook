export interface TaskProgress {
  project: string;
  teamName: string;
  total_task: number;
  total_completed_task: number;
  total_incomplete_task: number;
  member?: MemberList;
}

interface MemberList {
  name: string;
  task_done: number;
  key: any;
}
