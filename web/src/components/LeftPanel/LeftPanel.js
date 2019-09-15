import React from 'react';

class LeftPanel extends React.Component {
    state = {}
    render() {
        return (
            <div className="LeftPanel">
                <div>NEW PATIENT</div>
                <div>LOAD PATIENT</div>
                <div>SETTING</div>
            </div>
        );
    }
}

export default LeftPanel;