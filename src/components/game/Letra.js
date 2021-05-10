import React, { useState} from 'react';
import { useDrag } from 'react-dnd'
import { usePreview } from 'react-dnd-preview';
 
  const MyPreviewMob = () => {
    const { display, item, style } = usePreview();

    if (!display) {
      return null;
    }
      return <div className="letra mobile" style={style}>{item.name}</div>;
      
  };
  const MyPreviewDesk = () => {
    const { display, item, style } = usePreview();

    if (!display) {
      return null;
    }
      return <div className="letra desktop" style={style}>{item.name}</div>;
      
  };

export default function Letra({id, row, column, mobile}) {
    const [linha, setRow] = useState(row)
    const [coluna, setColumn] = useState(column)
    
    const [{isDragging}, drag] = useDrag({
        item: {name:id, type:'letra', row:row, column:column},
        collect: monitor => ({
          isDragging: monitor.isDragging(),
        }),
        end(item) {
            if (item.row !== row || item.column !== column) {
                setColumn(item.column)
                setRow(item.row)
            }
        }
    }) 
  if (mobile) 
    return (
      <span ref={drag} className="letra mobile" style={{opacity: isDragging ? 0.1 : 1, cursor: 'move', gridRow: linha, gridColumn: coluna }}>
        {id}
        <MyPreviewMob/>
      </span>   
    )
  else
    return (
      <span ref={drag} className="letra desktop" style={{opacity: isDragging ? 0.1 : 1, cursor: 'move', gridRow: linha, gridColumn: coluna}}>
        {id}
        <MyPreviewDesk/>
      </span>   
    )
}
