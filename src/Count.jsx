import { useState } from 'react';
import PlaceContentCenter from './components/PlaceContentCenter';
import Button from './components/Button';

const Count = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    // const nextCount = count + 1;
    // setCount(nextCount);
    // console.log(count, nextCount);
    setCount((x) => x + 1);
  }

  return (
    <PlaceContentCenter>
      <h1 className='text-5xl font-bold'>{count}</h1>
      <div className='mt-5 flex items-center gap-2'>
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}>
          +3
        </Button>
      </div>
    </PlaceContentCenter>
  );
};

export default Count;
