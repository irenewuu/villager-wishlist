import { filtering, GoToPage } from './../../utils/func'
import ax from "axios";
import acnh from './../../utils/ac-villagers.json'

export default async function handler(req, res) {
    // console.log(req.query, req.body)
    const {txt, name, personality, hobby, gender} = req.query;

    // console.log(personality + "api")
    console.log(req.query, 'api/villagers')
    // assign an _id to every villager
    const acnhList = await ax.get("https://villager-wishlist.herokuapp.com/search");
    // const acnhList = await ax.get("http://localhost:3000/search");
    // const acnhList = acnh.map((o, _id) => Object.assign(o, { _id }))

    var lists = [];

    // search filtering =========================
    if(txt) {
        lists = filtering(acnhList.data, {
            name: txt,
            personality: personality,
            hobby: hobby,
            gender: gender
        })
    } 
    // end of search filtering ==================

    // pagination ===============================
    if(req.query.page) {
        const numresults = req.query.num || 10;
        lists = GoToPage(req.query.page, acnhList.data, numresults);
    }
    // end of pagination =========================


    // individual villager page ==================
    // if(req.query.id) {
    //     lists = acnhList.filter(o=>o._id === Number(req.query.id))
    // }
    // end of individual villager page ===========
    
    lists = lists.slice(0,10);
    res.status(200).json(lists);
}