import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prismaClient";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const characters = await prisma.character.findMany({
        include: {
          records: {
            orderBy: {
              score: "desc",
            },
            take: 1,
          },
        },
      });
      res.status(200).json(characters);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch characters" });
    }
  } else if (req.method === "POST") {
    try {
      const { name, pictureName, gender } = req.body;
      const newCharacter = await prisma.character.create({
        data: { name, pictureName, gender },
      });
      res.status(201).json(newCharacter);
    } catch (error) {
      res.status(500).json({ error: "Failed to create character" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};
