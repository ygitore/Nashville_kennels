import React from 'react'
import { CustomerContext } from "./CustomerProvider";
import { useContext, useRef } from "react";
import { Button, Alert } from "reactstrap";
export default props => {
    const {addCustomer} = useContext(CustomerContext)
    const customerName = useRef()
    const customerAddress = useRef()
    const addNewCustomer = () => {
        if(customerName.current.value !== null){
            addCustomer({
                name:customerName.current.value,
                address:customerAddress.current.value
            }).then(props.toggler)
        }else{
            Alert('all fields are required!')
        }        
    }
    return (           
        <form>
            <div>
            <label htmlFor="customerName">Name: </label>
                <input
                    type = "text"
                    id = "customerNameField"
                    required
                    autoFocus
                    ref = {customerName}
                />
            </div>
            <div>
            <label htmlFor="customerAddress">Address: </label>
                <input
                    type = "text"
                    id = "customerNameField"
                    required
                    autoFocus
                    ref = {customerAddress}
                />
            </div>
            
         <Button onClick = {(evt) => {
            evt.preventDefault()
            addNewCustomer()             
         }}>Submit</Button>
        </form>
    )
}