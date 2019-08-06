const loadTasks = () => {
  const toDoTasks = JSON.parse(localStorage.getItem("to_do_tasks") || "[]");
  const completedTasks = JSON.parse(
    localStorage.getItem("completed_tasks") || "[]"
  );
  return {
    toDoTasks: toDoTasks,
    completedTasks: completedTasks
  };
};

export default loadTasks;
