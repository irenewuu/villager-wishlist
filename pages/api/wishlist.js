import ax from "axios"

export default async function handler(req, res) {
  if(req.method === "GET") {
    const {user, villager, token} = req.query;
    console.log(req.query, "get wishlist reqquery")
    
      try {
          const wishlistVillager = await ax.get(`http://localhost:3000/wishlist?token=${token}`);
          console.log(wishlistVillager.data, "wishlist data")
          var wishlistData = wishlistVillager.data
          res.status(200).send(wishlistData);
      } catch (e) {
        console.log(e, "error")
        res.status(404).json(false);
      }
  }

  if(req.method === "POST") {
    const {token, user, villager} = req.body;
    // console.log(req.body, "wishlist api")

    if(req.body.villager) {
      try {
        const wishlistVillager = await ax.post(`http://localhost:3000/wishlist?token=${token}&villager=${villager}`, {token, villager});
        console.log(wishlistVillager.data, "data added to wishlist")
        res.status(200).send(wishlistVillager.data);
        
      } catch(e) {
        console.log(e, "error")
        res.status(500).send(false)
      }   
    }
  } 

  if(req.method === "DELETE") {
    const {token, user, villager} = req.query;
    console.log(req.query, "delete req.method req query")

    try {
      const wishlistVillager = await ax.delete(`http://localhost:3000/wishlist?token=${token}&villager=${villager}`, {token, villager});
      console.log(wishlistVillager, "data deleted from wishlist")
      res.status(200).send(wishlistVillager.data)
    } catch(e) {
      console.log(e, "error")
      res.status(500).json(false);
    }
}
}
  