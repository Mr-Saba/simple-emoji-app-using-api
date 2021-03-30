import React, { Component } from 'react'
import List from "./List"
import FilteredList from "./filteredList"
import  emojies  from "../emojies.json";


export default class MainPage extends Component {
  state = {
    searched: ""
  }

  handleSearch = (e) => {
    this.setState({searched: e.target.value})
  }

  filterSearch = () => {
    return emojies.filter(emoji => emoji.title.toLowerCase().includes(this.state.searched.toLowerCase()))
  }

  render() {
    return (
      <>
        <input type="text" value={this.state.searched} onChange={this.handleSearch} className="Input"/>
        {(this.searched === "") ? (
          <List />
        )
        : (
          <FilteredList filteredEmojies={this.filterSearch()}/>
        )
        }
      </>
    )
  }
}



