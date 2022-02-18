import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from "reactstrap";
//# boot strap import
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

// store action import
import {
  getInvoices,
  deleteInvoices,
  editInvoiceId,
} from "../../store/actions";
import { useSelector, useDispatch} from "react-redux";

const ListPage = () => {
  const [dId,setId]=useState('')
  const history=useHistory();
  const dispatch = useDispatch();
  const { SearchBar } = Search;

  useEffect(() => {
    dispatch(getInvoices());
  }, [dispatch,dId]);
  

  const deleteInvoiceHandeler = (id) => {
    setId(id);
    dispatch(deleteInvoices(id));
    dispatch(getInvoices());
  };

  const EditPageHandler = (id) => {  
    // console.log(id)
    dispatch(editInvoiceId(id));
    history.push({ 
      pathname:"/addPage",
      state: id
     })
  };
 
 const AddPageHandler = () => {  
    history.push("/addPage");
  };


  const { invoices } = useSelector((state) => ({
    invoices: state.invoices.invoices,
  }));
  const { addState } = useSelector((state) => ({
    addState: state.invoices.currentState.isAdd,
  }));
  const { data } = useSelector((state) => ({
    data: state.invoices,
  }));
  //  const editInvoicesId = useSelector((state) => state.invoices.editInvoicesId);
  // console.log("store data",data.editInvoicesData)
  
 
const optionGroup = invoices.map(d => ({
  "value" : d.ID,
  "label" : d.Name
}))
  const pageOptions = {
    //page columan and rows  decrartion
    sizePerPage: 15,
    totalSize: invoices.length, // replace later with size(users),
    custom: true,
  };

  const defaultSorted = [
    {
      dataField: "id", // if dataField is not match to any column you defined, it will be ignored.
      order: "desc", // desc or asc
    },
  ];

  const selectRow = {
    mode: "checkbox",
  };
  let myInlineStyle={
        marginTop:'-10px'
 }
 
  const invoicesListColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      formatter: (cellContent, invoices) => <>{invoices.ID}</>,
    },
    
    {
      text: "Name On Menu", //item name
      dataField: "NameOnMenu",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.NameOnMenu}</>,
    },

    {
      text: "Description", //Amount
      dataField: "Description",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.Description}</>,
    },
    {
      text: "DisplayIndex", //Amount
      dataField: "DisplayIndex",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.DisplayIndex}</>,
    },
    {
      text: "DefaultModuleID", //Amount
      dataField: "DefaultModuleID",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.DefaultModuleID}</>,
    },
    {
      text: "ActualPagePath",
      dataField: "ActualPagePath",
      sort: true,
      formatter: (cellContent, invoices) => <>{invoices.ActualPagePath}</>,
    },

   
    {
      text: "Custmise",
      dataField: "Custmise",
      sort: true,
      formatter: (cellContent, invoices) => (
        <>
          <div>
         
            <Button
              type="button"
              onClick={() => {
               
                EditPageHandler(invoices.ID);
              }}
             className="me-2 bg-primary badge badge-secondary"
              data-toggle="modal"
              data-target=".bs-example-modal-lg"
            >
              Edit
            </Button>{" "}
            <Button
             className="me-2 bg-danger badge badge-secondary"
              onClick={() => {
                deleteInvoiceHandeler(invoices.ID);
              }}
            >
              Delete
            </Button>
          </div>
        </>
      ),
    },
  ];

  return ( <React.Fragment>
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumbs */}
      
        <Row>
          <Col lg="12">
            <Card>
              <CardBody style={myInlineStyle}>
                <PaginationProvider
                  pagination={paginationFactory(pageOptions)}
                >
                  {({ paginationProps, paginationTableProps }) => (
                    <ToolkitProvider
                      keyField="id"
                      data={invoices}
                      columns={invoicesListColumns}
                      // selectRow={selectRow}
                      bootstrap4
                      search
                    >
                      {(toolkitProps) => (
                        <React.Fragment>
                          <Row className="mb-2">
                           
                            <Col sm="4">
                              <div className="search-box d-inline-block">
                                <div className="position-relative">
                                  <SearchBar {...toolkitProps.searchProps} />{"              "}
                                  < Button  onClick={()=>AddPageHandler()}>Add</Button>
                                  <i className="bx bx-search-alt search-icon-search" />
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col xl="12">
                              <div className="table-responsive">
                                <BootstrapTable
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                  selectRow={selectRow}
                                  defaultSorted={defaultSorted}
                                  classes={
                                    "table table-bordered table-striped table-nowrap mb-0"
                                  }
                                  responsive
                                  bordered={false}
                                  striped={false}
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row className="align-items-md-center mt-30">
                            <Col className="pagination pagination-rounded justify-content-end mb-2">
                              <PaginationListStandalone
                                {...paginationProps}
                              />
                            </Col>
                          </Row>
                        </React.Fragment>
                      )}
                    </ToolkitProvider>
                  )}
                </PaginationProvider>
              </CardBody>
            </Card>
          </Col>
        
        </Row>
      </Container>
    </div>
  </React.Fragment>
  
  );
};

export default ListPage;
