import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import './Image.css'
import { Typography } from '@mui/material';

function Image(props) {
  return (
    <div className='image-input'>
        <AddIcon className='image-add-icon'/>
        <input type='file' className='custom-file-input' accept='image/*' onChange={(img)=> props.formData.append('img', img.target.files[0])}/>
        <Typography variant='p' className='image-upload-title'>
            {props.title}
        </Typography>
    </div>
  )
}

export default Image