import React, { Component } from 'react';
import './Login.css';
import { Form, Input, Button, message } from 'antd';
import logo from '../../assets/images/logo.png';

const FormItem = Form.Item;

class Login extends Component {
  constructor() {
    super();
    this.state = {}
  };

  handleSubmit = (e) => {
    e.preventDefault(); // 阻止时间冒泡
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success('登录成功');
        // this.context.router.push({ pathname : '/')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-content">
          <div className="logo"> <img src={logo} alt="logo"/> <p>登录知乎，发现更大的世界</p></div>
          <Form className="login-form" onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入手机号!' }],
              })(
                <Input placeholder="手机号" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input type="password" placeholder="密码" />
              )}
            </FormItem>
            <FormItem>
              <div className="login-aside">
                <span>手机号登录</span>
                <a href="/">忘记密码</a>
              </div>
              <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
            </FormItem>
          </Form>
          <div className="goToRegister">没有账号？<a href="/">注册</a></div>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login);