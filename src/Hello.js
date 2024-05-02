import React from 'react';
import Card from './components/UI/Card';

const Hello = (props) => {
  console.log('Hello, Component!');
  console.log('props: ', props);

  return (
    <div>
      <Card className="rectangle">
        {props.children}
        Hello React
      </Card>
    </div>
  );
};

export default Hello;
