interface IBikeReviewSummary {
  id: number | undefined;
  name: string | undefined;
  avgStyleAndDesign: number;
  avgReliability: number;
  avgComfort: number;
  avgServiceExperience: number;
  avgValueForMoney: number;
  avgPerformance: number;
}

export default IBikeReviewSummary;
