import React, { Component } from "react";
import { Doughnut } from "react-chartjs";

class Stat05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: 259,
          color: "#81a1f9"
        },
        {
          value: 400,
          color: "#eef0f4"
        }
      ],
      options: {
        showTooltips: false,
        percentageInnerCutout: 77,
        segmentShowStroke: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      }
    };
  }
  render() {
    return (
      <div className="statistic-inner statistic-revenue">
        <div className="statistic-header">
          <h3 className="statistic-title">Revenue</h3>
          <div className="statistic-dotted">
            <img
              src="./images/icon-dotted.svg"
              alt="icon"
              width="18"
              height="4"
            />
          </div>
        </div>
        <div className="statistic-content">
          <Doughnut
            data={this.state.data}
            width="110"
            height="110"
            options={this.state.options}
          />
        </div>
        <div className="statistic-info">
          <h5>{this.state.data[0].value} opportunities</h5>
          <a href="/#">Increase your revenue</a>
        </div>
      </div>
    );
  }
}

export default Stat05;
