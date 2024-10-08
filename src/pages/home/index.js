import React from 'react';
import { Grid, Paper, Box, Button } from '@mui/material';
import littleLemonImg from '../../statics/images/little-lemon.jpg';
import Topic from './components/Topic';
import List from './components/List';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleClickBooking = () => {
        navigate('/booking');  // 替换为你想跳转的路由
    };

    return (
        <Grid container spacing={2} style={{
            minHeight: '100vh',
            backgroundSize: 'calc(100% / 12) 100%',
            padding: '20px'
        }} justifyContent="center"> {/* 外层Grid设置 justifyContent="center" 使内容居中 */}

            {/* Main Content 部分 */}
            <Grid container item xs={12} spacing={2} justifyContent="center"> {/* 设置xs={6} */}

                {/* 左边栏 - 包含 Topic 和 List 组件 */}
                <Grid item xs={12} sm={6} md={6}> {/* Paper宽度占用6列 */}
                    <Paper elevation={3} style={{ minHeight: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Box p={2}>
                            <img className='little_lemon_img' src={littleLemonImg} alt="littleLemonImg" style={{ maxWidth: '30%' }} />

                            <Topic />

                            <List />

                            <Grid container item xs={12} spacing={2} style={{justifyContent: "center"}}>
                                <Button variant="contained" color="primary" style={{borderRadius: "20px"}} onClick={handleClickBooking}>Book Now!</Button>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;
