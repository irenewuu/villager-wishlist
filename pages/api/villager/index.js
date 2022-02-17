import acnh from '../../../utils/ac-villagers.json'

export default async function handler(req, res) {
    
    // https://dev.to/codymjarrett/understanding-how-api-routes-work-in-next-js-50fm
    const { method } = req;
    // assign an _id to every villager
    const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))
    
    if(method === "GET") {
        res.status(200).json(acnhList);
    }

}