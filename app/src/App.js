import axios from 'axios'

import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      playerToCompareName: 'temp'
    }
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`${process.env.DOMAIN}/randomplayer/easymode`)
      this.setState({
        playerToCompareName: res.data.name
      })
    } catch (e) {
      console.log('error finding easy random player', e)
    }
  }

  render() {
    return (
      <div>{this.state.playerToCompareName}</div>
    )
  }
}
