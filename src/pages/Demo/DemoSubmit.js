import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
//import Select from "react-select";
//import { Label } from 'reactstrap';
 import {getDemoApi} from '../../store/DemoRedux/actions';


export default function DemoSubmit() {
  const dispatch = useDispatch();



 useEffect(() => {
   dispatch(getDemoApi())
 }, [])
 

 const { data } = useSelector((state) => ({
  data: state.demo.demoData,
}));

 console.log("data",data);


 



  return (
    <React.Fragment>
      <div className="page-content">
        {/* <form>
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
                          // value={moduleId}
                          // options={optionGroup}
                          // onChange={(e) => {
                          //   handleSelectGroup(e);
                          // }}
                          required
                        />
        </div>
        <button>submit</button>
        </form> */}
        
      </div>
    </React.Fragment>
  )
}
