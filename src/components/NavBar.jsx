import styled from 'styled-components'
import { useContext } from 'react'
import { Form, Input } from 'antd'
import logo from '../images/logo1.jpg'
import './components.css'
import ReaderMenu from './ReaderMenu'
import GuestMenu from './GuestMenu'
import LibrarianMenu from './LibrarianMenu'
import { Context } from '../hooks/Context'

const NavBarStyle = styled.div`
  display: flex;
  margin-top: 6px;
  height: 50px;
  // justify-content: space-between;
`

function NavBar() {
  const context = useContext(Context)

  return (
    <NavBarStyle>
      { context.role === 0 ? <GuestMenu /> : context.role === 1 ? <ReaderMenu /> : <LibrarianMenu /> }
      <div className='search-box' >
        <Form.Item className='search-box' style={{ width: '100%' }}>
          <Input.Search placeholder="Tìm kiếm" size='large' enterButton />
        </Form.Item>
      </div>
      <img 
        src={logo} 
        alt='logo' 
        height='50px' 
        style={{ position: 'absolute', right: '5%'}}
      />
    </NavBarStyle>
  )
}

export default NavBar