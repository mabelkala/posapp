import React, {useState} from 'react'
import { Navbar,NavItem,Nav,Container, NavbarBrand ,NavbarToggler, NavLink ,Collapse} from "reactstrap"



const Header = () => {
    const [show,setShow] = useState(false);
    const handleToggle = () => setShow (!show)
    return (
     <Navbar className= "bg-secondary">
         <Container>
             <NavbarBrand>Point of sales</NavbarBrand>
             <NavbarToggler color= "light" onClick={handleToggle}/>
             <Collapse isOpen={show}>
            <Nav>
            <NavLink>
                 <NavItem>Dashboard</NavItem>
            </NavLink>
           <NavItem>
           <NavLink>Add Item</NavLink>
             </NavItem>
         </Nav>
         </Collapse>
         </Container>
         </Navbar>      
        
    )
}

export default Header