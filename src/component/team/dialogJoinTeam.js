// 加入队伍，填写个人信息
import {styled} from "@material-ui/styles";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './team.css'

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
export default function JoinTeamDialog() {
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
        <div className='join_team_button' onClick={handleClickOpen}>
            <div className="join_btn">我要报名</div>
        </div>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>个人信息</DialogTitle>
        <DialogContent>
          <MyTextField
            margin="dense"
            id="name"
            label="昵称"
            fullWidth
            variant="outlined"
          />
          <MyTextField
            margin="dense"
            id="area"
            label="来自国家/地区"
            fullWidth
            variant="outlined"
          />
          <MyTextField
            margin="dense"
            id="phone"
            label="手机"
            fullWidth
            variant="outlined"
          />
          <MyTextField
            margin="dense"
            id="email"
            label="邮箱"
            variant="outlined"
            fullWidth
            type="email"
          />
          <MyTextField
            margin="dense"
            id="role_wanted"
            label="希望担任的角色"
            fullWidth
            variant="outlined"
            multiline
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
