// 个人信息页面
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './mine.css'

export default function AccountInfo() {
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
        <Dialog >
            <DialogContent>
            <TextField
                margin="dense"
                id="name"
                label="昵称"
                fullWidth
                variant="outlined"
                defaultValue={this.props.name}
            />
            <TextField
                margin="dense"
                id="area"
                label="来自国家/地区"
                fullWidth
                variant="outlined"
                defaultValue={this.props.area}
            />
            <TextField
                margin="dense"
                id="phone"
                label="手机"
                fullWidth
                variant="outlined"
                defaultValue={this.props.phone}
            />
            <TextField
                margin="dense"
                id="email"
                label="邮箱"
                variant="outlined"
                fullWidth
                type="email"
                defaultValue={this.props.email}
            />
            <TextField
                margin="dense"
                id="role_wanted"
                label="希望担任的角色"
                fullWidth
                variant="outlined"
                multiline
                defaultValue={this.props.role_wanted}
            />
            </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>取消</Button>
            <Button onClick={handleClose}>提交</Button>
          </DialogActions>
          </Dialog>
    </div>
  )
}