import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Example";
import HelloWorld from "./components/HelloWorld";
import Greet from "./components/Greet";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Card from "./components/Card";
import TodoApp from "./components/TodoApp";
function App() {
  const user1 = {
    name: {
      first: "John",
      last: "Smith",
    },
    phone: "123-4567",
  };
  const user2 = {
    name: {
      first: "Sarah",
      last: "Haras",
    },
  };
  return (
    <div>
      <Example></Example>
      <HelloWorld></HelloWorld>
      <Greet>
        name = {user1.name.first + " " + user1.name.last}
        name = {user2.name.first + " " + user2.name.last}
      </Greet>
      <Button1></Button1>
      <Button2></Button2>
      <Card user={user1}></Card>
      <TodoApp></TodoApp>
    </div>
  );
}

export default App;
