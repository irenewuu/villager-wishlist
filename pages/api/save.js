import {Save, Read} from '@/utils/helpers';

export default async function handler(req, res) {
    const {uuid, lists} = req.body;

    await Save(uuid, {lists});
    res.status(200).json("data saved")
  }
  