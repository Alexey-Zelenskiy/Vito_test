import React from "react";

import './style.css'

export default class ImgListItem extends React.Component<any> {
  render() {

    const {label, onDelete} = this.props;

    return (
      <>
        <div className="card">
          <div className="card-body">
            <h4 className="mb-3">
              <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
                <i className="fa fa-trash-o"/>
              </button>
            </h4>
            <img className="img-responsive" src={label} alt=''/>
          </div>
        </div>
      </>
    )
  }
}
