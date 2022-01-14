// 我的 页面的垂直导航栏，需要传入 请求加入队伍的请求列表， 帐号个人信息，用户加入的团队
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MessageCenter from './messageCenter';
import AccountInfo from './accountInfo';
import MineTeam from './mineTeam';
import { styled } from '@material-ui/styles';
import  './mine.css'


const MyTab = styled(Tab)({
      fontSize: '20px'
});

// 我的 页面， 需要传入申请加入队伍信息列表applyMesssageList, 用户信息accountInfoData, 用户所在的队伍列表teamList
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function MineTabs(props) {
  const [value, setValue] = React.useState(0);
  //const classes1 = styles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        // sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <MyTab label="消息中心" {...a11yProps(0)} />
        <MyTab label="帐号信息" {...a11yProps(1)} />
        <MyTab label="我的团队" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MessageCenter applyMessageList={props.applyMessageList}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountInfo accountInfoData={props.accountInfoData}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MineTeam teamList={props.teamList}/>
      </TabPanel>
    </Box>
  );
}
