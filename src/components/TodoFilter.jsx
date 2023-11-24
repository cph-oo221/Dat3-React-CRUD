function TodoFilter({ children, todos, setTodos }) {
  const handleSort = (e) => {
    const option = e.target.value;
    let sortedTodos;
    const arr = ["High", "Medium", "Low"];

    switch (option) {
      case "Id":
        sortedTodos = [...todos].sort((a, b) => a.id - b.id);
        break;
      case "Note":
        sortedTodos = [...todos].sort((a, b) => a.note.localeCompare(b.note));
        break;
      case "Due Date":
        sortedTodos = [...todos].sort(
          (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
        );
        break;
      case "Priority":
        sortedTodos = [...todos].sort((a, b) => {
          return arr.indexOf(a.priority) - arr.indexOf(b.priority);
        });
        break;
      default:
        sortedTodos = todos;
    }

    setTodos(sortedTodos);
  };

  return (
    <div>
      {children}
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSort}>
        <option>Sort</option>
        <option>Id</option>
        <option>Note</option>
        <option>Due Date</option>
        <option>Priority</option>
      </select>
      {children}
    </div>
  );
}

export default TodoFilter;
