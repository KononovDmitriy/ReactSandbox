import React from 'react';

export default function Comment({user, text}) {
  return (
    <div>
      <h3>{user}</h3>
      <article>{text}</article>
    </div>);
};
