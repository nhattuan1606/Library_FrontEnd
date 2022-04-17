import styled from "styled-components"
import { useState } from "react"
import { Menu, Button } from "antd"
import { Link } from "react-router-dom"
import { 
  LoginOutlined, 
  HomeOutlined, 
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons'

const MenuBox = styled.div`
  width: 200px;
  position: absolute;
  left: 1%;
  margin-top: 6px;
`

function GuestMenu() {
  const [ hideMenu, setHideMenu ] = useState(true)

  const handleOpenMenu = () => {
    setHideMenu(prev => !prev)
  }

  return (
    <MenuBox>
      <Button
        type='primary'
        onClick={handleOpenMenu}
        size='large'
        style={{ marginLeft: '7%', position: 'relative', top: '0px', marginBottom: '20px' }}
      >
        {hideMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        theme='dark'
        inlineCollapsed={hideMenu}
        mode='inline'
        selectedKeys='/'
      >
        <Menu.Item key='/' icon={<HomeOutlined />} >
          <Link to="/" >Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key='5' icon={<LoginOutlined />} >
          <Link to='/login'>Đăng xuất</Link>
        </Menu.Item>
      </Menu>
    </MenuBox>
  )
}

export default GuestMenu