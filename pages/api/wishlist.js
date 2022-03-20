import ax from "axios"

export default async function handler(req, res) {

  if(req.method === "POST") {
    const {token, user, villager} = req.body;
    // console.log(req.body, "wishlist api")

    if(req.body.villager) {
      try {
        const acnhList = await ax.post(`http://localhost:3000/wishlist?user=${user}`, {user, villager});
      } catch(e) {
        console.log("error: ", e)
      }
      
      // await Save(user, villager);
      // res.status(200).json("data saved")
      console.log({user, villager}, "save to wishlist")
      res.status(200).send({ user, villager });
    }
  } 
  
  if(req.method === "GET") {
    const {user} = req.query;
    // console.log(req.query, "wishlist api")

    try {
      const acnhList = await ax.get(`http://localhost:3000/wishlist?user=${user}`);
      console.log(acnhList.data, "my data..??????")
      var wishlistData = acnhList.data
      res.status(200).json(wishlistData);
    } catch (e) {
      console.log("error: ", e)
      res.status(200).json(false);
    }
  }

  if(req.method === "DELETE") {
    const {user, villager} = req.body;
    console.log(req.body, "delete wishlist api")

    if(req.body.villager) {
      try {
        const acnhList = await ax.delete(`http://localhost:3000/wishlist?user=${user}&villager=${villager}`, {villager});
        console.log({user, villager}, "delete data?")
      } catch(e) {
        console.log("error: ", e)
      }
      console.log({user, villager}, "delete from wishlist")
      res.status(200).send(villager)
    }
    console.log("is this function even running")
  }


  
}
  