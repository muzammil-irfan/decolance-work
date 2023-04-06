import '../../dist/css/gigpost.css'
import { Box, Flex } from '@chakra-ui/react';
import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import GigOverview from './GigOverview';
import GigPostDone from './GigpostDone';
const steps = [
    {
        title: 'Overview',
        content: <GigOverview/>,
    },
    {
        title: 'Pricing',
        content: 'Pricing',
    },
    {
        title: <h1 >Description & FAQ</h1>,
        content: <h1>Description & FAQ</h1>,
    },
    {
        title: 'Requirements',
        content: <h1>Requirements</h1>,
    },
    {
        title: 'Gallery',
        content: <h1>Gallery</h1>,
    },
    {
        title: 'Publish',
        content: <h1>Publish</h1>,
    },
];
const GigPostLayout = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        lineHeight: '100vh',
        textAlign: 'center',
        // color: token.colorTextTertiary,
        // backgroundColor: token.colorFillAlter,
        // borderRadius: token.borderRadiusLG,
        borderLeft: `2px solid ${token.colorBorder}`,
        width: "80%",

    };
    return (
        <>
            <Flex>
                <Box
                    px={10}
                    gap={5}
                >
                    <Steps

                        current={current}
                        className='gigpost_Container_steps'
                        items={items}
                        direction="vertical"
                        responsive={true}
                        size='small'
                        labelPlacement='vertical'
                    />
                </Box>
                <Box
                    style={contentStyle}
                >
                    {steps[current].content}
                </Box>


            </Flex>
            <div
                style={{
                    marginTop: 24,
                }}
            >
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                   <GigPostDone/> 
                    )}
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
            </div>
        </>

    );
};



export default GigPostLayout;