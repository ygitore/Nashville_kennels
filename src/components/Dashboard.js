import React from "react"
import AnimalList from "./animal/AnimalList"
import { LocationProvider } from "./location/LocationProvider"
import LocationList from './location/LocationList'
import EmployeeList from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import {CustomerProvider} from './customer/CustomerProvider'
import CustomerList from "./customer/CustomerList"
import { AnimalProvider } from "./animal/AnimalProvider"


export default () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <AnimalProvider>
            <CustomerProvider>
                <EmployeeProvider>
                    <LocationProvider>
                        <LocationList />
                        <AnimalList />
                        <CustomerList />
                        <EmployeeList />
                    </LocationProvider>
                </EmployeeProvider>
            </CustomerProvider>
        </AnimalProvider>
    </>
)