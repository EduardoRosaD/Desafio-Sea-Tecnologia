import api from "../../../config/server";

import validateForm from "./validateForm";

export async function employeeRegister(e,employeeForm) {
    e.preventDefault()
   try {

    validateForm(employeeForm)
    const response = await api.post("http://localhost:5000/funcionario", employeeForm) 
   } catch (error) {
        console.log(error)
   }
}

export async function getEmployees() {
    try {
      const response = await api.get("http://localhost:5000/funcionario")
      return response
    } catch (error) {
         console.log(error)
    }
 }
