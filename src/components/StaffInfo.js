import React from 'react';

function StaffInfoCard(props){
    return (
      <div className="cardDeck">
        {props.churchStaff.map(person =>
        <div className="card" key={person.id}>
          <img src={person.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Title: {person.job}</p>
            <p className="card-text">Name: {person.name}</p>
            <p className="card-text">Contact: </p>
          </div>
        </div>
        )}
      </div>
    );
}

export default StaffInfoCard;