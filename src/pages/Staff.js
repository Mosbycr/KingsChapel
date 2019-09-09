import React, { Component } from 'react';
import StaffInfoCard from '../components/StaffInfo';
import { staff } from '../data/staffList';

class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = { ChurchStaff: staff }
    }

    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3>Staff Directory</h3>
                    </div>
                </div>
                <div className="row">
                    <StaffInfoCard />
                </div>
            </div>
        );
    }

    
}
 
export default Staff;