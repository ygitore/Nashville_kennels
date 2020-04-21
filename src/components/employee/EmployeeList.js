import React, { useContext } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import "./Employee.css"

export default () => {
    const { employees } = useContext(EmployeeContext)

    return (
        <div className="employees">
        {
            employees.map(loc => <Employee key={loc.id} employee ={loc} />)
        }
        </div>
    )
}