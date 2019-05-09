import React from 'react';
import {Row, Col} from 'antd';
import {Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from "./pc _products";
const TabPane = Tabs.TabPane;

export default class PCNewsContainer extends React.Component {
    render() {

        const settings = {
            dots:true,
            infinite:true,
            speed: 500,
            slidesToShow:1,
            autoplay:true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="/images/carousel_1.jpg"/></div>
                                    <div><img src="/images/carousel_2.jpg"/></div>
                                    <div><img src="/images/carousel_3.jpg"/></div>
                                    <div><img src="/images/carousel_4.jpg"/></div>
                                </Carousel>
                                <PCNewsImageBlock count={6} type='yule' width='390px' cardTitle='娱乐头条' imageWidth='108px'/>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count={20} type="top" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="社会" key="2">
                                <PCNewsBlock count={20} type="shehui" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="3">
                                <PCNewsBlock count={20} type="guoji" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="娱乐" key="4">
                                <PCNewsBlock count={20} type="yule" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="体育" key="5">
                                <PCNewsBlock count={20} type="tiyu" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="科技" key="6">
                                <PCNewsBlock count={20} type="keji" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                        <Tabs class='tabs_product'>
                            <TabPane tab='ReactNews 产品' key={1}>
                                <PCProduct/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count={7} type='keji'  cardTitle='科技新闻' imageWidth='132px'/>
                            <PCNewsImageBlock count={14} type='guoji'  cardTitle='国际新闻' imageWidth='132px'/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}
