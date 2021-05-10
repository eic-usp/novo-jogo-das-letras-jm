import React from 'react';
import { useDrop } from 'react-dnd';

export default function DropArea({row, column, mobile}) {
  
  const [, drop] = useDrop({
    accept: 'letra',
    drop: (item) => {
      item.row = row;
      item.column = column;
      
    }
  })
  if(mobile)
    return (<span ref={drop} className="droparea mobile" style={{ paddingRight:"10px", paddingBottom:"2px",gridColumn:column, gridRow:row}}></span>)
  else
    return (<span ref={drop} className="droparea desktop" style={{ padding:"10px",gridColumn:column, gridRow:row}}></span>)
  
}