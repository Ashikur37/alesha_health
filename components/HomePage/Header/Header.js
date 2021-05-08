import RightHeader from "./RightHeader";
import LeftHeader from "./LeftHeader";
import {Row, Col, Container} from "react-bootstrap"
const cHeaderRightSlider = {
    order:'1',
};

export default function () {
    return (
        <Container className="mt-5">
            <div>
                <Row>
                    <Col md={5}><LeftHeader/></Col>
                    <Col md={7} style={cHeaderRightSlider} className="my-auto"><RightHeader /></Col>
                </Row>
            </div>
        </Container>
    )
};