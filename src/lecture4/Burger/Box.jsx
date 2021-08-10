/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "./../Burger/burger.css";
import Bacon from "./Bacon";
import Cheese from "./Cheese";
import Meat from "./Meat";
import Salad from "./Salad";
class Box extends Component {
  render() {
    return (
      <div>
        <div class="box">
          {/* <!-- Phần bánh burger phía trên --> */}
          <div class="bread-top">
            <div class="seeds"></div>
            <div class="seeds2"></div>
          </div>
          <Salad />
          <Cheese />
          <Bacon />
          <Meat />
          {/* <!-- Phần bánh burger phía dươi --> */}
          <div class="bread-bottom"></div>
        </div>
      </div>
    );
  }
}
export default Box;
