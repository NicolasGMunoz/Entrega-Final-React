import { Card, CardContent, Typography } from '@mui/material';
import useDataBase from '../Hooks/useDataBase';
import { Link } from 'react-router-dom';


const Categories = () => {
    const {data, loading} = useDataBase("categories")

    return (<>
        {loading ?
            <h1>Cargando....</h1> :
            (
                <div className='cont'>
                <Typography variant='h3' sx={{ color: "white" }}>Categorias</Typography>
                <div className='cardCont'>
                    {
                        data.map((category) => {
                            return (<Card key={category.id} sx={{ width: "330px", height: "330px", margin: "40px", background:"transparent", border:"solid 1px gray" }} component={Link} to={`/categories/${category.id}`}>
                                <CardContent>
                                    <img className='cardImage' src={category.imagen} alt={category.category} />
                                    <Typography variant='h6' color="white" padding={"15px"}>{category.category}</Typography>
                                </CardContent>
                            </Card>)
                        })
                    }
                </div>
            </div>
            )
        }



    </>);
}

export default Categories;