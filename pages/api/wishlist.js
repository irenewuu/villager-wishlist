import ax from "axios"

export default async function handler(req, res) {

  if(req.method === "POST") {
    const {token, user, villager} = req.body;
    console.log(req.body, "wishlist api")

    if(req.body.villager) {
      try {
        const acnhList = await ax.post(`http://localhost:3000/wishlist?token=${token}&user=${user}`, {user, villager});
      } catch(e) {
        console.log(e)
      }
      
      // await Save(user, villager);
      // res.status(200).json("data saved")
      console.log({user, villager}, "save to wishlist")
      res.status(200).send({ user, villager });
    }
  } 
  
  // if(req.method === "GET") {
  //   const {user} = req.query;
    
  //   try {
  //     // const villagers = await import(`@/saves/${user}.json`);
  //     res.status(200).json(villagers);
  //   } catch (e) {
  //     res.status(200).json(false);
  //   }
  // }


  
}
  