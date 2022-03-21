import ax from "axios"

export default async function handler(req, res) {
  if(req.method === "GET") {
    const {user, villager} = req.query;
    console.log(req.query, "get wishlist reqquery")
    
    // if(req.query.user) {
      try {
        // setTimeout(async()=>{
          const wishlistVillager = await ax.get(`http://localhost:3000/wishlist?user=${user}`);
          console.log(wishlistVillager.data, "wishlist data")
          var wishlistData = wishlistVillager.data
          res.status(200).send(wishlistData);

        // }, 200)
      } catch (e) {
        console.log(e, "error")
        res.status(500).json(false);
      }
    // }
  }

  if(req.method === "POST") {
    const {token, user, villager} = req.body;
    // console.log(req.body, "wishlist api")

    if(req.body.villager) {
      try {
        const wishlistVillager = await ax.post(`http://localhost:3000/wishlist?user=${user}&villager=${villager}`, {user, villager});
        console.log(wishlistVillager.data, "data added to wishlist")
        res.status(200).send(wishlistVillager.data);
        
      } catch(e) {
        console.log(e, "error")
        res.status(500).send(false)
      }   
    }
  } 

  if(req.method === "DELETE") {
    const {user, villager} = req.query;
    console.log(req.query, "delete req.method req query")

    if(req.query.user) {
      try {
        const wishlistVillager = await ax.delete(`http://localhost:3000/wishlist?user=${user}&villager=${villager}`, {user, villager});
        console.log(wishlistVillager.data, "data deleted from wishlist")
        res.status(200).send(wishlistVillager.data)
      } catch(e) {
        console.log(e, "error")
        res.status(500).json(false);
      }
    }
  }
}
  