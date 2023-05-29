import React from "react";

import TaskListFilter from "./TaskListFilter";

const TaskBoardMenu: React.FC = () => {
  return (
    <section className="taskBoard__menu">
      <TaskListFilter />
    </section>
  );
};

export default TaskBoardMenu;
