import React from "react"

export default ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <h3 className="employee__name">{employee.address}</h3>
        <h3 className="employee__name">{employee.locationId}</h3>
    </section>
)