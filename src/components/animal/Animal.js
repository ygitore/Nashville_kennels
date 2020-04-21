import React from "react"

export default ({animal, customer, location}) => (
    <section className="animal">
        <h3 className="animal__name">Animal name: {animal.name}</h3>
        <div className="animal__breed">Animal breed: {animal.breed}</div>
        <div className="customer__name">Customer name: {customer.name}</div>
        <div className="location__name">Checked-in at: {location.name}</div>
    </section>
)