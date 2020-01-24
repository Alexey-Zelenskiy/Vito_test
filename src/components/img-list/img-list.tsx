import React from "react";
import ImgListItem from "../img-list-item";

import './style.css'

interface IPropState {
  item: [];
}

export default class ImgList extends React.Component<any, IPropState> {
  render() {

    const {post, onDelete} = this.props;
    const elements = post.map((item: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<ImgListItem> & Readonly<any> & Readonly<{ children?: React.ReactNode; }>) => {
      return (
        <div className="col-lg-6">
          <li key={item.id}>
          <ImgListItem
            {...item}
            onDelete={() => onDelete(item.id)}
          />
          </li>
        </div>
      )
    });

    return (
      <>
        {elements}
      </>
    )
  }
}
