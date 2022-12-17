import React from 'react';
import Counter from './Components/Counter';
import Divider from './Components/Divider';
import Multiplier from './Components/Multiplier';
import Subtraction from './Components/Subtraction';


{/* NOTE
As I have restrictions to use Props, external library and useContext etc. 
I use local storage and listen event on storage change and perform action accordingly.

***** repeatable css can be better by using styled components and I didn't create due to short time. *****
*/}

function App() {
  return (
    <section className="flex justify-center">
      <div className='flex flex-col space-y-6 mt-4'>
        <h1 className='text-center'>My name is Zeeshan Jabbar.</h1>
        <Counter />
        <Multiplier />
        <Subtraction />
        <Divider />
      </div>


    </section>
  );
}

export default App;
