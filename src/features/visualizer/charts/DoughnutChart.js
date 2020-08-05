import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export default function({data, title}){

    return (
      <div>
        <h3>{title}</h3>
        <Doughnut data={data} />
      </div>
    );
  
};