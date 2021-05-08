import {useContext, useEffect} from "react";
import {ProfileCompletionContext} from "../../../context/ProfileCompletionContext";
import doctorServer from "../../../doctorServer";
import Spinner from "../../UI/Spinner/Spinner";
import DoctorProfileSettings from "../Registration/DoctorProfileSettings";

const ProfileSettings = function () {
    const {context,setContext}=useContext(ProfileCompletionContext);
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
    const loadInitialData = ()=>{
        doctorServer.get('/doctor/completed-step').then((res)=>{
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
    return(
        <div>
            { !context.loaded && <Spinner />}
            { context.loaded && (<DoctorProfileSettings/>)}
            {/*{ <DoctorRegistration/> }*/}
        </div>
    );
};
export default ProfileSettings;