import axios from 'axios'
import React, { Component } from 'react'

import Form from './components/Form'
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      playerToCompareName: ''
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
      <div className="temp">
        {this.state.playerToCompareName}
        <Form />
      </div>
    )
  }
}
