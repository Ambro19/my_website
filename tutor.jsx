import React from 'react';
import PropTypes from 'prop-types';

// Child Component
function ChildComponent(props) {
  return <div>{props.data}</div>;
}

// Parent Component
function ParentComponent() {
  const dataToPass = "Hello, from parent!";
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent data={dataToPass} />
    </div>
  );
}