import {useEffect, useState} from "react";
import commonValidations from "../../validations/commonValidations";

export default function () {
    const [form,setForm] = useState({
        bmdc_reg:'',
        bmdc_reg_image:'',
        certificates:[
            {degree:'',imageName:''},
            {degree:'',imageName:''},
        ],
    });
    useEffect(()=>{
        const { errors, isValid } = commonValidations(form,{
            'bmdc_reg':'required',
            'bmdc_reg_image':'required',
            'certificates.*.degree':'required',
            'certificates.*.imageName':'required|mimes:jpeg,png,gif,webp',
        });
        console.log('errors',errors)
    });
    return (
      <>
        Hey
      </>
    );
}