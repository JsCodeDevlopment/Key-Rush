export interface playerRecords {
  id: number
  combo: number
  score: number
}

export interface character {
  id: number;
  name: string;
  gender: string;
  pictureName: string;
  records: playerRecords[]
}