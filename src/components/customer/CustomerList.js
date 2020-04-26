import React, { useContext, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import Customer from "./Customer"
import "./Customer.css"
import { Modal, ModalBody, ModalHeader } from "reactstrap"
import CustomerForm from "./CustomerForm"

export default () => {
    const { customers } = useContext(CustomerContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    return (
        <>
            <h2>Customers</h2>
            <div className = "fake_customer_link" onClick = {toggle}>Add New Customer</div>
            <div className="customers">
            {
                customers.map(cust => <Customer key={cust.id} customer ={cust} />)
            }
            </div>
            <Modal isOpen = {modal} toggle = {toggle}>
                <ModalHeader toggle = {toggle}>
                    <div>New Customer</div>
                </ModalHeader>
                <ModalBody>
                    <CustomerForm  toggler = {toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}