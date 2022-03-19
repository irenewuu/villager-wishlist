import ax from "axios"

export default async function handler(req, res) {

  if(req.method === "POST") {
    const {token, user, villager} = req.body;
    console.log(req.body, "wishlist api")

    if(req.body.villager) {
      try {
        const acnhList = await ax.post(`http://localhost:3000/wishlist?user=${user}`, {user, villager});
      } catch(e) {
        console.log(e)
      }
      
      // await Save(user, villager);
      // res.status(200).json("data saved")
      console.log({user, villager}, "save to wishlist")
      res.status(200).send({ user, villager });
    }
  } 
  
  if(req.method === "GET") {
    const {user} = req.query;
    console.log(req.query, "wishlist api")

    try {
      const acnhList = await ax.get(`http://localhost:3000/wishlist?user=${user}`);
      console.log(acnhList.data, "my data..??????")
      var wishlistData = acnhList.data
      res.status(200).json(wishlistData);
    } catch (e) {
      res.status(200).json(false);
    }
  }


  
}
  