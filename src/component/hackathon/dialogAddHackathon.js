// 添加黑客松对话框
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
          <TextField
            margin="dense"
            id="name"
            label="名称"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="sponsor"
            label="主办方"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="intro"
            label="赛事介绍"
            fullWidth
            variant="outlined"
            multiline
          />
          <TextField
            margin="dense"
            id="start_date"
            label="开始时间"
            type="date"
            variant="outlined"
            fullWidth
            defaultValue={moment().format('YYYY-MM-DD')}
          />
          <TextField
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
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleClose}>提交</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}