import React from 'react';
import ReactDOM from 'react-dom';
import Stat08 from './components/statistic.08';
import Stat03 from './components/statistic.03';
import Stat05 from './components/statistic.05';
import Stat02 from './components/statistic.02';


ReactDOM.render(<Stat08 />, document.querySelector('.statistic-08'));
ReactDOM.render(<Stat03 />, document.querySelector('.statistic-03'));
ReactDOM.render(<Stat05 />, document.querySelector('.statistic-05'));
ReactDOM.render(<Stat02 point={1}/>, document.querySelector('.statistic-02'));
