import { Component } from "react";
import Button from "../Button/Button";
import "./Styles.css";
import { AiFillDelete } from "react-icons/ai";

export default class ListItem extends Component {
/*   constructor() {
    super();
  } */
  render() {
    return (
      <section className="list-item">
        <span className="task-title">{this.props.text}</span>
        <Button
          text={<AiFillDelete style={{ fontSize: "30px" }} />}
          isPurble={true}
          handleClick={this.props.handleDelete}
        />
      </section>
    );
  }
}
