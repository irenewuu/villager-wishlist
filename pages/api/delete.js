import ax from "axios"

export default async function handler(req, res) {
  
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
      res.status(200).send({ villager })
    }
    console.log("fuckkkkkkkkkkk")
  


  
}
  