import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prismaClient";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    const character = await prisma.character.findUnique({
      where: { id: parseInt(id as string, 10) },
      include: { records: true },
    });
    if (character) {
      res.json(character);
    } else {
      res.status(404).json({ message: "Character not found" });
    }
  } else if (req.method === "POST") {
    const { combo, score, wps } = req.body;
    const newRecord = await prisma.record.create({
      data: {
        combo,
        score,
        character: { connect: { id: parseInt(id as string, 10) } },
      },
    });
    res.status(201).json(newRecord);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
