import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./Popups.css"
import unstop from "../../assets/Unstop.png"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'transparent',
  // boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="portals">
          <Button href="https://unstop.com/college-fests/media-matrix-2024-international-institute-of-information-technology-naya-raipur-280815" target='_main'>
          <div className="m2">
        <div className="logo">
        <defs style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="10%" style={{ stopColor: '#626262', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#aaa', stopOpacity: 1 }} />
          </linearGradient>
          <img src={unstop} height="90%" width="90%" />
        </defs>
    </div>
  </div>
  </Button>

<Button target="_main" href="https://docs.google.com/forms/d/e/1FAIpQLSea1MAp0Q7H4GvNtn9imjm76R1Up1O17ScLcW_fetqyxGbheg/viewform">
  <div className="m2">
    <div className="logo">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="10%" style={{ stopColor: '#626262', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#aaa', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <h3>FORMS</h3>
    </div>
  </div>
  </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
