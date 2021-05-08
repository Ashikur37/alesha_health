var Validator = require('validator');
function getPropertyByString(obj,str) {
  try{
    var properties = str.split(".");
    var myTempObject = obj;
    for (var i = 0, length = properties.length; i < length; i++) {
      myTempObject = myTempObject[properties[i]];
    }
    return myTempObject;
  }catch (e) {
    return "";
  }
}
function setPropertyByString(obj, path, value) {
  var steps = path.split(".");
  var i = 0,
      cur="";

  for (; i < steps.length - 1; i++) {
    if(obj[steps[i]] === undefined){
      obj[steps[i]] = {};
    }
    cur = obj[steps[i]];
    if (cur !== undefined) {
      obj = cur;
    } else {
      break;
    }
  }

  obj[steps[i]] = value;
}
const commonValidations = (data,roles,msg) => {
  let errors = {};
  for(const role in roles){
    const roleList = roles[role].split('|');
    for(const list in roleList){
      const value = getPropertyByString(data,role);
      const allExp = roleList[list].split(':');
      const validation = rolesFunc[allExp[0]]( {value: value, filed: role, role: allExp, all: data} );
      if(validation !== true){
        let message = "";
        if(msg && msg[role] && msg[role][allExp[0]]){
          message = msg[role][allExp[0]];
        }else{
          message = validation;
        }
        setPropertyByString(errors, role, message)
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
      if(value === undefined){
        throw new Error('This field is required')
      }else if( typeof value === 'object' ){
        if(value.length === 0){
          throw new Error('This field is required')
        }
      }else if(value.toString().trim() === ''){
        throw new Error('This field is required')
      }
      return true;
    }catch (e) {
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
  mimes: (data)=>{
    try{
      const {value,role} = data;
      if(!value){
        return true;
      }
      const types =  role[1].split(',');
      const fileType = value.type.split('/')[1];
      if(types.findIndex(type=>type===fileType) === -1){
        throw new Error('only '+role[1]+' file types are allowed');
      }
      return true;
    }catch (e) {
      return e.message;
    }
  },
};
export default commonValidations;