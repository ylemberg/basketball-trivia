import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      initialPlayer: ''
    }
  }
  componentDidMount() {
    axios.get('/randomplayer/easymode')
      .then(res => {
        console.log('name', res.data.name)
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
