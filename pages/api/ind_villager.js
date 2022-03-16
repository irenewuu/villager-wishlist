import ax from "axios";

export default async function handler(req, res) {
    // console.log(req.query, req.body)
    console.log(req.query, 'api/ind_villager');

    const {_id} = req.query;
    
    // backend axios call ==================================================================
    // const acnhList = await ax.get(`https://villager-wishlist.herokuapp.com/profile/${_id}`);
    const acnhList = await ax.get(`http://localhost:3000/profile/${_id}`);

    var lists = [];
    console.log(acnhList.data, "ind villager data")
    // query id | for individual villager page =============================================
    if(req.query._id) {
        lists = acnhList.data
    }

    res.status(200).json(lists);
}