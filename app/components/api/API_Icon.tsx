// create API handler for other file to fetch svg content

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default async function getIconSVG(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  const svgcontent = fs.readFileSync(`./public/icons/${name}.svg`, 'utf8');
  res.setHeader('Content-Type', 'image/svg+xml');
  res.status(200).send(svgcontent);
}

