import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prismaClient";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const characters = await prisma.character.findMany({
        where: {
          records: {
            some: {},
          },
        },
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
  }
};
