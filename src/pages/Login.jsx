import { Button, Form, Input } from 'antd'
import 'antd/dist/antd.min.css'
import './pages.css'
import styled from 'styled-components'

const Line = styled.div`
  height: 1px;
  width: 96%;
  margin-left: 2%;
  background-color: black;
  margin-bottom: 10px;
`

function Login() {
  return (
    <div className='background'>
      <div className='login-box'>
        <Form style={{ marginLeft: '7%', width: '86%' }}>
          <Form.Item rules={[{ required: true, message: "Please input your username!" }]}>
            <Input placeholder='Enter Username' size='large'/>
          </Form.Item>
          <Form.Item>
            <Input.Password placeholder="Enter Password" size='large'/>
          </Form.Item>
          <Button type='primary' style={{ marginLeft: '20%', marginBottom: '6px', width: '60%' }}>
            Đăng nhập
          </Button>
          <div style={{ textAlign: 'center', marginBottom: '16px' }} >
            <a href='recover'>Quên mật khẩu</a>
          </div>
          <Line />
          <Button
            type='primary'
            style={{ backgroundColor: 'green', marginLeft: '20%', width: '60%' }}
          >
            Tạo tài khoản
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default Login