import useDataBase from "../Hooks/useDataBase";
import { Grid, Typography } from "@mui/material";
import ProductsD from "./ProductsD";



const ProductList = () => {

    const { data, loading } = useDataBase("products")


    return (<>

        {loading ?
            <h1>Cargando....</h1> :
            (
                <div className='cont'>
                    <Typography variant='h3' sx={{ color: "white" }}>Productos</Typography>
                    <Grid container spacing={3}>
                        {
                            data.map((product)=>{
                                return <ProductsD key={product.id} product={product}/>
                            })
                        }
                    </Grid>

                </div>
            )
        }


    </>);
}

export default ProductList;