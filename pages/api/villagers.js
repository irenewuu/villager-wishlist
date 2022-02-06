import { filtering } from './../../utils/func'
import acnh from './../../utils/ac-villagers.json'

export default async function handler(req, res) {
    console.log(req.query, req.body)
    const {txt, name, image_url, species, personality, gender, birthday_month, birthday_day, appearances, nh_details} = req.query;

    var lists = [];

    // if(txt) {
        lists = filtering(acnh, {
            personality: txt,
        })
    // } else {
        // lists = filtering(acnh, {
        //     name: txt
        // })
    // }
    lists = lists.slice(0,10);
    res.status(200).json(lists);
}