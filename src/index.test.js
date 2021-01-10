import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';


it('renders correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  /*

  function add(x,y) => x+y+1

  Test case 1:
  x=2
  y=3
  Expected output = 5
  Actual output =6
  Test case will fail
  */