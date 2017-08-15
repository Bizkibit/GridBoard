import React from 'react'


export class Square extends React.Component {

  render() {

    let { color = 'black'} = this.props

    let style = {
      width: '100px',
      height: '100px',
      backgroundColor: color
    }

    return (
      <div style={style}></div>
    )
  }
}
