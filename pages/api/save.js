import {Save, Read} from '../../utils/helpers';

export default async function handler(req, res) {
    const {token, villager} = req.body;

    await Save(token, {villager});
    res.status(200).json("data saved")
  }
  