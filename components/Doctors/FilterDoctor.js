import {Accordion, Button, Card, useAccordionToggle} from "react-bootstrap";
import style from './FilterDoctor.module.css';

function FilterDoctor(props) {
    const eventKeyNo=1;
    function CustomToggle({children,eventKey}){
        const decoratedOnClick = useAccordionToggle(eventKey);
     return(
         <Button type="button"
                 onClick={decoratedOnClick}
         >
             {children}
         </Button>
     );
    }
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <CustomToggle eventKey="0">Filter</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default FilterDoctor;