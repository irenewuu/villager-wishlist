import ax from "axios";

export default async function handler(req, res) {
    const {_id, token} = req.query;

    const acnhList = await ax.get(`https://villager-wishlist.herokuapp.com/profile/${_id}?token=${token}`);

    var lists = [];
    // query id | for individual villager page =============================================
    if(req.query._id) {
        lists = acnhList.data
    }

    res.status(200).json(lists);
}