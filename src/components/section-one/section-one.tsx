import React from "react";
import ImgList from "../img-list";
import ImgAddForm from "../img-add-form";
import './style.css'


interface IPropState {
  itemList: [
    { label: 'https://1920x1080hdwallpapers.com/image/201512/movies/3390/kylo-ren-blizzard-block-star-wars-episode-7.jpg', id: 1 }
  ]
}

export default class SectionOne extends React.Component<any, IPropState> {
  state: IPropState = {
    itemList: [
      {
        label: 'https://1920x1080hdwallpapers.com/image/201512/movies/3390/kylo-ren-blizzard-block-star-wars-episode-7.jpg',
        id: 1
      },
    ]
  };
  isURL = (str: string) => {
    const res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };

  addItem = (body: any) => {
    const newItem = {
      label: body,
      id: this.uniqueId()
    };
    if (!this.isURL(newItem.label)) {
      return (
        alert('Введите url')
      )
    } else {
      // @ts-ignore
      this.setState(({itemList}) => {
        const newArr = [...itemList, newItem];

        return {
          itemList: newArr
        }
      })
    }
  };

  deleteItem = (id: number) => {
    // @ts-ignore
    this.setState(({itemList}) => {
        const index = itemList.findIndex(elem =>
          elem.id === id
        );
        const before = itemList.slice(0, index);
        const after = itemList.slice(index + 1);

        const newArr = [...before, ...after];

        return {
          itemList: newArr
        }
      }
    );
  };

  uniqueId = () => {
    return `f${(~~(Math.random() * 1e8)).toString(16)}`
  };

  render() {

    const {itemList} = this.state;
    return (
      <div>
        <ImgAddForm onAdd={this.addItem}/>
        <div className="row">
          <ImgList
            post={itemList}
            onDelete={this.deleteItem}
          />
        </div>
      </div>

    )
  }
};

