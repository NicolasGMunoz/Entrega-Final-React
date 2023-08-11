import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import nimutech from '../../Assets/nimutech100.jpg'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


const Navbar = () => {
    const {cart} = useContext(CartContext)

    return (<>

        <AppBar position='static'>

            <Toolbar className='bc'>
                <NavLink to="/">
                    <img className='imagen' src={nimutech} alt="" />
                </NavLink>
                <div className='buricho'>
                <NavLink to="/">
                    <Typography className='botones' sx={{margin: "5%"}}>Home</Typography>
                </NavLink>
                <NavLink to="/products" >
                    <Typography className='botones' sx={{margin: "5%"}}>Productos</Typography>
                </NavLink>
                <NavLink to="/categories">
                    <Typography className='botones' sx={{margin: "5%"}}>Categorias</Typography>
                </NavLink>
                </div>

                <Button sx={{color: "white"}} component={NavLink} to="/cart"><ShoppingCartIcon/>{cart.items.length}</Button>

            </Toolbar>
        </AppBar>

    </>);
}

export default Navbar;