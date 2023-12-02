import axios from "./Api";

// get student

// export async function getStudent(){
//     const {data} = await axios.get('/')
//     return data;
// }

export async function getProduct(){
    const {data} = await axios.get('/')
    return data;
}

export async function addProduct(pdata){
    const {data} = await axios.post('/productadd', pdata);
    return data;
}

export async function deleteProduct(id){
    
    const data = await axios.delete(`/${id}`);
    return data;
}

export async function updateProduct(updatedata){
    
    const data = await axios.put('/updateproduct', updatedata);
    return data;
}