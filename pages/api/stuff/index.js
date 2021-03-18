import { art } from "../../../public/data/data";

export default function (req, res) {
  res.status(200).json(art);
}
