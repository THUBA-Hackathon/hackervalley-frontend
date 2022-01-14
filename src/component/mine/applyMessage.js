import {Input} from "@mui/material";
import Tab from "@mui/material/Tab";
import { title } from "process";
import React from "react"
import './mine.css'
import {makeStyles, styled} from '@material-ui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// 申请加入团队 需要传入 申请者姓名 申请者来自国家 申请者手机 申请者邮箱 申请者想担任的角色
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


export default function ApplyMessage(props){
   const handleAccept = () => {
        // 接受队员
    };
    const handleReject = () => {
        // 拒绝队员
    }

        return(
            <div className="apply_message">
                <div className="message">Hi~{props.applyer_name} 申请加入你的团队</div>
                <div>
                    <div className="applyer_area">
                    <MyTextField
                        margin="dense"
                        id="area"
                        label="来自国家/地区"
                        fullWidth
                        variant="outlined"
                        defaultValue={props.apply_area}
                    />
                    </div>
                    <div className="applyer_name">
                        <MyTextField
                            margin="dense"
                            id="name"
                            label="昵称"
                            fullWidth
                            variant="outlined"
                            defaultValue={props.applyer_name}
                        />
                    </div>
                    <div className="applyer_phone">
                    <MyTextField
                        margin="dense"
                        id="phone"
                        label="手机"
                        fullWidth
                        variant="outlined"
                        defaultValue={props.apply_phone}

                    />
                    </div>
                    <div className="applyer_email">
                    <MyTextField
                        margin="dense"
                        id="email"
                        label="邮箱"
                        variant="outlined"
                        fullWidth
                        type="email"
                        defaultValue={props.apply_email}
                    />

                    </div>
                    <div className="applyer_role">
                    <MyTextField
                        margin="dense"
                        id="role_wanted"
                        label="希望担任的角色"
                        fullWidth
                        variant="outlined"
                        multiline
                        defaultValue={props.apply_role_wanted}
                    />
                    </div>

                    <div className="reject_btn">
                        <MyButton onClick={handleReject.bind(this)} >拒绝</MyButton>
                    </div>
                    <div className="accept_btn">
                        <MyButton onClick={handleAccept.bind(this)} >接受</MyButton>
                    </div>
                </div>

            </div>
        )

}

