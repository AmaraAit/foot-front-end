import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LeagueNav from './LeagueNav';

function Matchss({championnat,dateMatch,equipeIn,equipeOut}) {
   
    
    
    
   
    return (<>
       
        <div className="card">
            <div className="card-header bg-dark text-white">
                 {championnat}
            </div>
            <div className="card-body bg-dark bg-gradient">
                <h5 className="card-title text-white">{dateMatch}</h5>
                <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                    <h6><button type="button" class="btn btn-outline-primary ">{equipeIn}</button></h6>
                    <h6><button type="button" class="btn btn-outline-primary ">vs</button></h6>
                    <h6><button type="button" class="btn btn-outline-primary">{equipeOut}</button></h6>
                </div>
               
            </div>
            <div className="card-footer bg-dark bg-gradient text-white">
            <h6>Special title treatment</h6>
               <h6> 
                <span className="badge rounded-pill text-bg-success">Success</span>
                <span className="badge rounded-pill text-bg-danger">Danger</span>
                <span className="badge rounded-pill text-bg-warning">Warning</span>
                <span className="badge bg-secondary">Info</span>
                </h6>
            </div>
        </div>
        </>
    );
}

export default Matchss;