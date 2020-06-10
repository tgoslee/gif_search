import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SearchBar from "./components/SearchBar";
import GifList from "./components/GifList";
import GifModal from "./components/GifModal";
import request from 'superagent';
import './App.css'

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifs: [],
            selectedGif: null,
            modalIsOpen: false
        };
    }

    openModal(gif) {
        this.setState({
            modalIsOpen: true,
            selectedGif: gif
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedGif: null
        });
    }

    handleTermChange(term) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
    }
  render(){
    return(
     <div>
       <SearchBar onTermChange={term => this.handleTermChange(term)}/>
       <GifList
           gifs={this.state.gifs}
           onGifSelect={selectedGif => this.openModal(selectedGif)}
       />
       <GifModal modalIsOpen={this.state.modalIsOpen}
                 selectedGif={this.state.selectedGif}
                 onRequestClose={ () => this.closeModal() } />
     </div>
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
