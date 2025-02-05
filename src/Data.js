export const taskData = [
  { id: 0, status: "In Progress", title: "Payroll Audit", date: "10/08/2024" , describitin:""},
  { id: 1, status: "To Do", title: "Content Audit", date: "08/08/2024", describitin:"" },
  { id: 2, status: "Under Review", title: "Tax Review", date: "11/08/2024", describitin:""},
  { id: 3, status: "Completed", title: "UI Designer Hiring", date: "18/08/2024", describitin:"" },
  { id: 4, status: "Pending", title: "Sr. Engg Hiring", date: "20/09/2024", describitin:"" },
  { id: 5, status: "In Progress", title: "Project Updates", date: "12/09/2024", describitin:""},
  { id: 6, status: "Completed", title: "Sales Review", date: "10/08/2024", describitin:""},
  { id: 7, status: "To Do", title: "Leads Meeting", date: "18/08/2024", describitin:"" },
  { id: 8, status: "In Progress", title: "Project Pipeline", date: "11/08/2024", describitin:"" },
  { id: 9, status: "Under Review", title: "Team Appraisal", date: "18/08/2024", describitin:"" },
  { id: 10, status: "To Do", title: "SPayroll Audit", date: "20/09/2024", describitin:"" },
  { id: 11 , status: "In Progress", title: "Project Updates", date: "12/09/2024", describitin:"" },
];
export const addTaskData = (newTask) => {
  taskData.push({
    ...newTask,
    id: taskData.length // Assign an incremental id based on current length
  });
  console.log("Updated Task Data:", taskData);
};