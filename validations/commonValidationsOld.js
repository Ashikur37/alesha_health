var Validator = require('validator');
const commonValidationsOld = (data,roles,msg) => {
  let errors = {};
  //validation:
  for(const role in roles){
    const roleList = roles[role].split('|');
    for(const list in roleList){
      const allExp = roleList[list].split(':');
      const validation = rolesFunc[allExp[0]]({
        value: data[role],
        filed: role,
        role: allExp,
        all: data
      });
      if(allExp[1] === '*'){
        for(let validationFiled in validation){
          if(!errors[validationFiled]){
            errors[validationFiled] = {};
          }
          if(msg && msg[role] && msg[role][allExp[0]]){
            errors[validationFiled][role] = msg[role][allExp[0]];
          }else{
            errors[validationFiled] = Object.assign(errors[validationFiled],validation[validationFiled]);
          }
        }
        break;
      }else if(validation !== true){
        if(msg && msg[role] && msg[role][allExp[0]]){
          errors[role] = msg[role][allExp[0]];
        }else{
          errors[role] = validation;
        }
        break;
      }
    }
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
const rolesFunc = {
  required: (data)=>{
    try{
      let {value,role,all,filed} = data;
      if(role[1]==='*'){
        const errors = {};
        for(let ele in all){
          console.log('ele',ele)
          value = all[ele][filed];
          try{
            if(value === undefined){
              throw ({filed:ele, message:'This field is required'})
            }else if( typeof value === 'object' ){
              if(value.length === 0){
                throw ({filed:ele, message:'This field is required'})
              }
            }else if(value.toString().trim() === ''){
              throw ({filed:ele, message:'This field is required'})
            }
          }catch (e) {
            if(!errors[e.filed]){
              errors[e.filed] = {};
            }
            errors[e.filed][filed] = e.message;
          }
        }
        if(Object.keys(errors).length>0){
          throw errors;
        }
      }else{
        if(value === undefined){
          throw ('This field is required')
        }else if( typeof value === 'object' ){
          if(value.length === 0){
            throw ('This field is required')
          }
        }else if(value.toString().trim() === ''){
          throw ('This field is required')
        }
      }
      return true;
    }catch (e) {
      if(typeof e ==='object'){
        return e;
      }
      return e.message;
    }
  },
  max: (data)=>{
    const {value,role} = data;
    const max =  role[1];
    if(!value){
      return true;
    }
    if(role[2]==='numeric' && value > max){
      return `The field may not be greater than ${max}.`
    }else if(Validator.isLength(value,{max}) === false){
      return `The field may not be greater than ${max} characters.`
    }
    return true;
  },
  confirm_password: (data)=>{
    try{
      const {value,role,all} = data;
      const password = role[1]?role[1]:'password';
      if(value !== all[password]){
        throw new Error('Password not matched.')
      }
      return true;
    }catch (e) {
      return e.message;
    }
  },
};
module.exports = commonValidations;