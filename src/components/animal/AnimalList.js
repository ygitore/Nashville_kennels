import React, { useContext, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import Animal from "./Animal"
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"
import { Modal, Button, ModalHeader, ModalBody } from "reactstrap"
import AnimalForm from "./AnimalForm"

export default () => {
    const { animals } = useContext(AnimalContext)
    const { customers } = useContext(CustomerContext)
    const { locations } = useContext(LocationContext)
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <h2>Animals</h2>
            <div className="animal_Form_link" onClick = {toggle}>Add new animal</div>
            <div className="animals">            
            {
                animals.map(
                    anima => {
                        const owner = customers.find(customer => customer.id === anima.customerId)
                        const clinic = locations.find(location => location.id === anima.locationId)

                        return <Animal key={anima.id} 
                            animal ={anima} 
                            customer = {owner} 
                            location = {clinic} />
                    }
                )
            }
            </div>
            <Modal isOpen = {modal} toggle = {toggle}>
                <ModalHeader toggle ={toggle}>
                    <h4>New Animal</h4>
                </ModalHeader>
                <ModalBody>
                    <AnimalForm toggler = {toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}