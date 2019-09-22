import React from "react";
import { Form, Row, Col, Input, Button } from 'antd';

class AdvancedSearchForm extends React.Component {
    state = {
        expand: false,
    };

    // To generate mock Form.Item
    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        for (let i = 0; i < 12; i++) {
            children.push(
                <Col span={6} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ],
                        })(<Input placeholder="placeholder" />)}
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-3"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-2"><Form.Item><Input placeholder="placeholder" /></Form.Item></div>
                </div>
                <div style={{ display: "flex", justifyContent: 'flex-end' }}>
                    <Button type="primary">Enviar</Button>
                </div>
            </Form>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'advanced_search' })(AdvancedSearchForm);

export default WrappedAdvancedSearchForm;