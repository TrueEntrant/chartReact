import React, { Component } from "react";
import { Doughnut } from "react-chartjs";

class Stat08 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: 47,
          color: "#e3e4e8",
        },
        {
          value: 53,
          color: "#2fcb96",
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
                beginAtZero: true
              }
            }
          ]
        }
      }
    };
  }
  render() {

    return (
      <div className="statistic-inner statistic-bot-human">
        <div className="statistic-header">
          <h3 className="statistic-title">Bot vs. Human</h3>
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
          <h6>
            <span className="statistic__circle statistic__circle--green" />
            Bot
            <span className="statistic-channels-val">{this.state.data[1].value}%</span>
          </h6>
          <h6>
            <span className="statistic__circle statistic__circle--gray" />
            Human
            <span className="statistic-channels-val">{this.state.data[0].value}%</span>
          </h6>
        </div>
      </div>
    );
  }
}

export default Stat08;
