import React, { useState, useEffect } from 'react'
import Select from "react-select";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Button, Card, Col, Container, Row } from 'reactstrap'



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
            <div className="page-content">
                <Container fluid>
                    <div>

                        <Row className="mb-6">
                            <Col>
                                <div  >
                                    <Select
                                        value={division}
                                        required
                                        options={divisionOptions}
                                        onChange={(e) => {
                                            OnChangeHandller(e);
                                        }}
                                    />
                                </div>
                            </Col>
                            <Col className="mb-4">
                                <div className="col-lg-6">
                                    <Button> Go</Button>
                                </div>

                            </Col>
                        </Row>

                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}
