import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Box from '@mui/material/Box';
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

const CarritoFinal = () => {
    const { cart, removeItemCart, addCteInfo } = useContext(CartContext);

    const [total, setTotal] = useState(0);
    useEffect(() => {
        const suma = () => {
            const montoFinal = cart.items.reduce((i, product) => {
                return i + product.price;
            }, 0);
            setTotal(montoFinal);
        }

        suma();

    }, [cart.items])


    const [cteInfo, setCteInfo] = useState({
        name: cart.buyer.name,
        lastname: cart.buyer.lastname,
        phone: cart.buyer.phone,
        email: cart.buyer.email,
        adress: cart.buyer.adress,
    })

    const cambio = (event) => {
        const { name, value } = event.target;
        setCteInfo((prevCteInfo) => ({
            ...prevCteInfo,
            [name]: value,
        }));
    }

    const enviarCambio = (event) => {
        event.preventDefault();
        addCteInfo(cteInfo);
    }



    return (<>

        <div>
            {cart.items.length === 0 ? (
                <Typography variant="h3" color="white" align="center">Carrito vacio, porfavor ingrese al menos un producto</Typography>
            ) : (

                <div className="car-cart">

                    <div>
                    {cart.items.map((product, index) => (
                        <div key={index}>
                            <Card sx={{ margin: "40px", background: "transparent" }}>
                                <CardContent>
                                    <div className="hola">
                                        <Typography variant='p' color="white" padding={"15px"}>{product.name} Precio: ${product.price}</Typography>
                                        <Button variant="outlined" onClick={() => removeItemCart(product)}>
                                            Eliminar
                                        </Button>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>
                    ))}
                    </div>
                    
                    <Card sx={{ margin: "40px", background: "white"}}>
                        <CardContent>
                        <form onSubmit={enviarCambio} >
                        <div className="hola">
                            <TextField
                                label="Nombre"
                                name="name"
                                value={cteInfo.name}
                                onChange={cambio}
                                margin="normal"
                            />
                            <TextField
                                label="Apellido"
                                name="lastname"
                                value={cteInfo.lastname}
                                onChange={cambio}
                                margin="normal"
                            />
                            <TextField
                                label="Teléfono"
                                name="phone"
                                value={cteInfo.phone}
                                onChange={cambio}
                                margin="normal"
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={cteInfo.email}
                                onChange={cambio}
                                margin="normal"
                            />
                            <TextField
                                label="Direccion"
                                name="adress"
                                value={cteInfo.adress}
                                onChange={cambio}
                                margin="normal"
                            />
                        </div>
                    </form>
                        </CardContent>
                    </Card>
                    <Card sx={{ margin: "40px", background: "transparent"}}>
                        <CardContent>
                            <div className="hola"><Typography variant='p' color="white" padding={"15px"}>Cliente: {cteInfo.name} {cteInfo.lastname} </Typography></div>
                            <div className="hola"><Typography variant='p' color="white" padding={"15px"}>Telefono: {cteInfo.phone} </Typography></div>
                            <div className="hola"><Typography variant='p' color="white" padding={"15px"}>Email: {cteInfo.email} </Typography></div>
                            <div className="hola"><Typography variant='p' color="white" padding={"15px"}>Dirección: {cteInfo.adress} </Typography></div>
                            <div className="hola"><Typography variant='p' color="white" padding={"15px"}>Productos: {cart.items.length}</Typography></div>
                            <div className="hola"><Typography variant='p' color="white" padding={"15px"}>Monto Final: ${total}</Typography></div>
                            <div className="hola"><Button>Comprar</Button></div>
                        </CardContent>
                    </Card>

                </div>

            )}

        </div >


    </>);
}

export default CarritoFinal;