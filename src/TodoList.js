import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((item) => (
        <table
          style={{
            margin: "auto",
            width: "80%",
            borderCollapse: "collapse",
            border: "1px solid black",
          }}
        >
          <th style={{ border: "1px solid black", width: "50%" }}>
            <tr>task</tr>
          </th>

          <td>
            <tr>{item}</tr>
          </td>
        </table>
      ))}
    </div>
  );
};

export default TodoList;
