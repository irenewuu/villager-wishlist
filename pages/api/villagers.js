import { filtering, GoToPage } from './../../utils/func'
import acnh from './../../utils/ac-villagers.json'
import ax from "axios";

export default async function handler(req, res) {
    // console.log(req.query, req.body)
    const {txt, name, personality, hobby, gender} = req.query;

    // console.log(personality + "api")
    // console.log(req.query, 'api/villagers')
    // assign an _id to every villager
    // const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))

    let offset = 10
    const acnhList = await ax.get(`http://localhost:3000/search?name=${txt}&offset=${offset}`)

    var lists = acnhList.data;

    // if(txt) {
    //     lists = filtering(acnhList.data, {
    //         name: txt,
    //         personality: personality,
    //         hobby: hobby,
    //         gender: gender
    //     })
    // } 

    if(req.query.page) {
        const numresults = req.query.num || 10;
        lists = GoToPage(req.query.page, acnhList.data, numresults);
    }

    // if(req.query.id) {
    //     lists = acnhList.filter(o=>o._id === Number(req.query.id))
    // }

    
    // lists = lists.slice(0,10);
    res.status(200).json(lists);
}