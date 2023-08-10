import { useParams } from "react-router-dom";
import useDataBase from "../Hooks/useDataBase";
import { Grid, Typography } from "@mui/material";
import ProductsD from "../Products/ProductsD";

const CategoryProductList = () => {
    const { categoryId } = useParams();
    const { data, loading } = useDataBase("categories");

    if (loading) return (<div ><h1>Cargando....</h1></div>)
    const category = data.filter(category => category.id === parseInt(categoryId))

    if (!category) return <Typography>Categoria no encontrada</Typography>


    return (<>


        <div className='cont'>

            <Grid>
                {
                    category.map((category) => {
                        return <img className='cardImage' src={category.imagen} alt={category.category} />
                    })
                }
            </Grid>


            <Grid container spacing={3}>
                {
                    category.map((category) => {
                        return category.products.map((product) => {

                            return <ProductsD key={product.id} product={product} />

                        })
                    })
                }
            </Grid>

        </div>



    </>);
}

export default CategoryProductList;