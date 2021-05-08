import style from './SingleAppointmentPrescriptionTabSection.module.css';

export default function ({ prescription, index, imageShow }) {
    const imageUrl = process.env.SERVER_URL+'/prescriptions-files/'+prescription.schedule_id+'/'+prescription.prescription_name;
    const previewImage = (e)=>{
        e.preventDefault();
        imageShow(imageUrl);
    };
    return(
        <div className={"row mb-2"}>
            <div className="col-md-1">
                <p className={style.prescriptionNumber}>{(index+1).toString().padStart(2,0)}.</p>
            </div>
            <div className="col-md-6">
                <div>
                    <p className={style.prescriptionTextDefault}>প্রেসক্রিপশন</p>

                </div>
            </div>
            <div className="col-md-5">
                <div className={"clearfix ml-3 " + style.prescriptionOption}>
                    <div className={"float-left "}>
                        <a href={imageUrl} download={prescription.prescription_name}>
                            <span className={style.wkIconArea}>
                                <span className={style.wkIcon}>
                                    <span className={"material-icons " + style.materialFontSize}>get_app</span>
                                </span>
                                <span className={style.prescriptionDownload}>ডাউনলোড</span>
                            </span>
                        </a>
                    </div>
                    <div className="float-right">
                        <a href="" onClick={previewImage}>
                                <span className={style.wkIconArea}>
                                    <span className={style.wkIcon}>
                                        <span className={"material-icons " + style.materialFontSize}>visibility</span>
                                    </span>
                                    <span className={style.prescriptionPreview}>প্রিভিউ</span>
                                </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}