export default function validateForm(form){
    if(!form.name){
        return alert("Preencha o campo nome")
    }
    if(!form.cpf){
        return alert("Preencha o campo CPF")
    }
    if(!form.role){
        return alert("Preencha o campo cargo")
    }
    if(!form.job){
        return alert("Preencha o campo função")
    }
    if(!form.birthDate){
        return alert("Preencha o campo data de nascimento")
    }
    if(!form.rg){
        return alert("Preencha o campo RG")
    }
}