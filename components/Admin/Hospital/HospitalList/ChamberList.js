import ChamberHeading from "./Chamber/ChamberHeading";
import ChamberSearching from "./Chamber/ChamberSearching";
import ChamberNameLists from "./Chamber/ChamberNameLists";
import ChamberAddForm from "./Chamber/ChamberAddForm";
import style from "./Chamber/ChamberNameLists.module.css";
import ChamberListCard from "./Chamber/ChamberListCard";

function ChamberList({hospitals}) {
    return(
        <div>
            <div className={style.wkNameListArea} >
                {hospitals.data && hospitals.data.map((hospital)=>(
                    <ChamberListCard key={'hospital_'+hospital.id} hospital={hospital}/>
                ))}
            </div>
            {/*<ChamberAddForm/>*/}
        </div>
    );

}

export default ChamberList;