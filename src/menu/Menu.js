import React, { Component } from 'react';
import { Layout, Card, Button, Table, Menu, Row, Col, Badge, Drawer, Input } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined, ShoppingCartOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import './Menu.css';
class CartMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartFood: [],
            visiblie: false,
            collapsed: false
        }
    }

    order(food) {
        this.setState({
            cartFood: [...this.state.cartFood, food]
        });
    }
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    subFood(id) {
        const list = [...this.state.cartFood];
        list.splice(list.findIndex(ele => ele.id === id), 1);
        this.setState({
            cartFood: [...list]
        })
    }

    addFood(food) {
        const list = [...this.state.cartFood];
        list.push(Object.assign({}, food));
        this.setState({
            cartFood: [...list]
        })
    }

    onClose() {
        this.setState({
            visible: false
        })
    }
    showDrawer() {
        this.setState({
            visible: true
        })
    }

    render() {
        const columns = [{
            title: '菜名',
            dataIndex: 'name',
            align: 'center',
            width: '20%'
        },
        {
            title: '数量',
            dataIndex: 'amount',
            align: 'center',
            render: (value, record) => <Input addonBefore={<MinusCircleOutlined onClick={this.subFood.bind(this, record.id)} />}
                addonAfter={<PlusCircleOutlined onClick={this.addFood.bind(this, record)} />} value={value.toString()} />
        },
        {
            title: '价格',
            align: 'center',
            width: '20%',
            dataIndex: 'totalPrice'
        }];
        const { Header, Sider, Content, Footer } = Layout;
        const food = [
            { id: 'mifan', name: '米饭', price: 2, description: '大碗3元，小碗2元', type: '主食' },
            { id: 'mantou', name: '馒头', price: 0.5, description: '每个0.5元', type: '主食' },
            { id: 'miantiao', name: '面条', price: 5, description: '炝锅面', type: '主食' }
        ];

        // 购物车食物分类
        const divideFood = food.map(ele => {
            const obj = Object.assign({}, ele);
            obj.key = obj.id;
            obj.amount = this.state.cartFood.filter(cartEle => cartEle.id === ele.id).length;
            obj.totalPrice = obj.amount * obj.price;
            return obj;
        }).filter(food => food.amount !== 0);

        const totalPrice = this.state.cartFood.reduce((current, next) => {
            return current + next.price;
        }, 0);
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <UserOutlined />
                            <span>主食</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <VideoCameraOutlined />
                            <span>饮料</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <UploadOutlined />
                            <span>热菜</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <UploadOutlined />
                            <span>凉菜</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <UploadOutlined />
                            <span>火爆菜品</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Row>
                            {
                                food.map((ele, index) => {
                                    return (
                                        <Col span={4} key={ele.id}>
                                            <Card
                                                hoverable
                                                style={{ width: 240 }}
                                            // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                            >
                                                <Card.Meta title={ele.name} description={ele.description} />
                                                <h3>{ele.price}</h3>
                                                <Button onClick={this.order.bind(this, ele)}>点餐</Button>
                                            </Card></Col>
                                    )
                                })
                            }
                        </Row>
                    </Content>
                    <Footer>
                        <Row>
                            <Col span={2}>
                                <Badge count={this.state.cartFood.length} showZero={false}>
                                    <Button icon={<ShoppingCartOutlined />} onClick={this.showDrawer.bind(this)}>
                                    </Button>
                                </Badge>
                                <Drawer
                                    title="Basic Drawer"
                                    placement="right"
                                    width={400}
                                    closable={false}
                                    onClose={this.onClose.bind(this)}
                                    visible={this.state.visible}
                                >
                                    <Table columns={columns} dataSource={divideFood} />
                                </Drawer>
                            </Col>
                            <Col span={2}>
                                <h2>{totalPrice}</h2>
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default CartMenu;