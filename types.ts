export interface getExploreDataResults {
  exploreData: exploreData[];
}

export interface exploreData {
  img: string;
  location: string;
  distance: string;
}

export interface cardData {
  img: string;
  title: string;
}

export interface largeCardData {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface dateRange {
  selection: dateSelection;
}

export interface dateSelection {
  endDate: Date;
  key: string;
  startDate: Date;
}

export interface SearchQueryData {
  location?: string;
  startDate?: string;
  endDate?: string;
  numberOfGuests?: string;
}

export interface formatDateOptions {
  weekday?: string;
  year?: string;
  month?: string;
  day?: string;
}
