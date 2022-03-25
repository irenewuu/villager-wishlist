import { filtering, GoToPage } from "./../../utils/func";
import ax from "axios";

export default async function handler(req, res) {
  const { txt, personality, hobby, gender, offset, user, token } = req.query;

  const acnhList = await ax.get(`https://villager-wishlist.herokuapp.com/search?token=${token}`);
  var lists = [];

  // text input filtering | for search page ===============================================
  if (txt) {
    lists = filtering(acnhList.data, {
      name: txt,
      personality: personality,
      hobby: hobby,
      gender: gender,
    });
  } else {
    lists = acnhList.data;
  }

  const numvillagers = lists.length;

  // query page | for pagination =========================================================
  if (req.query.page) {
    const numresults = req.query.num;
    lists = GoToPage(req.query.page, lists, numresults);
  }
  // end of pagination ===================================================================

  // lists = lists.slice(0,10);
  res.status(200).json({ lists, numvillagers });
}
