import {Component} from 'react'
import './index.css'
import Button from '../Button'

export default class MultilingualGreetingsFol extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: props.languageGreetingsList[0].id,
    }
  }

  callBackFunc = id => {
    this.setState({clicked: id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {clicked} = this.state
    const clickedItem = languageGreetingsList.find(item => item.id === clicked)
    console.log(clickedItem)
    return (
      <div className="mul-gree-main-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(item => (
            <Button
              item={item}
              key={item.id}
              clicked={clicked}
              callBackFunc={this.callBackFunc}
            />
          ))}
        </ul>
        <img
          src={clickedItem.imageUrl}
          alt={clickedItem.imageAltText}
          className="img"
        />
      </div>
    )
  }
}
