import React from 'react';

export default function ({ foobar, doDummyAction }) {
  return (
    <div>
      <h3>Dummy Component</h3>
      <button onClick={() => {doDummyAction('passed in dummy arg')}}>Dummy Action</button>
    </div>
  )
}
