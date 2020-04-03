import React, { Component } from 'react';
import { Card, Button } from 'antd';
class Zhushi extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card
                hoverable
                style={{ width: 240 }}
            >
                <Card.Meta title={this.props.name} description={this.props.description} />
                <h3>{this.props.price}</h3>
                <Button onClick={this.order.bind(this, this.props)}>点餐</Button>
            </Card>
        )
    }
}