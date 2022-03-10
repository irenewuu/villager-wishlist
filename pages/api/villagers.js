import { filtering, GoToPage } from './../../utils/func'
import acnh from './../../utils/ac-villagers.json'
import ax from "axios";

export default async function handler(req, res) {
    // console.log(req.query, req.body)
    const {txt, personality, hobby, gender} = req.query;

    // console.log(personality + "api")
    console.log(req.query, 'api/villagers')
    // assign an _id to every villager
    // const acnhList = await ax.get("https://villager-wishlist.herokuapp.com/search");
    // const acnhList = await ax.get("http://localhost:3000/search");
    // const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))

    // let offset = 0
    const acnhList = await ax.get(`http://localhost:3000/search`)

    // var lists = acnhList.data;
    var lists = [];

    if(txt) {
        lists = filtering(acnhList.data, {
            name: txt,
            personality: personality,
            hobby: hobby,
            gender: gender
        })
    } else {
        lists = acnhList.data
    }

    const numvillagers = lists.length;
    
    if(req.query.page) {
        const numresults = req.query.num;
        lists = GoToPage(req.query.page, lists, numresults);
    }
    

    if(req.query.id) {
        lists = acnhList.data.filter(o=>req.query.id === o._id)
    }

    
    // lists = lists.slice(0,10);
    res.status(200).json({lists, numvillagers});
}