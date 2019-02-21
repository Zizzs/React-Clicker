import React from 'react';
import './UpgradesBar.css';

function UpgradesBar(){
  return (
    <div id="gridDiv">
      <div>
          <button className="upgradeButton">Upgrade One - 25 bits</button>
      </div>
      <div>
          <button className="upgradeButton">Upgrade Two - 100 bits</button>
      </div>
      <div>
          <button className="upgradeButton">Upgrade Three - 250 bits</button>
      </div>
    </div>
  );
}

export default UpgradesBar;