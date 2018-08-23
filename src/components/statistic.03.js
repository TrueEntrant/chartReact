import React, { Component } from "react";
import { Doughnut } from "react-chartjs";

class Stat03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: 69,
          color: "#ff5463"
        },
        {
          value: 18,
          color: "#e4e5e9"
        },
        {
          value: 13,
          color: "#0085ff"
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
      <div className="statistic-inner statistic-channels">
        <div className="statistic-header">
          <h3 className="statistic-title">Channels</h3>
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
            <span className="statistic__circle" />
            Concierge Widget
            <span className="statistic-channels-val">
              {this.state.data[0].value}%
            </span>
          </h6>
        </div>
      </div>
    );
  }
}

export default Stat03;
