import React from 'react';
import './ChartBar.css';

const ChartBar = ({ label, currentValue, totalValue }) => {
  let barFillHeight = '0%';

  if (totalValue > 0) {
    const percentage = (currentValue / totalValue) * 100;
    barFillHeight = percentage + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} // inline style로 css 주기 : 괄호 두 개 들어감.
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
