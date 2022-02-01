import React, { useState } from "react";
import TodoList from "./TodoList.js";

function RegistrationForm() {
  const [personname, setPersonname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [todos, setTodos] = useState([]);

  const submitHandler = (e) => {
    if (personname.length < 3) {
      alert("Name must be atleast 3 charecters");
    } else {
      console.log(personname);
    }
    if (email !== "@gmail.com") {
      alert("email must be @");
    } else {
      console.log(email);
    }
    const newTodos = [
      personname,
      email,
      phone,
      projectName,
      taskDescription,
      startDate,
      endDate,
    ];
    setTodos(newTodos);

    setPersonname("");
    setEmail("");
    setPhone("");
    setProjectName("");
    setTaskDescription("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div>
      <form>
        <h1>Registration Form</h1>
        <div>
          <input
            type="text"
            value={personname}
            onChange={(e) => setPersonname(e.target.value)}
            placeholder="Enter Person Name (3 - 20 char).."
            required
          />{" "}
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Valid Email ID..."
              required
            />

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Valid Phone Number..."
              required
            />
          </div>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter Project Name (3 - 20 char)"
            required
          />
          <br />
          <br />
          <div>
            <input
              type="text"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              placeholder="Enter Task Description (3 - 30 char/numb)"
              required
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="Start Date..."
              required
            />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="End Date....."
              required
            />
          </div>{" "}
          <br />
          <div>
            {" "}
            Task :
            <input type="radio" value="planned" name="planned" /> Planned
            <input type="radio" value="progress" name="progress" /> In-Progress
            <input type="radio" value="done" name="done" /> Done
          </div>
        </div>
        <br />
        <br />
        <input type="submit" name="submit" onClick={submitHandler} />
      </form>
      <br /> <br />
      <TodoList todos={todos} />
    </div>
  );
}

export default RegistrationForm;
