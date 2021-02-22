import needAuth from "../../../src/utils/needAuth"
import getUser from "../../../src/utils/getUser"

export default needAuth(async(req,res) => {
    let {id} = req.query
    if (!id) return res.send(400).end()
    if (id === "@me"){
        id = req.userID
    }
    const userData = await getUser(id)
    return res.json(userData)
})