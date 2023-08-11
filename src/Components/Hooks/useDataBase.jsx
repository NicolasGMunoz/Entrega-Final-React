import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from 'firebase/firestore'

const useDataBase = (collectionN) =>{
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    // Cargamos el fetch con la promise para traer los datos de firestore

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBase = getFirestore()
                const queryS = await getDocs(collection(dataBase, collectionN))
                const newData = queryS.docs.map((doc)=>({id: doc.id, ...doc.data()}))
                setData(newData);
                setLoading(false)
            }
            catch(error){
                console.error(error);
                setLoading(false);
                setError(true)
            }

        }

        fetchData();

    }, [collectionN])

    return {data, loading}
}
export default useDataBase;