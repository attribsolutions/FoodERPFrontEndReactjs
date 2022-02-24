import React, { useState, useEffect } from 'react'
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap'

export default function DivisionName() {
    const [divisionData, setDivisionData] = useState([]);
    const [division, setDivision] = useState('');
    const history = useHistory();
    useEffect(() => {
        const dr = JSON.parse(localStorage.getItem('divisions'));
        setDivisionData(dr);
    }, [])

    const divisionOptions = divisionData.map((d) => ({
        value: d.DivisionID,
        label: d.DivisionName,
    }));
    const OnChangeHandller = (e) => {
        let val = e.value;
        localStorage.setItem("DivisionID", JSON.stringify(val));
        setDivision(val);
        history.push("/dashboard");
    }

    return (
        <React.Fragment>
            <div className="page-content" style={{height:"400px"}}>
                <Container fluid>
                    <Card>
                        <CardBody >

                            <Row className="mb-12" >
                                <Col  lg="4">
                                    <Select
                                        value={division}
                                        required
                                        options={divisionOptions}
                                        onChange={(e) => {
                                            OnChangeHandller(e);
                                        }}
                                    />
                                </Col>
                                <Col lg="8">
                                    <Button  className="btn btn-info" style ={{float:"right"}}> Go</Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        </React.Fragment>
    )
}
