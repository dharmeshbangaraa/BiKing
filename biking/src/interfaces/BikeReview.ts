interface BikeReview {
  id: number;
  bikeName: string;
  bikeRating: number;
  styleAndDesign: number;
  reliability: number;
  comfort: number;
  serviceExperience: number;
  valueForMoney: number;
  performance: number;
  ownerMileage: string;
  reviewerName: string;
  reviewerEmail: string;
  reviewerRiddenKms: string;
  reviewTitle: string;
  reviewDescription: string;
  expanded: boolean;
  toggleExpand: (id: number) => void;
}

export default BikeReview;
