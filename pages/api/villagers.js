import { filtering } from './../../utils/func'
import acnh from './../../utils/ac-villagers.json'
import { usePersonality } from '../../utils/provider';

export default async function handler(req, res) {
    console.log(req.query, req.body)
    const {txt, name, personality, gender} = req.query;
    // const {personalityFilter, setPersonalityFilter} = usePersonality();

    var lists = [];

    if(txt) {
        lists = filtering(acnh, {
            name: txt,
            personality: personality


        })
    }

    lists = lists.slice(0,50);
    res.status(200).json(lists);
}