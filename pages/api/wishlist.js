import ax from "axios"

export default async function handler(req, res) {

  if(req.method === "POST") {
    const {token, user, villager} = req.body;
    // console.log(req.body, "wishlist api")

    if(req.body.villager) {
      try {
        const acnhList = await ax.post(`http://localhost:3000/wishlist?user=${user}&villager=${villager}`, {user, villager});
        console.log({user, villager}, "save to wishlist")
        res.status(200).send({ user, villager });
      } catch(e) {
        console.log(e, "error")
        res.status(500).send(false)
      }
      
    }
  } 
  
  if(req.method === "GET") {
    const {user, villager} = req.query;
    console.log(req.query, "get wishlist reqquery")

    try {
      const acnhList = await ax.get(`http://localhost:3000/wishlist?user=${user}&villager=${villager}`);
      // console.log(acnhList.data, "wishlist data")
      var wishlistData = acnhList.data
      res.status(200).send(wishlistData);
    } catch (e) {
      console.log(e, "error")
      res.status(404).json(false);
    }
  }

  if(req.method === "DELETE") {
    const {user, villager} = req.query;
    console.log(req.query, "delete req.method req query")

    if(req.query.user) {
      try {
        const acnhList = await ax.delete(`http://localhost:3000/wishlist?user=${user}&villager=${villager}`, {user, villager});
        console.log({user, villager}, "data deleted from wishlist")
        res.status(200).send({ user, villager })
      } catch(e) {
        console.log(e, "error")
        res.status(500).json(false);
      }
    }
    console.log("is this function even running")

    }
  
}
  