export const Type: Itab[] = [
    {
      id: 1,
      tab: "video",
    },
    {
      id: 2,
      tab: "channel",
    },
    {
      id: 3,
      tab: "playlist",
    },
    {
      id: 4,
      tab: "movie",
    },
  ];

  interface Itab {
    id: number;
    tab: string;
  }