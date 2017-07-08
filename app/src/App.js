import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      playerToCompareName: ''
    }
  }
  componentDidMount() {
    axios.get(`${process.env.DOMAIN}/randomplayer/easymode`)
      .then(res => {
        console.log('name', res.data)
        this.setState({
          initialPlayer: res.data.name
        })
      }).catch(err => {
        console.log('err', err)
      })
  }

  render() {
    return (
      <div>{this.state.initialPlayer}</div>
    )
  }
}
