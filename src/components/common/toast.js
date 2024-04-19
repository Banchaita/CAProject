import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
    timeout:2000,
    icon:"material-icons",
    transitionIn:"flipInX",
    transitionOut:"flipOutX"
})

const toast ={
    error:(message,title= "Error")=>{
        console.log(message,message)
        return iziToast.error({
            title:title,
            message:message,
            position:"topRight",
      
        });
    },
    success:(message,title="Success") =>{
        return iziToast.success({
            title:title,
            message:message,
            position:"topRight"
        })
    }
}

export default toast;


