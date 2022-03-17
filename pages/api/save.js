import {Save, Read} from '../../utils/helpers';

export default async function handler(req, res) {

  if(req.method === "POST") {
    const {user, villager} = req.body;
    console.log(user, villager, "save")
    await Save(user, villager);
    res.status(200).json("data saved")
  }
  }
  