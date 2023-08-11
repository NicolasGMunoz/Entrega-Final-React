import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProductsD = ({ product }) => {
    const {id, name, price, descripcion, stock, image} = product;
    const { addCart } = useContext(CartContext)


    return ( <Grid item sx={12} sm={6} md={4} lg={3} className="cardCont">
            <Card  sx={{margin: "40px", background:"transparent", border:"solid 1px gray"}}>
                <img className="productsCardImg" src={image}/>
                <CardContent>
                    <Typography variant='h6' color="white" padding={"15px"}>{name}</Typography>
                    <Typography variant='h6' color="white" padding={"15px"}>{`$${price}`}</Typography>
                    <Typography variant='p' color="white" padding={"15px"}>{descripcion}</Typography>
                    <Typography variant='h6' color="white" padding={"15px"}>{`Stock ${stock}`}</Typography>
                    <Button sx={{color:"rgb(169, 165, 165)"}} onClick={()=> addCart(product)} >Agregar al Carrito</Button>
                </CardContent>

            </Card>
    </Grid> );
}
 
export default ProductsD;