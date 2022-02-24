import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from "react-select";
import { Card, CardBody, Label } from 'reactstrap';
 import {GetExample} from '../../store/ExamRedux/actions';


export default function Example() {
  const dispatch = useDispatch();



 useEffect(() => {
   dispatch(GetExample())
 }, [])
  const [select1,sertselect1]=useState('')

 const { data } = useSelector((state) => ({
  data: state.Exam.ExamData,
}));

const optionGroup = data.map((d) => ({
  value: d.ItemID,
  label: d.ItemName,
}));


  return (
   
      <React.Fragment>
        <div className="page-content">
          <Card>
            <CardBody>
          <form>
          <div>
            <label>Name</label>
            <input type="text" name='name' value="" placeholder='Enter Name'/>
          </div> 
          <div>
          <label>Last Name</label>
  
          <input type="text" name='lastName' value=""  placeholder="Enter Last Name"/>
          </div>
          <div  className="col-2 mb-3">
            <Label>dropdown</Label>
          <Select
                            value={select1}
                            options={optionGroup}
                            onChange={(e) => {
                              sertselect1(e)
                            }}
                            required
                          />
          </div>
          <button>submit</button>
          </form>
          </CardBody>
          </Card>
        </div>
      </React.Fragment>
    )
  }