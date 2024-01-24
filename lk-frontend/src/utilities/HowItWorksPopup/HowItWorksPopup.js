import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
// import VideoPlayer from "../VideoPlayer";
import classes from "../HowItWorksPopup/HowItWorksPopup.module.scss";
import PlayButtonIcon from "../../icons/playbuttonicon";
import HowDoesItWorkButton from '../../icons/HowDoesItWorkButton';
// import VideoPlayer from "../VideoPlayer/VideoPlayer";
import HowDoesItWorksVideoPlayer from "../HowItWorksVideoPlayer/HowDoesItWorksVideoPlayer";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

const HowDoesItWorkPopup = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
      return (
          <React.Fragment>
            <div variant="outlined" onClick={handleClickOpen} style={{display:'flex', gap:'30px'}} className={classes.buttonWrapper}>
            <HowDoesItWorkButton/>
            </div>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogTitle sx={{ m: 0, p: 1 , fontSize:'30px' ,fontWeight:'bold' }} id="customized-dialog-title">
                How Does It Work
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[800],
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent sx={{ width:550, height: 305 }} dividers>
                <HowDoesItWorksVideoPlayer/>
              </DialogContent>
            </BootstrapDialog>
          </React.Fragment>

    );
}

export default HowDoesItWorkPopup;