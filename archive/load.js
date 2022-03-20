import {Save, Read} from '../utils/helpers';

export default async function handler(req, res) {
    const {token} = req.query;
    
    try {
        // const json = await import(`../../saves/${token}.json`);
        res.status(200).json(json.default);
    } catch (e) {
        res.status(200).json(false)
    }
  }
  