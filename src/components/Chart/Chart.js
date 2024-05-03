import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  // 1년치 지출 총액이 필요하다(그래야 비율 기준을 설정할 수 있으니까)
  const dataPointsValue = dataPoints.map((dp) => dp.value); //value만 들어있는 배열로 추출

  // 1년치 총액
  // 누산함수 reduce
  // 콜백 매개변수 a: 리턴결과에 대한 누적값, b: 배열에서 하나씩 꺼낸 값, 0: 초기 인덱스값
  // 처음엔 a=0이고 배열의 초기 인덱스에서 b를 꺼낸 후 a와 더해 a로 리턴,
  // 배열의 다음 인덱스에서 b를 꺼낸 후 a와 더해 a로 리턴... 반복 -> 누적연산
  const totalValue = dataPointsValue.reduce((a, b) => {
    return a + b;
  }, 0);

  // 한 줄로 표현하면 dataPointsValue.reduce((a,b)=>a+b,0);

  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => {
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value}
            totalValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
