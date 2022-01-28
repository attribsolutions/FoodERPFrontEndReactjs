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
    PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";

//redux
import { useSelector, useDispatch } from "react-redux";

const PagesList = () => {
    const dispatch = useDispatch();
    const { SearchBar } = Search;

   
    useEffect(() => {
    //   const orderlistInitial = {
    //     FromDate: '2022-01-25',
    //     ToDate: '2022-01-25',
    //     CustomerID: 0,
    //     DivisionID: 3
    //   }; 
        dispatch(onGetPages());
    }, [dispatch]);
    const { pages } = useSelector((state) => ({
      pages: state.Pages.pages.data,
    }));
    //const pages=[] ;
//    console.log("bj="+pages);

    const pageOptions = {
        sizePerPage: 15,
        totalSize: pages.length, // replace later with size(users),
        custom: true,
    };

    const defaultSorted = [
        {
            dataField: "ID", // if dataField is not match to any column you defined, it will be ignored.
            order: "desc", // desc or asc
        },
    ];

    // const selectRow = {
    //     mode: "checkbox",
    // };

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
                                                        <Row className="mb-2">
                                                            <Col sm="4">
                                                                <div className="search-box ms-2 mb-2 d-inline-block">
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
                                                                        {...toolkitProps.baseProps}
                                                                        {...paginationTableProps}
                                                                        // selectRow={selectRow}
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

export default PagesList;
