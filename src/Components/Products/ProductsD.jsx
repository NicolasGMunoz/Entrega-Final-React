import { Card, CardContent, Grid, Typography } from "@mui/material";

const ProductsD = ({ product }) => {
    const {id, name, price, descripcion, stock, image} = product;


    return ( <Grid item sx={12} sm={6} md={4} lg={3} className="cardCont">
            <Card  sx={{margin: "40px", background:"transparent", border:"solid 1px gray"}}>
                <img className="productsCardImg" src={image}/>
                <CardContent>
                    <Typography variant='h6' color="white" padding={"15px"}>{name}</Typography>
                    <Typography variant='h6' color="white" padding={"15px"}>{`$${price}`}</Typography>
                    <Typography variant='p' color="white" padding={"15px"}>{descripcion}</Typography>
                    <Typography variant='h6' color="white" padding={"15px"}>{`Stock ${stock}`}</Typography>
                </CardContent>

            </Card>
    </Grid> );
}
 
export default ProductsD;