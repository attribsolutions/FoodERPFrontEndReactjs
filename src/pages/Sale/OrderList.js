import React, { useEffect, useState } from "react";
import { useDispatch, connect } from "react-redux";
import { Button, Input } from "reactstrap";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardSubtitle,
  CardHeader,
  Container,
} from "reactstrap";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

// store action import
import { getOrderList } from "../../store/actions";


const OrderList = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const current = new Date();
  const month = current.getMonth() + 1;

  const currentDate = `${current.getFullYear()}-${
    month < 10 ? `0${month}` : `${month}`
  }-${current.getDate()}`;

  const fromDateIn = `${current.getFullYear()}-${
    month < 10 ? `0${month}` : `${month}`
  }-${current.getDate() }`;

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  useEffect(() => {
    const orderlistInitial = {
      FromDate:fromDateIn,// !fromDate ? fromDateIn : fromDate,
      ToDate:currentDate, //!toDate ? currentDate : toDate,
      CustomerID: 0,
      DivisionID: 3,
    };
    dispatch(getOrderList(orderlistInitial));
    console.log("useEffect")
  }, [dispatch, ]);

  const orders = props.orderList;

  const customerNameOption = props.orderList;

  function goHandeller() {
    const orderlistInitial = {
      FromDate: !fromDate ? fromDateIn : fromDate,
      ToDate: !toDate ? currentDate : toDate,
      CustomerID: 0,
      DivisionID: 3,
    };
    dispatch(getOrderList(orderlistInitial));
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardSubtitle>
                    <div className="row">
                      <div className="col-lg-1">
                        <h5 className="card-title me-2">From Date:</h5>
                      </div>
                      <div className="col-lg-2">
                        <Input
                          className="form-control"
                          type="date"
                          defaultValue={fromDateIn}
                          onChange={(e) => {
                            setFromDate(e.target.value);
                          }}
                         id="example-date-input"
                        />
                      </div>
                      <div className="col-lg-1">
                        <h5 className="card-title me-2"> To Date:</h5>
                      </div>
                      <div className="col-lg-2">
                        <Input
                          className="form-control"
                          type="date"
                          defaultValue={currentDate}
                          onChange={(e) => {
                            setToDate(e.target.value);
                          }}
                         
                          id="example-date-input"
                        />
                      </div>
                      <div className="col-lg-1 ">
                        <h5 className="card-title me-2">Party Name:</h5>
                      </div>
                      <div className="col-lg-4">
                        <Select options={customerNameOption} />
                      </div>
                      <div className="col-lg-1">
                        <Button
                          className="btn btn-success "
                          onClick={() => {
                            goHandeller();
                          }}
                        >
                          Go{" "}
                        </Button>
                      </div>
                    </div>
                  </CardSubtitle>
                </CardHeader>
                <CardBody>
                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table  table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th data-priority="1">Order Date</Th>
                            <Th data-priority="1">Order No</Th>
                            <Th data-priority="3">Order Type</Th>
                            <Th data-priority="1">Customer Name</Th>
                            <Th data-priority="1">Edit</Th>
                            <Th data-priority="3">Show</Th>
                            <Th data-priority="3">Status</Th>
                            <Th data-priority="3">Delete</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {orders.map((item, key) => {
                            return !item.Msg ? (
                              <Tr>
                                <Td>{item.OrderDateString}</Td>
                                <Td>{item.OrderID}</Td>
                                <Td>{item.OrderType}</Td>
                                <Td>{item.Name}</Td>
                                <Td>
                                  <buton
                                    className="badge badge-soft-primary font-size-12"
                                    onClick={() => {
                                      history.push({
                                        pathname: "/order",
                                        // search: '?query=abc',
                                        state: { orderId: item.OrderID },
                                      });
                                    }}
                                  >
                                    Edit
                                  </buton>
                                </Td>

                                <Td>
                                  <buton className="badge badge-soft-warning font-size-12">
                                    show
                                  </buton>
                                </Td>
                                <Td>
                                  {item.StatusID === 0 ? (
                                    <div className="badge badge-soft-success font-size-12">
                                      placed
                                    </div>
                                  ) : (
                                    <div className=" badge badge-soft-warning font-size-12">
                                      inprograce
                                    </div>
                                  )}
                                </Td>
                                <Td>
                                  {" "}
                                  <buton className="badge badge-soft-danger font-size-12">
                                    Delete
                                  </buton>
                                </Td>
                              </Tr>
                            ) : (
                              <Tr className="  lert-label-icon label-arrow mb-4 alert alert-info ">
                                <h5>{item.Msg}</h5>
                              </Tr>
                            );
                          })}
                          {/* { message} */}
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  //store.getState()
  return {
    orderList: state.orders.orderList,
    orderListMessage: state.orders.orderListMessage,
  };
};

export default connect(mapStateToProps)(OrderList);
