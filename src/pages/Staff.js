import React from 'react';
import StaffInfoCard from '../components/StaffInfo';

function Staff(){
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
    )
}

export default Staff;