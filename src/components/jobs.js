import React, { Component } from 'react';
import '../App.css';

class Jobs extends Component {
    render() {
      return (
        <div id="jobs">
            <div id="venmo-jobs">
                <h2> 
                    <a href="https://apps.apple.com/us/app/venmo/id351727428"> 
                        Venmo
                    </a>
                </h2>
                <h3> iOS Engineer </h3>
                <h3> March 2020 -> Now </h3>
            </div>
            <div id="etrade-jobs">
                <h2> 
                    <a href="https://apps.apple.com/us/app/e-trade-invest-trade-save/id313259740"> 
                        E*Trade Finacial
                    </a>
                </h2>
                <h3> iOS Engineer </h3>
                <h3> March 2019 -> March 2020 </h3>
            </div>
            <div id="etrade-jobs">
                <h2>
                    <a href="https://apps.apple.com/us/app/current-rewards-offline-music/id1213495204">
                        Current Media
                    </a>
                </h2>
                <h3> iOS Engineer </h3>
                <h3> June 2017 -> March 2019 </h3>
                <p>
                    While working on Current I added in the conversion of the product from a universial media player to a rewarded radio streaming application. While there I developed features, fixed bugs, tested and maintained release.
                </p>
            </div>
        </div>
      );
    }
  }

export default Jobs;
