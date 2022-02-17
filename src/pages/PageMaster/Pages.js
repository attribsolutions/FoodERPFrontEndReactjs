import React from 'react'
import { Container } from 'reactstrap'

function Pages() {
    return (
       <React.Fragment>
<Container fluid >
<Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <AvForm
                  onValidSubmit={(e, v) => {
                    handleValidSubmit(e, v);
                  }}
                >
                  <div class="mt-5 mt-lg-4">
                    <div className="mb-3">
                      <AvField
                        name="Name"
                        label="Name"
                        placeholder="Enter Name"
                        value=""
                        type="text"
                      />
                    </div> 
                    <div className="mb-3">
                      <AvField
                        name="NameOnMenu"
                        label="NameOnMenu"
                        placeholder=" Enter Name On Menu"
                        value=""
                        type="text"
                      />
                    </div> 
                    <div className="mb-3">
                      <AvField
                        name="Discription"
                        label="Discription "
                        placeholder=" Enter Discription"
                        value=""
                        type="text"
                      />
                    </div> 
                    <div className='mb-3'>
                        <AvField 
                        name='DisplayIndex'
                        label='DisplayIndex'
                        placeholder=" Enter Display Index"
                        value=""
                        />
                    </div>
                    <div className="mb-3">
                    <Label>DefaultModuleID</Label>
                    <Select
                      value={selectedGroup}
                      required
                      options={optionGroup}
                      onChange={(e) => {
                        handleSelectGroup(e);
                      }}
                      classNamePrefix="select2-selection"
                    />
                  </div>
                    <div className="mb-3">
                      <Label>Actual Page Path</Label>
                      <AvField
                        name="ActualPagePath"
                        type="ActualPagePath"
                        placeholder="Default SubModule ID"
                        type="text"
                      required
                        
                      />
                    </div>
                    <div className="mb-3">
                      <Label>IconName</Label>
                      <AvField
                        name="ActualPagePath"
                        type="ActualPagePath"
                        placeholder="ActualPagePath"
                        value=""
                      />
                       <div className="mb-3">
                      <Label>IconName</Label>
                      <AvField
                        name="ActualPagePath"
                        type="ActualPagePath"
                        placeholder="ActualPagePath"
                        value=""
                        type="checkBox"
                      />
                    </div>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      <Button type="submit" color="primary">
                        Save
                      </Button>{" "}
                      <Button onClick={BackPageNave} color="secondary">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </AvForm>
              </CardBody>
            </Card>
          </Col>
        </Row>
</Container>
       </React.Fragment>
    )
}

export default Pages
