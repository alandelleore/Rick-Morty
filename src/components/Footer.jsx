import React from 'react'
import '../Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import { amber } from '@mui/material/colors';



const Footer = () => {
  return (
    
    <div className="footer bg-dark">
        <a href="https://github.com/alandelleore" target="_blank" rel="noopener noreferrer"><GitHubIcon className="colum m-4" sx={{ color: amber[500] }} fontSize="large" /></a>
    </div>
    
  )
}

export default Footer