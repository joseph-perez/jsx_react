import ReactDOM from 'react-dom';

import Puppy from './Puppy';

const App = () => {
  return (
    <div>
      <h1>Puppies!</h1>
      <Puppy name="Coco" breed="Chihuahua" />
      <Puppy name="Donut" breed="The best breed :)" />
      <Puppy name="Daisy" breed="Beagle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
