import { Modal, Typography } from "@mui/material";

const Comprobante = ({ cte, abrir, setAbrir, total, cantProduct, ticket ,children }) => {

    const { name, lastname, phone, email, adress} = cte;


    const handleClose = () => {
        setAbrir(prev => !prev)
    }


    return (<>
        <Modal open={abrir} onClose={handleClose}>
            <div className="contenidoComprobante" >
            <div className="numeroTicket"><Typography variant='h6' padding={"15px"}>Comprobante N°: {ticket} </Typography></div>
            <Typography variant='p' padding={"15px"}>Cliente: {name} {lastname} </Typography>
            <Typography variant='p' padding={"15px"}>Telefono: {phone} </Typography>
            <Typography variant='p' padding={"15px"}>Email: {email} </Typography>
            <Typography variant='p' padding={"15px"}>Dirección: {adress} </Typography>
            <Typography variant='p' padding={"15px"}>Productos: {cantProduct} </Typography>
            <Typography variant='p' padding={"15px"}>Monto Pagado: ${total} </Typography>
                
            {children}
            </div>
        </Modal>


    </>);
}

export default Comprobante;