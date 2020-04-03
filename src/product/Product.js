import React, { Component } from 'react';
import { Card, Button } from 'antd';
import './product.css';
class Product extends Component {
    static defaultProps = {
        id: new Date().getMilliseconds(),
    }
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Card.Meta title="Europe Street beat" description="www.instagram.com" />
                <Button type="primary">Primary</Button>
            </Card>
        );
    }
}

export default { Product };
