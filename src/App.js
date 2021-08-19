import ReactDOM from 'react-dom';

import Puppy from './Puppy';
import PuppiesClassComponent from './PuppiesClassComponent';
import PuppiesFunctionalComponent from './PuppiesFunctionalComponent';

const App = () => {
  return (
    <div>
      <h1>Puppies!</h1>
      <Puppy name="Coco" breed="Chihuahua" />
      <Puppy name="Donut" breed="The best breed :)" />
      <Puppy name="Daisy" breed="Beagle" />
      <hr />
      <PuppiesClassComponent />
      <hr />
      <PuppiesFunctionalComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
