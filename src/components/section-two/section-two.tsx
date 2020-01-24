import React from "react";
import './style.css'
import Spinner from "../spinner";
import Error from "../error";


interface IPropState {
  url: '',
  data: [],
  loading: boolean,
  error: boolean
}

export default class SectionTwo extends React.Component<any, IPropState> {
  state: IPropState = {
    url: '',
    data: [],
    loading: false,
    error: false
  };

  // componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IPropState>, snapshot?: any): void {
  //   if (this.state.url !== prevState.url) {
  //     this.getRepo();
  //   }
  // }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error: true
    })
  }

  getRepo = () => {
    const url = 'https://api.github.com/users/';
    fetch(`${url}${this.state.url}/repos`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          loading: false
        });
        console.log(this.state.data)
      })
  };

  onValueChange = (e: { target: { value: any; }; }) => {
    this.setState({
      url: e.target.value
    })
  };

  onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    this.setState({
      loading: true
    });
    this.getRepo();
  };

  render() {

    const {loading, error} = this.state;

    const element = (
      <div>
        {this.state.data.map((el) => {
          const {name, html_url, id, created_at, updated_at, default_branch} = el;
          return (
            <div className="room-box" key={id}>
              <h5 className="text-primary"><a href={html_url}>{name}</a></h5>
              <p>Создан: {created_at}</p>
              <p><span className="text-muted">Обновлен :</span> {updated_at} | <span
                className="text-muted">Ветка :</span> {default_branch} </p>
            </div>
          )
        })
        }
      </div>
    );

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <Error/>
    }

    return (
      <div>
        <section id="main-content">
          <section className="wrapper site-min-height">
            <div className="chat-room mt">
              <aside className="mid-side">
                <div className="chat-room-head">
                  <h3>GitHub API</h3>
                </div>
                <div className="room-desk">
                  <h4 className="pull-left">
                    <form className="pull-right position" onSubmit={this.onSubmit}>
                      <input
                        type="text"
                        placeholder="Введите имя пользователя github"
                        onChange={this.onValueChange}
                        value={this.state.url}
                        className="form-control search-btn "/>
                      <button type="submit" className='pull-right btn btn-theme02'>
                        Добавить
                      </button>
                    </form>
                  </h4>
                  {element}
                </div>
              </aside>
            </div>
          </section>
        </section>
      </div>

    )
  }
};

