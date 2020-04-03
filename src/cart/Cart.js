import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './Cart.css';
class Cart extends Component {
    static defaultProps = {
        id: new Date().getMilliseconds(),
    }
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            }]
        }
    }


    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        );
    }
}

export default Cart;
