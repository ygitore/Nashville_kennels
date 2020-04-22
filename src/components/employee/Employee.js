import React from "react"

export default ({employee, location}) => (
    <section className="employee">
        <h3 className="employee__name">Employee name: {employee.name}</h3>
        <h3 className="employee__name">Employee address: {employee.address}</h3>
        <h3 className="employee__name">Assigned to: {location.name }</h3>
    </section>
)