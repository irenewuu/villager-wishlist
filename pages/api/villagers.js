import { filtering, GoToPage } from "./../../utils/func";
import ax from "axios";

export default async function handler(req, res) {
  // console.log(req.query, req.body)
  console.log(req.query, "api/villagers");

  const { txt, personality, hobby, gender, offset, token } = req.query;

  // backend axios call ==================================================================
  // const acnhList = await ax.get("https://villager-wishlist.herokuapp.com/search");
  const acnhList = await ax.get(`http://localhost:3000/search?access_token=${token}`);
  // const acnhList = await ax.get(`http://localhost:3000/search?name=${txt}&offset=${offset}`);
  console.log("Incoming", acnhList.data);
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
