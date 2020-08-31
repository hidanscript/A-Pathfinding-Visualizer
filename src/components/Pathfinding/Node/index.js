import React from 'react'
import './node.css';

function Node({ isStart, isFinish }) {
  const extraClassName = isFinish ? 'node-finish' : isStart ? 'node-start' : '';
  return (
    <div className={`node ${extraClassName}`}>
    </div>
  )
}

export default Node;

export const DEFAULT_NODE = {
  row: 0,
  col: 0
};
