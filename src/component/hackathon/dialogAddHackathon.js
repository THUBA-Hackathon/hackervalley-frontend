// 添加黑客松对话框
import {styled} from "@material-ui/styles";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddHackathon from './addHackathon';
import moment from 'moment'


const MyButton = styled(Button)({
    fontSize: '20px'
});

const MyTextField = styled(TextField)({
    // '& label.Mui-focused': {
    //     color: 'green',
    // },
    // '& .MuiInput-underline:after': {
    //     borderBottomColor: 'green',
    // },
    // '& .MuiOutlinedInput-root': {
    //     '& fieldset': {
    //         borderColor: 'blue',
    //     },
    //     '&:hover fieldset': {
    //         borderColor: 'red',
    //     },
    //     '&.Mui-focused fieldset': {
    //         borderColor: 'green',
    //     },
    // },
    '& .MuiInputLabel-root': {
        top: -5,
        fontSize: 30,
    },
    '& .MuiInputBase-input': {
        fontSize: 20,

    },
});

export default function AddDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      // 提交表单
    setOpen(false);
  };

  return (
    <div>
        <div className='add_button' onClick={handleClickOpen}>
            <AddHackathon/>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>发起黑客松</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <MyTextField
            margin="dense"
            id="name"
            label="名称"
            fullWidth
            variant="outlined"
          />
          <MyTextField
            margin="dense"
            id="sponsor"
            label="主办方"
            fullWidth
            variant="outlined"
          />
          <MyTextField
            margin="dense"
            id="intro"
            label="赛事介绍"
            fullWidth
            variant="outlined"
            multiline
          />
          <MyTextField
            margin="dense"
            id="start_date"
            label="开始时间"
            type="date"
            variant="outlined"
            fullWidth
            defaultValue={moment().format('YYYY-MM-DD')}
          />
          <MyTextField
            margin="dense"
            id="end_date"
            label="结束时间"
            type="date"
            variant="outlined"
            fullWidth
            defaultValue={moment().format('YYYY-MM-DD')}
          />

        </DialogContent>
        <DialogActions>
          <MyButton onClick={handleClose}>取消</MyButton>
          <MyButton onClick={handleClose}>提交</MyButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
