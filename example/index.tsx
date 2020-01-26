import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../.';

const App = () => {
  return (
    <div>
      <p>hello</p>
      <Button onClick={() => console.log('hello')}>Button</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
