import { filtering } from './../../utils/func'
import acnh from './../../utils/ac-villagers.json'

export default async function handler(req, res) {
    // console.log(req.query, req.body)
    const {txt, name, personality, gender} = req.query;

    // assign an _id to every villager
    const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))

    var lists = [];

    if(txt) {
        lists = filtering(acnhList, {
            name: txt,
            personality: personality
        })
    }

    if(req.query.id) {
        lists = acnhList.filter(o=>o._id === Number(req.query.id))
    }

    
    lists = lists.slice(0,50);
    res.status(200).json(lists);
}