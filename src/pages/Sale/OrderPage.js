import React, { useEffect, useState } from "react";
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
import { getOrderPage, submitOrderPage, editOrder } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const OrderPage = (props) => {
  var itemgroups = "";

  const dispatch = useDispatch();
  console.log("props", props.location.state);
  const current = new Date();
  const month = current.getMonth() + 1;
  const currentDate = `${current.getFullYear()}-${
    month < 10 ? `0${month}` : `${month}`
  }-${current.getDate()}`;

  const [orderDate, setOrderDate] = useState("");

  useEffect(() => {
    if (props.location.state === undefined) {
    } else {
      // console.log("props1",props.location.state)
      dispatch(editOrder(props.location.state.orderId));
    }
    dispatch(getOrderPage());
  }, [dispatch]);

  const { orders, editOrderData, EditOrder } = useSelector((state) => ({
    orders: state.orders.orders,
    editOrderData: state.orders.editOrderData.Items,
    EditOrder: state.orders.editOrderData,
  }));
  console.log("editOrderData :", editOrderData);
  console.log("EditOrder :", EditOrder);

  const saveHandeller = () => {
    var abc = [];
    for (var i = 0; i < orders.length - 1; i++) {
      let qty = document.getElementById("txtqty" + i).value;
      if (qty > 0) {
        var itemid = document.getElementById("lblItemID" + i).value;
        var UnitID = document.getElementById("ddlUnit" + i).value;
        // var ItemName = document.getElementById("lblItemName" + i).innerText;
        var comments = document.getElementById("comment" + i).value;
        var abc1 = {
          OrderId: 0,
          ItemID: itemid,
          Quantity: qty,
          UnitID: UnitID,
          Comments: comments,
          IsOrderItem: false,
        };
        abc.push(abc1);
      }
    }
    const requestOptions = {
      body: JSON.stringify({
        CustomerID: 13,
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
    // console.log("requestOptions", requestOptions.body);
    dispatch(submitOrderPage(requestOptions.body));
  };

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
    }}
 
  const QtValueHandller=(id)=>{
    var qat = "";
    editOrderData.map((i, k) => {
      if(id ===i.ItemID) {   qat=i.Qauntity }
    })
    return qat
  }
  const ComValueHandeller=(id)=>{
    var com = "";
    editOrderData.map((i, k) => {
      if(id ===i.ItemID) {   com=i.Comment }
    })
    return com
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
                    <div class="row">
                      <div class="col-lg-2">
                        <Input
                          className="form-control"
                          type="date"
                          defaultValue={currentDate}
                          onChange={(e) => {
                            setOrderDate(e.target.value);
                          }}
                          on
                          id="example-date-input"
                        />
                      </div>
                      <div class="col-lg-9"></div>
                      <div class="col-lg-1">
                        <Button
                          className="btn btn-success "
                          onClick={() => {
                            saveHandeller();
                          }}
                        >
                          Save{" "}
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
                            <Th data-priority="1">Itemgroup Name</Th>
                            <Th data-priority="1">Item Name</Th>
                            <Th data-priority="3">Quantity</Th>
                            <Th data-priority="1">UOM</Th>
                            <Th data-priority="3">Comments</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {orders.map((item, key) => {
                             var com = "";
                             var qat='';
                             editOrderData.map((i, k) => {
                               if(item.ItemID ===i.ItemID) {   com=i.Comment; qat=i.Qauntity }
                             })
                            return (
                              <Tr>
                                <Td>
                                  {item.ItemGroup === itemgroups ? (
                                    ""
                                  ) : (
                                    <label className="btn btn-secondary btn-sm waves-effect waves-light">
                                      {item.ItemGroup}
                                      {(itemgroups = item.ItemGroup)}
                                    </label>
                                  )}
                                </Td>
                                <Td>
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
                                    value={item.ItemID}
                                  />
                                </Td>
                                <Td>
                                  <input
                                    type="text"
                                    id={"txtqty" + key}
                                    key={item.ItemID}
                                    // value={QtValueHandller(item.ItemID)}
                                    value={qat}
                                    onKeyDown={(e) => {
                                      handleKeyDown(e);
                                    }}
                                    class="form-control form-control-sm"
                                    autoComplete="false"
                                  />
                                </Td>
                                <Td>
                                  <select
                                    classNamePrefix="select2-selection"
                                    id={"ddlUnit" + key}
                                  >
                                    {item.ItemUnits.map((units, key) => {
                                      return (
                                        <option value={units.UnitID}>
                                          {units.UnitName}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </Td>
                                <Td>
                                  {" "}
                                  <input
                                    type="text"
                                    value={com}
                                    // value={ComValueHandeller(item.ItemID)}
                                    id={"comment" + key}
                                    class="form-control form-control-sm"
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
