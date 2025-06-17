import React from 'react';
import useStore from '../store';

// this can be dumb or smart component - connect works with either
function Counter(props) {
  const count = useStore((state) => state.count);

  return (
    <div>
      Current Count: {count}
    </div>
  );
}

export default Counter;
