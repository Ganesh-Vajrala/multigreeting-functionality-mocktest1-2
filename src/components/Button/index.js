import {Component} from 'react'
import './index.css'

export default class Button extends Component {
  render() {
    const {item, clicked, callBackFunc} = this.props
    const {id, buttonText} = item
    const callBack = () => {
      callBackFunc(id)
    }
    return (
      <li id={id}>
        <button type="button" onClick={callBack}>
          {buttonText}
        </button>
      </li>
    )
  }
}
