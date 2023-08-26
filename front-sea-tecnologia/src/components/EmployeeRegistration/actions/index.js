import api from "../../../config/server";

export async function employeeRegister(e,employeeForm) {
    e.preventDefault()
   try {
     const response = await api.post("http://localhost:5000/funcionario", employeeForm)
     console.log(response)
   } catch (error) {
        console.log(error)
   }
}

export async function getEmployees() {
    try {
      const response = await api.get("http://localhost:5000/funcionario")
      console.log(response)
    } catch (error) {
         console.log(error)
    }
 }
