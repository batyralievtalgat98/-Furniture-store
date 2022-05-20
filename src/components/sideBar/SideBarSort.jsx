import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';

const SideBarSort = ({state}) => {
 if(state==='price'){
   return(<FormControl >

    <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="all"
      name="radio-buttons-group"
      
    >
      <FormControlLabel
       value="all"
        control={<Radio color="error" />}
         label="all"   />

      <FormControlLabel
        value="200"
        control={<Radio color="error" />}
        label="less than 200$"
       
      />

      <FormControlLabel
        value="500"
        control={<Radio color="error" />}
        label="less than 500$"
        
      />

      <FormControlLabel
        value="1000"
        control={<Radio color="error" />}
        label="less than 1000$"
        
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
          value="white"
          control={<Radio color="error" />}
          label="Tables"
          
        />

        <FormControlLabel
          value="rose"
          control={<Radio color="error" />}
          label="Tables"
          
        />
      </RadioGroup>
    </FormControl>
   )
 } else if(state==='country'){
   return(
  <FormControl >
  <FormLabel id="demo-radio-buttons-group-label">Country</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="all"
    name="radio-buttons-group"
    
  >
    <FormControlLabel
     value="all"
      control={<Radio color="error" />}
       label="All"   />

    <FormControlLabel
      value="russia"
      control={<Radio color="error" />}
      label="Russia"
     
    />

    <FormControlLabel
      value="usa"
      control={<Radio color="error" />}
      label="Usa"
      
    />

    <FormControlLabel
      value="japan"
      control={<Radio color="error" />}
      label="Japan"
      
    />
  </RadioGroup>
</FormControl>
   )
 } else{
   return(
  <FormControl >

  <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="all"
    name="radio-buttons-group"
    
  >
    <FormControlLabel
     value="all"
      control={<Radio color="error" />}
       label="all"   />

    <FormControlLabel
      value="200"
      control={<Radio color="error" />}
      label="less than 200$"
     
    />

    <FormControlLabel
      value="500"
      control={<Radio color="error" />}
      label="less than 500$"
      
    />

    <FormControlLabel
      value="1000"
      control={<Radio color="error" />}
      label="less than 1000$"
      
    />
  </RadioGroup>
</FormControl>
   )
 }
};

export default SideBarSort;