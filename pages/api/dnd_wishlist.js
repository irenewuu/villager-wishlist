import ax from "axios"

export default async function handler(req, res) {
  if(req.method === "GET") {
    const {token} = req.query;    

    try {
      const wishlistVillager = await ax.get(`https://villager-wishlist.herokuapp.com/wishlist?token=${token}`);
      var wishlistData = wishlistVillager.data
      res.status(200).send(wishlistData);
    } catch (e) {
      console.log(e, "error")
      res.status(404).json(false);
    }
  }

  if(req.method === "POST") {
    const {token, villager} = req.body;

    if(req.body.villager) {
      try {
        const wishlistVillager = await ax.post(`https://villager-wishlist.herokuapp.com/wishlist?token=${token}&villager=${villager}`, {token, villager});
        res.status(200).send(wishlistVillager.data);
        
      } catch(e) {
        console.log(e, "error")
        res.status(500).send(false)
      }   
    }
  } 

  if(req.method === "DELETE") {
    const {token, villager} = req.query;

    try {
      const wishlistVillager = await ax.delete(`https://villager-wishlist.herokuapp.com/wishlist?token=${token}&villager=${villager}`, {token, villager});
      res.status(200).send(wishlistVillager.data)
    } catch(e) {
      console.log(e, "error")
      res.status(500).json(false);
    }
}
}
  