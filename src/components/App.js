import React from 'react'
import {GridBoard} from './GridBoard'

export let App = function(props) {
  return (
    <GridBoard col={7} row={7} oddColor={'red'} evenColor={'black'} isBordered={true} />
  )
}
