import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search">
                <input placeholder="Find a Gif to show how you REALLY feel!" onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default SearchBar;
