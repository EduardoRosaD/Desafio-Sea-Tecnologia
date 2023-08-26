import axios from "axios";
import { EmployeeRegContext } from "../context/employeeRegContext";
import { useContext, useState } from "react";

export async function employeeRegister(employeeForm) {
   try {
     console.log(employeeForm)
     const response = await axios.post('http://localhost:3001/employees', employeeForm)
     console.log(response)
   } catch (error) {
        console.log(error)
   }
}

export async function getEmployees() {
    try {
      const response = await axios.get('http://localhost:3001/employees')
      console.log(response)
    } catch (error) {
         console.log(error)
    }
 }
