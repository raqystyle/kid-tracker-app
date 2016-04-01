import React from 'react';

export default class NavTabs extends React.Component {
  render() {
    return <div>
      <ul className="nav-tabs">
        <li data-view="logs">
          <span>Show Logs</span>
        </li>
        <li data-view="insert">
          <span>Add a record</span>
        </li>
      </ul>
    </div>
  }
}
