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
        </>
    )
}