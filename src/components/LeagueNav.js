import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function LeagueNav(props) {
    return (<nav class="navbar fixed-top bg-body-tertiary">
    <div class="container-fluid">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-primary">Primary</button>
       
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>

    </div>
  </nav>
  

);
}

export default LeagueNav;