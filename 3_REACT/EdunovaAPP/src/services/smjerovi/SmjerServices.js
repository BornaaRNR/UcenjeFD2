// 1/4 Read od CRUD

import { smjerovi } from "./SmjerPodaci"

async function get(){
    return {data: smjerovi}
}


export default{
    get
}