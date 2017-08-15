import React from 'react'
import {Square} from './Square'

export class GridBoard extends React.Component {

  render() {

    let {row = 5, col = 5, isBordered = 'false', oddColor, evenColor} = this.props;
    let total = row * col;
    let arr = new Array(total);
    let arr2 = arr.fill(1).map(function(element, i) {
      let kir = i%2 ? oddColor : evenColor;
      return (<Square key={i} color={kir}/>);
    })

    let border = isBordered ? 'thick yellow solid' : ''

    let style = {width: `${this.props.col*100}px`,
                height: `${this.props.row*100}px`,
                display: 'flex',
                border: border,
                flexWrap: 'wrap'
            }
    return (
      <div style={style}>
        {arr2}
      </div>
    )
  }
}
