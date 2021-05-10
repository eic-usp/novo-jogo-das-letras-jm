import React from 'react';
import { useDrop } from 'react-dnd';


export default function Espaco({id, row, column, trues, falses, first, undropped,mobile}) {
  const [, drop] = useDrop({
    accept: 'letra',
    drop: (item) => {
      undropped = 1;
      item.row = row;
      item.column = column;
       // eslint-disable-next-line
      if (item.name != id) {
         // eslint-disable-next-line
        if (first == 0) {
          first = -1;
        }
        falses++
      }
       // eslint-disable-next-line
      else {
         // eslint-disable-next-line
        if (first == 0){
          first = 1
        }
        trues++
      }
      //console.log(first, id, trues - falses)
       // eslint-disable-next-line
      if (first == 1 ) {
        if (trues - falses <= 0) {
          sessionStorage.setItem("correc", "false");      
        } else {
          sessionStorage.setItem("correc", "true")
        }
      }
       // eslint-disable-next-line
      else if (first == -1) {
        if (trues - falses < 0) {
          sessionStorage.setItem("correc", "false");      
        } else {
          sessionStorage.setItem("correc", "true")
        }
      }
    }
  })

  if (undropped === 0) {
    sessionStorage.setItem("correc", "false");   
  }
  if(mobile)  
    return (<span ref={drop} className="espaco mobile" style={{gridColumn:column, gridRow:row}}></span>)
  else  
  return (<span ref={drop} className="espaco desktop" style={{gridColumn:column, gridRow:row}}></span>)

}