import style from './ServicesDescriptionComponent.module.css';
import {Row, Col} from "react-bootstrap";
import {useEffect} from "react";
function ServicesDescriptionSingleComponent(props) {
    const {id,status,service_title,service_detail} = props.service;
    const {lang,onEdit,edit,statusLoading,changePublishStatus} = props;
    const label =  {
        'en':{
            'title':'Service name',
        },
        'bn':{
            'title':'সার্ভিসের নাম',
        },
    };
    useEffect(()=>{

    },[edit]);
    let statusButton = "";
    if(status){
        statusButton = (<button className={style.wkServicesPostPublished} disabled={statusLoading} onClick={()=>changePublishStatus(id,0)} type="submit">
            {statusLoading?'Loading...':'Publish'}
        </button>)
    }else{
        statusButton = (<button  className={[ style.wkServicesPostUnpublish ]} disabled={statusLoading} onClick={()=>changePublishStatus(id,1)} type="submit">
            {statusLoading?'Loading...':'Unpublish'}
        </button>)
    }

    let editButton = "";
    if(edit !== id){
        editButton = (
            <a href="#" className={style.wkDoctorEditServices} onClick={(e)=>{
                e.preventDefault();
                onEdit(props.service.id)
            }}><i className="material-icons">
                edit
            </i></a>
        );
    }
    return (
        <div className={style.wkDoctorServicesCard}>
            <Row>
                <Col md={8}>
                    <p><strong> {label[lang].title}: </strong>{service_title} </p>
                    <p>{service_detail}</p>
                </Col>
                <Col md={4} className="text-center my-3">
                    { editButton }
                    { statusButton }
                </Col>
            </Row>
        </div>
    );
}
export default ServicesDescriptionSingleComponent