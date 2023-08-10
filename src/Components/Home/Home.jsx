import { Card, CardContent, Typography } from "@mui/material";

const Home = () => {
    return (<>


        <Typography variant="h3" className="homeh3"> Nimutech Geek Store Tienda De Coleccionables </Typography>
        <div className="cardCont">
        <Card sx={{ width: "330px", height: "230px", margin: "40px", background:"transparent", border:"solid 1px gray" }} className="cardCont">
            <CardContent >
                <Typography variant="h4" color="white" padding={"15px"}> Efectivo </Typography>
                <Typography color="white" padding={"15px"}>Abonando en efectivo tenes un 10% de descuento</Typography>
            </CardContent>
        </Card>

        <Card sx={{ width: "330px", height: "230px", margin: "40px", background:"transparent", border:"solid 1px gray" }} className="cardCont">
            <CardContent >
                <Typography variant="h4" color="white" padding={"15px"}> Tajeta de Debito </Typography>
                <Typography color="white" padding={"15px"}>Abonando en con Debito el precio es el mismo</Typography>
            </CardContent>
        </Card>

        <Card sx={{ width: "330px", height: "230px", margin: "40px", background:"transparent", border:"solid 1px gray" }} className="cardCont">
            <CardContent >
                <Typography variant="h4" color="white" padding={"15px"}> Tarjeta de Credito </Typography>
                <Typography color="white" padding={"15px"}>Abonando en con Credito tiene un 5% de recargo y las cuotas estan sujetas a cada Banco</Typography>
            </CardContent>
        </Card>
        </div>


    </>);
}

export default Home;