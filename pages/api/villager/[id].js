import { filtering } from '../../../utils/func'
import acnh from '../../../utils/ac-villagers.json'

export default async function handler(req, res) {
    // https://dev.to/codymjarrett/understanding-how-api-routes-work-in-next-js-50fm
    const { method } = req;
    
    if(method === "GET") {
        const {id} = req.query;

        // assign an _id to every villager
        const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))

        const villager = acnhList.find((o)=>o._id.toString() === id);
        if(!villager) {
            return res.status(400).json('user not found');
        }
        res.status(200).json(villager);
    }
}