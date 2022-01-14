// 个人信息页面
import {styled} from "@material-ui/styles";
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './mine.css'

const MyButton = styled(Button)({
    fontSize: '20px',
    left: 400
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

// 需要传入 用户名称 用户国家 手机 邮箱 希望担任的角色
export default function AccountInfo(props) {

  const handleSubmit = () => {
    // 提交表单
  };

  const handleClose = () => {

  };

  return (
    <div className="account_info">
            <MyTextField
                margin="dense"
                id="name"
                label="昵称"
                fullWidth
                variant="outlined"
                defaultValue={props.accountInfoData.account_name}
            />
        <br/>
            <MyTextField
                margin="dense"
                id="area"
                label="来自国家/地区"
                fullWidth
                variant="outlined"
                defaultValue={props.accountInfoData.account_area}
            />
        <br/>
            <MyTextField
                margin="dense"
                id="phone"
                label="手机"
                fullWidth
                variant="outlined"
                defaultValue={props.accountInfoData.account_phone}
            />
        <br/>
            <MyTextField
                margin="dense"
                id="email"
                label="邮箱"
                variant="outlined"
                fullWidth
                type="email"
                defaultValue={props.accountInfoData.account_email}
            />
        <br/>
            <MyTextField
                margin="dense"
                id="role_wanted"
                label="希望担任的角色"
                fullWidth
                variant="outlined"
                multiline
                defaultValue={props.accountInfoData.account_role_wanted}
            />
        <br/>
            {/* <Button onClick={handleClose}>取消</Button> */}
            <MyButton onClick={handleSubmit}>提交</MyButton>
    </div>
  )
}
