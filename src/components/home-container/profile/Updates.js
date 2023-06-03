import { Link } from 'react-router-dom'
import { Box, Grid, Typography, Button, Card, Chip } from '@mui/material'
import comment1 from '../../../images/comment1.png'
import comment2 from '../../../images/comment2.png'
import LinearProgress from '@mui/material/LinearProgress'

function Updates({ selectedProfile, section }) {
  return (
    <section>
      <p>All comments from supporters</p>
      <br />
      <br />
      <img src={comment1} alt="comment1" style={{ width: '800px' }} /> <br />
      <br />
      <br />
      <img src={comment2} alt="comment1" style={{ width: '800px' }} /> <br />
    </section>
  )
}

export default Updates
