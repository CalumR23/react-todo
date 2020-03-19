import React, { Component } from 'react'
import './App.css'
class App extends Component {

  state = {
    items: [{name: "Groceries", isDone: false}, {name: "TP", isDone: false}, {name: "WarZone", isDone: true}],
    item: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(this.state.items))
    items.push({name: this.state.item, isDone: false})
    this.setState({ items, item: '' })
  }
  handleRemoveItem = i => {
    let items = JSON.parse(JSON.stringify(this.state.items))
    items.splice(i, 1)
    this.setState({ items })
  }
  handleDoneItem = i => {
    let items = JSON.parse(JSON.stringify(this.state.items))
    items[i].isDone = !items[i].isDone
    this.setState({items})
  }

  render() {
    return (
      <>
        <form>
          <p>
            <label htmlFor="text">Item</label>
            <input
              type="text"
              name="item"
              value={this.state.item}
              onChange={this.handleInputChange}
            />
          </p>
          <button onClick={this.handleAddItem}>Add Item</button>
        </form>
        <ul>
          {
            this.state.items.map((x, i) => (
              <li key={i} className={(x.isDone).toString()}>
                {x.name}
                <button onClick={() => this.handleRemoveItem(i)}>x</button>
                <button onClick={() => this.handleDoneItem(i)}>√</button>
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}

export default App