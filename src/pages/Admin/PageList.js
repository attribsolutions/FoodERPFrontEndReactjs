import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
} from "reactstrap";

import { getPages as onGetPages } from "../../store/actions";
import Breadcrumbs from "../../components/Common/Breadcrumb";

import paginationFactory, {
    PaginationListStandalone,
    PaginationProvider, SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//redux
import { useSelector, useDispatch } from "react-redux";

const PagesList = () => {
    const dispatch = useDispatch();
    const { SearchBar } = Search;

    useEffect(() => {
        dispatch(onGetPages());
    }, [dispatch]);
    const { pages } = useSelector((state) => ({
        pages: state.Pages.pages.data,
    }));


    const pageOptions = {
        sizePerPage: 15,
        totalSize: pages.length, // replace later with size(users),
        custom: true,
    };

    const defaultSorted = [
        {
            dataField: "ModuleName", // if dataField is not match to any column you defined, it will be ignored.
            order: "desc", // desc or asc
        },
    ];

    const pagesListColumns = [
        {
            text: "PageID",
            dataField: "ID",
            sort: true,
            hidden: true,
            formatter: (cellContent, pages) => <>{pages.ID}</>,
        },
        {
            text: "Name",
            dataField: "Name",
            sort: true,
            formatter: (cellContent, pages) => <>{pages.Name}</>,
        },
        {
            text: "Name On Menu",
            dataField: "NameOnMenu",
            sort: true,
            formatter: (cellContent, pages) => <>{pages.NameOnMenu}</>,
        },
        {
            text: "Module Name",
            dataField: "ModuleName",
            sort: true,
            formatter: (cellContent, pages) => <>{pages.ModuleName}</>,
        },
        {
            text: "Actual Page Path",
            dataField: "ActualPagePath",
            sort: true,
            formatter: (cellContent, pages) => <>{pages.ActualPagePath}</>,
        },
        {
            text: "Download Pdf",
            dataField: "pdf",
            sort: true,
            formatter: () => (
                <>
                    <div>
                        <button
                            type="button"
                            className="btn btn-soft-light btn-sm w-xs waves-effect btn-label waves-light"
                        >
                            <i className="bx bx-download label-icon"></i> Pdf
                        </button>
                    </div>
                </>
            ),
        },
    ];

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Pages List </title>
                </MetaTags>
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Pages Count" breadcrumbItem="Page List" breadcrumbCount={pages.length} />
                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <PaginationProvider
                                        pagination={paginationFactory(pageOptions)}
                                    >
                                        {({ paginationProps, paginationTableProps }) => (
                                            <ToolkitProvider
                                                keyField="id"
                                                data={pages}
                                                columns={pagesListColumns}
                                                bootstrap4
                                                search
                                            >
                                                {toolkitProps => (
                                                    <React.Fragment>
                                                        <Row className="mb-12">
                                                            <Col sm="12">
                                                                <div className="search-box ms-12 mb-12 d-inline-block">
                                                                    <div className="position-relative">
                                                                        <SearchBar {...toolkitProps.searchProps} />
                                                                        <i className="bx bx-search-alt search-icon-search" />
                                                                    </div>
                                                                </div>

                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col xl="12">
                                                                <div className="table-responsive">
                                                                    <BootstrapTable
                                                                        keyField={"id"}
                                                                        responsive
                                                                        bordered={false}
                                                                        striped={false}
                                                                        defaultSorted={defaultSorted}
                                                                        // selectRow={selectRow}
                                                                        classes={
                                                                            "table align-middle table-nowrap"
                                                                        }
                                                                        headerWrapperClasses={"thead-light"}
                                                                        {...toolkitProps.baseProps}
                                                                        {...paginationTableProps}
                                                                    />

                                                                </div>
                                                            </Col>
                                                        </Row>

                                                        <Row className="align-items-md-center mt-30">
                                                            <Col className="inner-custom-pagination d-flex">
                                                                <div className="d-inline">
                                                                    <SizePerPageDropdownStandalone
                                                                        {...paginationProps}
                                                                    />
                                                                </div>
                                                                <div className="text-md-right ms-auto">
                                                                    <PaginationListStandalone
                                                                        {...paginationProps}
                                                                    />
                                                                </div>
                                                            </Col>

                                                        </Row>
                                                        <br></br>

                                                        {/* <Row>
                                                            <Col xl="12">
                                                                <div className="table-responsive">
                                                                    <BootstrapTable
                                                                        {...toolkitProps.baseProps}
                                                                        {...paginationTableProps}
                                                                        
                                                                        defaultSorted={defaultSorted}
                                                                        classes={
                                                                            "table align-middle table-nowrap table-bordered table-sm m-0 table"
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
                                                        </Row> */}
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

export default PagesList;
