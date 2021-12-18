// 我的 页面的垂直导航栏，需要传入 请求加入队伍的请求列表， 帐号个人信息，用户加入的团队
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MessageCenter from './messageCenter';
import AccountInfo from './accountInfo';


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
        <Tab label="消息中心" {...a11yProps(0)} />
        <Tab label="帐号信息" {...a11yProps(1)} />
        <Tab label="我的团队" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <MessageCenter applyMessageList={props.applyMessageList}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountInfo account_name={props.account_name} account_area={props.account_area} account_phone={props.account_phone} account_email={props.account_email} account_role_wanted={props.account_role_wanted}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
