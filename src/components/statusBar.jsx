const StatusBar = ({ totalTodos, totalCompletedTodos }) => {
  return (
    <h5>
      <span className="total-todos">Total tasks: {totalTodos}</span>
      <span className="m-5 total-completed-todos">
        Total completed tasks: {totalCompletedTodos}
      </span>
    </h5>
  );
};

export default StatusBar;
