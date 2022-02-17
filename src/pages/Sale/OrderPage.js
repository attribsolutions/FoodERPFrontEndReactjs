import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Button, Input } from "reactstrap";
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
import {
  getOrderPage,
  editOrder,
  updateOrder,
  submitOrderPage,
} from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const OrderPage = (props) => {
  var itemgroups = "";
  const history = useHistory();
  const dispatch = useDispatch();

  const current = new Date();
  const date=current.getDate();
  const month = current.getMonth() + 1;
  const currentDate = `${current.getFullYear()}-${
    month < 10 ? `0${month}` : `${month}`
  }-${date<10?`0${date}`:`${date}`}`;

  const [orderDate, setOrderDate] = useState("");
  const [mode, setMode] = useState(null);

  if (props.location.state === undefined && mode === null) {
    setMode("save");
    dispatch(editOrder(0));
  }

  useEffect(() => {
    if (props.location.state === undefined) {
    } else {
      dispatch(editOrder(props.location.state.orderId));
    }
    dispatch(getOrderPage());
  }, []);

  const { orders, editOrderData, EditOrder,OrderSubmit } = useSelector((state) => ({
    orders: state.orders.orders,
    editOrderData: state.orders.editOrderData.orderItemInfo,
    EditOrder: state.orders.editOrderData,
    OrderSubmit: state.orders.submitOrderSuccess,
  }));
  // console.log("orderid", EditOrder);
  const saveHandeller = (modes) => {
    var abc = [];
    for (var i = 0; i < orders.length - 1; i++) {
      let qty = document.getElementById("txtqty" + i).value;
      if (qty > 0) {
        var itemid = document.getElementById("lblItemID" + i).value;
        var UnitID = document.getElementById("ddlUnit" + i).value;
        var comments = document.getElementById("comment" + i).value;
        // console.log("unitIdddd", UnitID);
        var abc1 = {
          OrderId: props.location.state === undefined ? 0 : EditOrder.OrderID,
          ItemID: itemid,
          Quantity: qty,
          UnitID: UnitID,
          Comments: comments,
          IsOrderItem: false,
        };
        abc.push(abc1);
      }
    }

    if (!abc.length <= 0) {
      const requestOptions = {
        body: JSON.stringify({
          CustomerID: 13,
          OrderId: props.location.state === undefined ? 0 : EditOrder.OrderID,
          OrderDate: !orderDate ? currentDate : orderDate,
          CompanyID: 1,
          DivisionID: 3,
          ExpectedDeliveryDate: !orderDate ? currentDate : orderDate,
          CreatedOn: !orderDate ? currentDate : orderDate,
          UpdatedBy: 1,
          UpdatedOn: !orderDate ? currentDate : orderDate,
          OrderitemInfo: abc,
        }),
      };
      // alert(requestOptions.body);
      // console.log(requestOptions.body);

      if (modes) {
        dispatch(updateOrder(requestOptions.body));
        history.push({
          pathname: "/orderList",
        });
      } else {
        dispatch(submitOrderPage(requestOptions.body));
        history.push({
          pathname: "/orderList",
        });
      }
    } else {
      alert("warnings: field can not  blank...!");
    }
    
  };
  useEffect(()=>{
console.log("useEffect",OrderSubmit.error)
  },[saveHandeller])

  function handleKeyDown(e) {
    var cont = e.target.id;
    var abc = cont.split("y");
    cont = abc[1];
    if (e.keyCode === 40) {
      cont = ++cont;
      document.getElementById("txtqty" + cont).focus();
    }
    if (e.keyCode === 38 && cont > 0) {
      cont = cont - 1;
      document.getElementById("txtqty" + cont).focus();
    }
  }

  // console.log("editOrderData", editOrderData);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title={"count :" + orders.length}
            breadcrumbItem="Order Page "
          />
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardSubtitle>
                    <div className="row">
                      <div className="col-lg-2">
                        <Input
                          className="form-control"
                          type="date"
                          defaultValue={currentDate}
                          onChange={(e) => {
                            setOrderDate(e.target.value);
                          }}
                          id="example-date-input"
                        />
                      </div>
                      <div className="col-lg-9"></div>
                      <div className="col-lg-1">
                        {mode === null ? (
                          <Button
                            className="btn btn-success "
                            onClick={() => {
                              saveHandeller(true);
                            }}
                          >
                            Update
                          </Button>
                        ) : (
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => {
                              saveHandeller(false);
                            }}
                          >
                            Save
                          </button>
                        )}
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
                            <Th data-priority="1">Item Name</Th>
                            <Th data-priority="3">Quantity</Th>
                            <Th data-priority="1">UOM</Th>
                            <Th data-priority="3">Comments</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {orders.map((item, key) => {
                            var com = "";
                            var qat = "";
                            var unitId = null;
                            editOrderData.map((i, k) => {
                              if (item.ItemID === i.ItemID) {
                                com = i.Comments;
                                unitId = i.UnitID;
                                qat = i.Quantity;
                              }
                            });
                            return (
                              <Tr>
                                <Td>
                                  {item.ItemGroup === itemgroups ? (
                                    ""
                                  ) : (
                                    <div>
                                      {" "}
                                      <label className="btn btn-secondary btn-sm waves-effect waves-light">
                                        {item.ItemGroup}
                                      </label>
                                      <label
                                        className="btn btn-secondary btn-sm waves-effect waves-light"
                                        hidden
                                      >
                                        {(itemgroups = item.ItemGroup)}
                                      </label>
                                    </div>
                                  )}
                                  {/* </Td>
                                <Td> */}
                                  <label
                                    id={"lblItemName" + key}
                                    name={"lblItemName" + key}
                                  >
                                    {item.ItemName}
                                  </label>
                                  <input
                                    type="hidden"
                                    id={"lblItemID" + key}
                                    name={"lblItemID" + key}
                                    defaultValue={item.ItemID}
                                  />
                                </Td>
                                <Td>
                                  <input
                                    type="number"
                                    id={"txtqty" + key}
                                    key={item.ItemID}
                                    // value={QtValueHandller(item.ItemID)}
                                    defaultValue={qat}
                                    onKeyDown={(e) => {
                                      handleKeyDown(e);
                                    }}
                                    className="form-control form-control-sm"
                                    autoComplete="false"
                                  />
                                </Td>
                                <Td>
                                  <select id={"ddlUnit" + key}>
                                    {item.ItemUnits.map((units, key) => {
                                      return (
                                        <option
                                         Value={units.UnitID}
                                          defaultValue={
                                            unitId === null
                                              ? units.UnitID
                                              : unitId
                                          }
                                        >
                                          {units.UnitName}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </Td>
                                <Td>
                                  <input
                                    type="text"
                                    defaultValue={com}
                                    id={"comment" + key}
                                    className="form-control form-control-sm"
                                    autoComplete="false"
                                  />
                                </Td>
                              </Tr>
                            );
                          })}
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

export default OrderPage;
