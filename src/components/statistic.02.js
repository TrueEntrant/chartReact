import React, { Component } from "react";
import { Doughnut } from "react-chartjs";

class Stat02 extends Component {
  constructor(props) {
    super(props);

    this.colours = ["", "", "", "", "", "", "", "", "", ""];

    this.state = {
      score: this.props.point,
      data: [
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        },
        {
          value: 10,
          color: ""
        }
      ],
      options: {
        startAngle: Math.PI * 0.85,
        rotation: Math.PI * 1.3,
        percentageInnerCutout: 92,
        segmentShowStroke: true,
        segmentStrokeWidth: 1,
        showTooltips: false,
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
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.coloursInit();
   
  }

  componentWillUpdate() {
  }

  coloursInit() {
    const active = "#ffce00";
    const sibling = "#fef5cd";
    const deactive = "#f1f2f4";
    const score = this.state.score || this.props.point - 1;
    this.colours = this.colours.map((item, i) => {
      if (i === score) {
        return (item = active);
      } else if (i - score === 1 || score - i === 1) {
        return (item = sibling);
      } else {
        return (item = deactive);
      }
    });

    const newData = this.state.data.map((st, i) => {
      st.color = this.colours[i];
      return st;
    });
    console.log(newData);
    this.setState({
      data: newData
    });
  }

  onChange(e) {
    const temp = [...this.state.data]
    temp[0].value = e.target.value
    this.setState({
      data: temp
    });
  }

  render() {
    return (
      <div className="statistic-inner statistic-responce">
        <div className="statistic-header">
          <h3 className="statistic-title">Response Time</h3>
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
          <input
            type="text"
            value={this.state.data[0].value}
            onChange={this.onChange}
          />
        </div>
        <div className="statistic-info">
          <h5>Quite slow</h5>
          <a href="/#">Learn how to improve</a>
        </div>
      </div>
    );
  }
}

export default Stat02;
