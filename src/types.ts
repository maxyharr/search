export interface Results {
  data: VayStay[],
  meta: {
    type: string,
    pagination: {
      totalNumResults: number;
      totalNumPages: number;
      pageSize: number;
      pollingTimeout: number;
      maxPollingRetries: number;
    }
  }
}

export interface VayStay {
  id: number;
  title: string;
  whyStayHere: string;
  lat: number;
  lng: number;
  numBedrooms: number;
  numBathrooms: number;
  sleepsComfortably: number;
  sleepsMax: number;
  primarySmallImageUrl: string;
  url: string;
  nightlyFrom: number;
  nightlyRate: number;
  showcasedFeatures: string[],
  city: string;
  province: string;
  country: string;
  userId: number;
  userRating: number;
  numReviews: number;
  vaystaysWeight: number;
  tiebreakerSort: number;
}