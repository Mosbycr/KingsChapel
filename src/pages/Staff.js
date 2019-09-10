import React, { Component } from 'react';
import StaffInfoCard from '../components/StaffInfo';
import { staff } from '../data/staffList';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = { churchStaff: staff }
    }

    render() { 
        return ( 
            <div className="container staffContainer">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Staff Directory</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 ml-auto mr-auto">
                    <StaffInfoCard churchStaff = {this.state.churchStaff}/>
                    </div>
                </div>
            </div>
        );
    }

    
}
 
export default Staff;