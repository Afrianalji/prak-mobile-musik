// Type & Interface Definition
export type GenreType = "Pop" | "Rock" | "Indie" | "Jazz";

export interface SongItem {
  readonly id: string;
  title: string;
  artist: string;
  duration: string;
  genre?: GenreType;
}

// Array of Objects
export const PLAYLIST: SongItem[] = [
  { id: "1", title: "Midnight City", artist: "M83", duration: "4:03", genre: "Indie" },
  { id: "2", title: "Starboy", artist: "The Weeknd", duration: "3:50", genre: "Pop" },
  { id: "3", title: "Bohemian Rhapsody", artist: "Queen", duration: "5:55", genre: "Rock" },
  { id: "4", title: "Fly Me to the Moon", artist: "Frank Sinatra", duration: "2:27", genre: "Jazz" },
];