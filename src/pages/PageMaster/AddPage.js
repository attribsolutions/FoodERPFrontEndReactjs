import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  CardHeader,
  Button,
  Label, Input
} from "reactstrap";

import {
  AvForm,
  AvInput,
  AvGroup,
  AvFeedback,
} from "availity-reactstrap-validation";
import queryString from "query-string";
import { useDispatch, connect } from "react-redux";
import { getInvoices } from "../../store/actions";
import {
  postSubModule,
  getPageAcess,
  addPage,
  getDefaultModule,
} from "../../store/PageMaster/Actions";

const AddPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [nameMenu, setNameMenu] = useState(null);
  const [description, setDescription] = useState("");
  const [displayIndex, setDisplayIndex] = useState(null);
  const [moduleId, setModuleId] = useState("");
  const [subModule, setSubModule] = useState("");
  const [actualPagepath, setActualPagepath] = useState("");
  const [pagetype, setPagetype] = useState(0);
  const [pageId, setPageID] = useState("select");
  const [topOfTheDivisionPage, setTopOfTheDivisionPage] = useState(0);
  const [isPageAccess, setIsPageAccess] = useState("");

  const [pageAccess, setPageAccess] = useState([]);

  const edit = props.location.state;
  const EditId = props.invoices.editInvoicesData;

  // console.log("EditId",EditId)
  // console.log("displayIndex",displayIndex)
  useEffect(() => {
    //  if(edit>0)
    //  {
    //    setNameMenu(props.invoices.editInvoicesData.NameOnMenu);
    //    setDescription(props.invoices.editInvoicesData.Description);
    //    setModuleId(props.invoices.editInvoicesData.DefaultModuleID);
    //    setActualPagepath(props.invoices.editInvoicesData.ActualPagePath);
    //   //  alert(props.invoices.editInvoicesData.Description)
    //  }
    dispatch(getDefaultModule());
    dispatch(getPageAcess());

    // dispatch(postSubModule(moduleId.value));
    // if (EditId > 0) {
    //   editMode();
    // setSubModule({value: ( props.ModuleId.SubModuleData.ID), label:(props.ModuleId.SubModuleData.Name)});
    // console.log("moduleId dispatch q ", props.ModuleId.SubModuleData);
    // }
  }, [dispatch]);

  // const DropdownIndicator = (aa) => {
  //   // const { menuIsOpen } = props.selectProps;
  //   if (!edit === undefined) {
  //     setNameMenu("rohit");
  //     dispatch(postSubModule(edit));
  //   } else {
  //     setNameMenu("tejasaaaa");
  //   }
  //   console.log("dropdoun :", aa);
  //   console.log("props :", props);

  //   return <></>;
  // };
  function editMode() {
    const findmModuleId = props.invoices.invoices.find((element) => {
      return element.ID === EditId;
    });
    setModuleId({ value: findmModuleId.ID, label: findmModuleId.Name });
    dispatch(postSubModule(findmModuleId.ID));
  }
  // if (EditId > 0) {
  //   // setSubModule({value: ( props.ModuleId.SubModuleData.ModuleID), label:(props.ModuleId.SubModuleData.Name)});
  // console.log("EditId ", EditId);
  // }
  // {
  //   setModuleId({ value: findmModuleId.ID, label: findmModuleId.Name });
  // }

  const optionGroup = props.ModuleId.DefaultModuleData.map((d) => ({
    value: d.ID,
    label: d.Name,
  }));
  const optionPageId = props.ModuleId.SubModuleData.map((d) => ({
    value: d.ID,
    label: d.Name,
  }));
  const optionSubModule = props.ModuleId.SubModuleData.map((d) => ({
    value: d.ID,
    label: d.Name,
  }));
  const optionPageAccess =
    props.ModuleId.PageAccessData.map((d) => ({
      value: d.ID,
      label: d.Name,
    }));

  function handleSelectGroup(selectID) {
    setModuleId(selectID);
    dispatch(postSubModule(selectID.value));
  }

  function AddPageAccess() {
    if (pageAccess.value != isPageAccess) {
      setPageAccess([...pageAccess, isPageAccess]);
    } else {
      setPageAccess([...pageAccess, isPageAccess]);
    }
  }

  const handleValidSubmit = (event, values) => {


    const requestOptions = {
      body: JSON.stringify({
        NameOnMenu: values.NameOnMenu,
        Description: values.Discription,
        DisplayIndex: pagetype,
        DefaultModuleID: moduleId.value,
        DefaultSubModuleID: subModule.value,
        ActualPagePath: values.ActualPagepath,
        PageType: pagetype,
        IsTopOfTheDivisionPage: topOfTheDivisionPage,
        PageAccess: pageAccess.map((d) => ({
          PageAccessNamesID: d.value,
        })),
      }),
    };

    dispatch(addPage(requestOptions.body));
    history.push("/listPage");
  };


  console.log("props", props)
  const BackPageNave = () => {
    history.push("/listPage");
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h4 className="card-title">Add Page</h4>
                </CardHeader>
                <CardBody>
                  <AvForm
                    onValidSubmit={(e, v) => {
                      handleValidSubmit(e, v);
                    }}
                  >
                    <AvGroup>
                      <Row className="mb-4">
                        <Label className="col-sm-3 col-form-label">
                          Name On Menu
                        </Label>
                        <Col sm={4}>
                          <AvInput
                            name="NameOnMenu"
                            placeholder=""
                            value={nameMenu}
                            place
                            required
                          />
                          <AvFeedback>Requred Name On Menu !</AvFeedback>
                        </Col>
                      </Row>{" "}
                    </AvGroup>
                    <AvGroup>
                      <Row className="mb-4">
                        <Label
                          htmlFor="horizontal-password-input"
                          className="col-sm-3 col-form-label"
                        >
                          Discription
                        </Label>
                        <Col sm={4}>
                          <AvInput
                            name="Discription"
                            value={description}
                            required
                          />
                          <AvFeedback> Requred Display Index !</AvFeedback>
                        </Col>
                      </Row>{" "}
                    </AvGroup>
                    <AvGroup>
                      <Row className="mb-4">
                        <Label
                          htmlFor="horizontal-password-input"
                          className="col-sm-3 col-form-label"
                        >
                          Display Index
                        </Label>
                        <Col sm={4}>
                          <Input
                            type="number"
                            name="DisplayIndex"
                            value={displayIndex}
                            required
                            onChange={(v) => { setDisplayIndex(v.target.value); }}
                          />
                          <AvFeedback>Requred Display Index!</AvFeedback>
                        </Col>
                      </Row>{" "}
                    </AvGroup>
                    <Row className="mb-4">
                      <Label className="col-sm-3 col-form-label">
                        DefaultModuleID
                      </Label>
                      <Col sm={4}>
                        {" "}
                        <Select
                          value={moduleId}
                          options={optionGroup}
                          onChange={(e) => {
                            handleSelectGroup(e);
                          }}
                          required
                        />
                      </Col>
                    </Row>{" "}
                    <Row className="mb-4">
                      <Label className="col-sm-3 col-form-label">
                        Default Sub Module
                      </Label>
                      <Col sm={4}>
                        {" "}
                        <Select
                          value={subModule}
                          required
                          options={optionSubModule}
                          onChange={(e) => {
                            setSubModule(e);
                          }}
                        />
                      </Col>
                    </Row>
                    <AvGroup>
                      <Row className="mb-4">
                        <Label className="col-sm-3 col-form-label">
                          Actual Page path
                        </Label>
                        <Col sm={4}>
                          <AvInput
                            type="text"
                            value={actualPagepath}
                            name="ActualPagepath"
                            required
                            className="form-control"
                          />
                        </Col>
                      </Row>
                    </AvGroup>
                    <Row className="mb-2">
                      <Label
                        className="col-sm-3 col-form-label"
                        htmlFor="horizontal-password-inputk"
                      >
                        Page type
                      </Label>
                      <Col sm={4}>
                        <AvInput
                          type="checkbox"
                          value={pagetype}
                          name="Pagetype"
                          onSelect={() => {
                            if (pagetype === 1) { setPagetype(0) } else { setPagetype(1) }
                          }}
                          className="form-control"
                          id="horizontal-customCheck"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Label className="col-sm-3 col-form-label">page ID</Label>
                      <Col sm={4}>
                        {" "}
                        <Select
                          value={pageId}
                          required
                          options={optionPageId}
                          onChange={(e) => {
                            setPageID(e);
                          }}
                          classNamePrefix="select2-selection"
                        />
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Label
                        className="col-sm-3 col-form-label"
                        htmlFor="horizontal-password-inputk"
                      >
                        Top Of the Division Page
                      </Label>
                      <Col sm={4}>
                        <Input
                          name="TopOfTheDivisionPage"
                          value={topOfTheDivisionPage}
                          type="checkbox"
                          className="form-control"
                          onClick={() => { if (pagetype === 1) { setPagetype(0) } else { setPagetype(1) } }}
                        />
                      </Col>
                    </Row>
                    <Row className="mb-3">
                      <Label className="col-sm-3 col-form-label">
                        pageAccess
                      </Label>
                      <Col sm={4}>
                        {" "}
                        <Select
                          value={isPageAccess}
                          // components={{ DropdownIndicator }}
                          required=""
                          options={optionPageAccess}
                          onChange={(e) => setIsPageAccess(e)}
                          classNamePrefix="select2-selection"
                        />
                      </Col>

                      <Col sm={1}>
                        {" "}
                        <Button
                          type="button"
                          color="info"
                          onClick={() =>
                            // setPageAccess([...pageAccess, isPageAccess])
                            AddPageAccess()
                          }
                        >
                          Add
                        </Button>
                      </Col>
                      <Col sm={3}>
                        {pageAccess.length > 0 ? (
                          <div>
                            <div className="table-responsive">
                              <table className="table table-bordered mb-0 table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {pageAccess.map((product) => (
                                    <tr key={product.value}>
                                      <td>
                                        {/* <div class="card-header bg-transparent border-primary"> */}
                                        <h5 className="my-0 text-primary">
                                          <i className="mdi mdi-bullseye-arrow me-3"></i>
                                          {product.label}
                                        </h5>
                                        {/* </div> */}
                                      </td>
                                      <td>
                                        {" "}
                                        <button
                                          type="button"
                                          className="btn btn-danger btn-sm waves-effect waves-light"
                                          onClick={() =>
                                            setPageAccess(
                                              pageAccess.filter(
                                                (item) =>
                                                  item.value !== product.value
                                              )
                                            )
                                          }
                                        >
                                          <i class="mdi mdi-trash-can d-block font-size-10"></i>
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="border border-warning card">
                              <div className="card-header bg-transparent border-warning">
                                <h5 className="my-0 text-warning">
                                  <i className="mdi mdi-bullseye-arrow me-3"></i>
                                  No Page Access Found...!
                                </h5>
                              </div>
                            </div>
                          </>
                        )}
                      </Col>
                    </Row>
                    <Row className="justify-content-end">
                      <Col sm={2}>
                        <div>
                          <button
                            type="submit"
                            className="btn btn-primary w-md"
                          >
                            Submit
                          </button>
                        </div>
                      </Col>{" "}
                      <Col sm={10}></Col>
                    </Row>
                  </AvForm>
                  <div>
                    {/* <button onClick={BackPageNave} type="button">
                      Back To List
                    </button> */}
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
    invoices: state.invoices,
    ModuleId: state.ModuleId,
  };
};

export default connect(mapStateToProps)(AddPage);

