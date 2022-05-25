import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { useProducts } from '../../context/CrudContextProvider';

const SideBarSort = ({state}) => {


  const { fetchByParams } = useProducts();


 if(state==='price'){
   return(<FormControl >

    <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="all"
      name="radio-buttons-group"
      onChange={(e) => fetchByParams(state, e.target.value)}
    >

<FormControlLabel
     value="all"
      control={<Radio color="error" />}
       label="All"   />

      <FormControlLabel
        value="desc"
        control={<Radio color="error" />}
        label="from largest to smallest"
       
      />

      <FormControlLabel
        value="asc"
        control={<Radio color="error" />}
        label="from smallest to largest"
        
      />

    </RadioGroup>
  </FormControl> )
 }else if(state==='category'){
   return(
<FormControl >
      <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        onChange={(e) => fetchByParams(state, e.target.value)}
      >
        <FormControlLabel
         value="all"
          control={<Radio color="error" />}
           label="All"   />

        <FormControlLabel
          value="red"
          control={<Radio color="error" />}
          label="Bed"
         
        />

        <FormControlLabel
          value="Chairs"
          control={<Radio color="error" />}
          label="Chairs"
          
        />

        <FormControlLabel
          value="Tables"
          control={<Radio color="error" />}
          label="Tables"
          
        />
      </RadioGroup>
    </FormControl>
   )
 } else if(state==='made_in'){
   return(
  <FormControl >
  <FormLabel id="demo-radio-buttons-group-label">Country</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="all"
    name="radio-buttons-group"
    onChange={(e) => fetchByParams(state, e.target.value)}
  >
    <FormControlLabel
     value="all"
      control={<Radio color="error" />}
       label="All"   />

    <FormControlLabel
      value="Russia"
      control={<Radio color="error" />}
      label="Russia"
     
    />

    <FormControlLabel
      value="Usa"
      control={<Radio color="error" />}
      label="Usa"
      
    />

    <FormControlLabel
      value="Japan"
      control={<Radio color="error" />}
      label="Japan"
      
    />
  </RadioGroup>
</FormControl>
   )
 } else{

  return(
  <></>
  // <FormControl >

  //   <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
  //   <RadioGroup
  //     aria-labelledby="demo-radio-buttons-group-label"
  //     defaultValue="all"
  //     name="radio-buttons-group"
  //     onChange={(e) => fetchByParams('price', e.target.value)}
  //   >
  //     <FormControlLabel
  //      value="all"
  //       control={<Radio color="error" />}
  //        label="all"   />

  //     <FormControlLabel
  //       value="desc"
  //       control={<Radio color="error" />}
  //       label="from largest to smallest"
       
  //     />

  //     <FormControlLabel
  //       value="asc"
  //       control={<Radio color="error" />}
  //       label="from smallest to largest"
        
  //     />

  //   </RadioGroup>
  // </FormControl>
   )

 }
};

export default SideBarSort;