import React from "react";
import { throttle } from "throttle-debounce";

class Throttle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { q: "" };
    this.autocompleteSearchThrottled = throttle(2000, this.autocompleteSearch);
  }

  changeQuery = event => {
    this.setState({ q: event.target.value }, () => {
      this.autocompleteSearchThrottled(this.state.q);
    });
  };

  autocompleteSearch = q => {
    this._fetch(q);
  };

  _fetch = q => {
    const _searches = this.state._searches || [];
    _searches.push(q);
    this.setState({ _searches });
  };

  render() {
    const _searches = this.state._searches || [];
    return (
      <div>
        <h2>Throttle</h2>
        <p>½ second Throttle triggering the autocomplete on every input.</p>
        <input
          placeholder="Type something here"
          type="text"
          value={this.state.q}
          onChange={this.changeQuery}
        />
        <hr />
        {_searches.length ? (
          <button
            type="button"
            onClick={event => this.setState({ _searches: [] })}
          >
            Reset
          </button>
        ) : null}
        <ol>
          {_searches.map((s, i) => {
            return <li key={s + i}>{s}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default Throttle