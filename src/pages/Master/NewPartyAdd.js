import React from 'react'
import reactSelect from 'react-select'
import { Col, Form, Input, Label, Row } from 'reactstrap'

export default function NewPartyAdd() {
    return (
        <React.Fragment>
            <div className="page-content">
                <Row>
                    <Col lg={6} className="ms-lg-auto">
                        <div className="mt-4 mt-lg-0">
                            <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Horizontal form</h5>

                            <Form>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">Party Type*</Label>
                                    <Col sm={6}>
                                        <Input type="text" className="form-control" id="horizontal-firstname-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Party Sub Type*</Label>
                                    <Col sm={6}>
                                        <Input type="email" className="form-control" id="horizontal-email-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Party Name*</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row> 
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Party Name*</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Party Code</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Address</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">State*</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Taluka*</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Area</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">PAN </Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">GSTIn*</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>

                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label"></Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>


                                <Row className="justify-content-end">
                                    <Col sm={9}>
                                        <div>
                                            <button type="submit" className="btn btn-primary w-md">Submit</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                    <Col lg={5} className="ms-lg-auto">
                        <div className="mt-4 mt-lg-0">
                            <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Horizontal form</h5>

                            <Form>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">First name</Label>
                                    <Col sm={6}>
                                        <Input type="text" className="form-control" id="horizontal-firstname-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Email</Label>
                                    <Col sm={6}>
                                        <Input type="email" className="form-control" id="horizontal-email-input" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Password</Label>
                                    <Col sm={6}>
                                        <Input type="password" className="form-control" id="horizontal-password-input" />
                                    </Col>
                                </Row>

                                <Row className="justify-content-end">
                                    
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
        
            </div>
        </React.Fragment>
    )
}
