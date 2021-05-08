import {useContext, useEffect} from "react";
import {ProfileCompletionContext} from "../../../../context/ProfileCompletionContext";
import Spinner from "../../../UI/Spinner/Spinner";
import DoctorProfileSteps from "./DoctorProfileSteps";
import {useRouter} from "next/router";
import adminServer from "../../../../adminServer";

const DoctorProfile = function () {
    const {context,setContext}=useContext(ProfileCompletionContext);
    const router = useRouter();
    let {id} = router.query;
    useEffect(()=>{
        loadInitialData();
    },[]);
    const personalInfoFormat = (personalInfo)=>{
        const names = {en:'', bn:''};
        if(personalInfo.names.length>0){
            for(let nameData of personalInfo.names){
                names[nameData.code] = nameData.name;
            }
        }
        personalInfo.names = names;
        return personalInfo;
    };
    const professionalInfoFormat = (professionalInfo)=>{
        const professionalInfoData = {};
        professionalInfoData.designation_id = professionalInfo.designation_id;
        professionalInfoData.speciality_id = professionalInfo.speciality_id;
        const short_info = {en:'', bn:''};
        const detail_info = {en:'', bn:''};
        for(let item of professionalInfo.info){
            short_info[item.code] = item.short_info;
            detail_info[item.code] = item.detail_info;
        }
        professionalInfoData.short_info = short_info;
        professionalInfoData.detail_info = detail_info;
        return professionalInfoData;
    };
    const loadInitialData = ()=>{ // original method
        adminServer.get('/admin/doctors/'+id+'/profile-info').then((res)=>{
            setContext(prev=>{
                const stateData = { ...prev,loaded: true,completedStep:res.data.completed};

                //personal info format
                const personalInfo = personalInfoFormat(res.data.personal_info);
                const professionalInfo = professionalInfoFormat(res.data.professional_info);
                stateData.personalInfo = personalInfo;
                stateData.professionalInfo = professionalInfo;
                stateData.certificationInfo = res.data.certification_info;
                stateData.workplaceInfo = res.data.workplace_info;
                return stateData;
            });
            //doctorServer.get('/doctor/profile-completion/personal-info').then(res=>{})
        }).catch((err)=>{

        });
    };

    /*const loadInitialData = ()=>{ // fake method
        const res = {data:{"status":true,"completed":4,"personal_info":{"email":"mkr.win01@gmail.com","names":[{"name":"Zakir Hossain ","code":"en"},{"name":"জাকির হোসেন  ","code":"bn"}],"dob":"1984-06-14","present_address":"105/2,kakrail","video":"","image":"11.jpg","permanent_address":"Patgudam,Mymensingh ","nid":"19916115229000187","nid_image_front":"11_nid_front.png","nid_image_back":"11_nid_back.png","doctor_id":11},"professional_info":{"designation_id":1,"speciality_id":1,"info":[{"short_info":"MBBS, FCPS Fellow Medicine (uk)  ","detail_info":"MBBS, FCPS Fellow Medicine (uk)  ","code":"en"},{"short_info":"sbc Dhak, DV ","detail_info":"MBBS, FCPS Fellow Medicine (uk)  ","code":"bn"}],"doctor_id":11},"certification_info":{"bmdc_reg":"36758","bmdc_reg_image":"11_bmdc_reg.png","doctor_id":11,"certificates":[{"degree":"Test","image":"11_456815926277523707445.png","id":32}]},"workplace_info":{"doctor_id":11,"hospital_id":1,"department_id":1,"room":"420"}}};
        setContext(prev=>{
            const stateData = { ...prev,loaded: true,completedStep:res.data.completed};

            //personal info format
            const personalInfo = personalInfoFormat(res.data.personal_info);
            const professionalInfo = professionalInfoFormat(res.data.professional_info);
            stateData.personalInfo = personalInfo;
            stateData.professionalInfo = professionalInfo;
            stateData.certificationInfo = res.data.certification_info;
            stateData.workplaceInfo = res.data.workplace_info;
            return stateData;
        });
    };*/
    return(
        <div>
            { !context.loaded && <Spinner />}
            { context.loaded && (<DoctorProfileSteps/>)}
            {/*{ <DoctorRegistration/> }*/}
        </div>
    );
};
export default DoctorProfile;