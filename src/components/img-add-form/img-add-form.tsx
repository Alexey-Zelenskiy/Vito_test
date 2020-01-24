import React from "react";

import './style.css'

interface IPropState {
  path: ''
}

export default class ImgAddForm extends React.Component<any, IPropState> {

  state: IPropState = {
    path: ''
  };

  onValueChange = (e: { target: { value: any; }; }) => {
    this.setState({
      path: e.target.value
    })
  };

  onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.props.onAdd(this.state.path);
    this.setState({
      path: ''
    })
  };


  render() {
    return (
      <>
        <form className="pull-right position" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Введите url изображения"
            onChange={this.onValueChange}
            value={this.state.path}
            className="form-control search-btn "/>
          <button type="submit" className='pull-right btn btn-theme02'>
            Добавить
          </button>
        </form>
      </>
    )
  }
}
