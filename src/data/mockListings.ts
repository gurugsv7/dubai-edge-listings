export interface PropertyListing {
  id: string;
  area: string;
  building: string;
  propertyType: string;
  bedrooms: number;
  currentPrice: number;
  priceDropAmount?: number;
  priceDropPercentage?: number;
  priceDropToday: boolean;
  roiPercentage: number;
  keyFeatures: string[];
  opportunityReason: string;
  isOffPlan: boolean;
  isMotivatedSeller: boolean;
  hasPaymentPlan: boolean;
  bestOfToday?: boolean; // Highlight as best of today
  externalUrl?: string; // Optional external listing link
}

export const mockListings: PropertyListing[] = [
  {
    id: "elite-sports-studio",
    area: "Sports City",
    building: "Elite Sports Residence",
    propertyType: "Studio",
    bedrooms: 0,
    currentPrice: 485000,
    priceDropAmount: 0,
    priceDropPercentage: 0,
    priceDropToday: false,
    roiPercentage: 9.03,
    keyFeatures: [
      "Furnished",
      "Fully Tenanted",
      "High Yield",
      "Turnkey Asset",
    ],
    opportunityReason:
      "Best of Today: 9%+ ROI, sub-500k, ready tenant",
    isOffPlan: false,
    isMotivatedSeller: false,
    hasPaymentPlan: false,
    bestOfToday: true,
  },
  {
    id: "oxford-gardens-studio-arjan",
    area: "Arjan",
    building: "Oxford Gardens",
    propertyType: "Studio",
    bedrooms: 0,
    currentPrice: 800000,
    priceDropAmount: 20000,
    priceDropPercentage: 2.44,
    priceDropToday: false,
    roiPercentage: 7.5,
    keyFeatures: [
      "7.5% ROI", 
      "2.4% Price Drop", 
      "Fully Furnished", 
      "Smart Home", 
      "Balcony", 
      "Park-Facing", 
      "Motivated Seller", 
      "Payment Plan Available"
    ],
    opportunityReason: "Sub-1M, 7.5% ROI, furnished, ready-to-rent by Q1 2025 – ideal for brokers targeting fast turnover + ROI-focused investors",
    isOffPlan: true,
    isMotivatedSeller: true,
    hasPaymentPlan: true,
    bestOfToday: true
  },
  {
    id: "central-downtown-studio-arjan",
    area: "Arjan",
    building: "The Central Downtown",
    propertyType: "Studio",
    bedrooms: 0,
    currentPrice: 750000,
    priceDropAmount: 0,
    priceDropPercentage: 0,
    priceDropToday: false,
    roiPercentage: 8.5,
    keyFeatures: [
      "8.5% Projected ROI", 
      "Post-Handover 1% Monthly Plan", 
      "Retail-Facing", 
      "Low Entry Cost", 
      "Great Rental Demand Area"
    ],
    opportunityReason: "Low barrier entry, 8.5% ROI, ideal pitch for budget-first investors with long-term yield focus",
    isOffPlan: true,
    isMotivatedSeller: false,
    hasPaymentPlan: true,
    bestOfToday: true
  },
  {
    id: "binghatti-grove-1bhk-jvc",
    area: "JVC",
    building: "Binghatti Grove",
    propertyType: "Apartment",
    bedrooms: 1,
    currentPrice: 1195000,
    priceDropAmount: 60000,
    priceDropPercentage: 4.78,
    priceDropToday: true,
    roiPercentage: 8.0,
    keyFeatures: [
      "8.0% ROI", 
      "AED 60K Drop Today", 
      "Motivated Resale", 
      "High-Demand JVC Area", 
      "Balcony", 
      "Brand New"
    ],
    opportunityReason: "Big 4.8% drop today, 8% ROI in JVC hotspot – ideal broker pitch for urgency + returns",
    isOffPlan: true,
    isMotivatedSeller: true,
    hasPaymentPlan: false,
    bestOfToday: true,
    externalUrl: "https://www.bayut.com/property/details-10805154.html"
  },
  {
    id: "oxford-gardens-1bhk-arjan",
    area: "Arjan",
    building: "Oxford Gardens",
    propertyType: "Apartment",
    bedrooms: 1,
    currentPrice: 1300000,
    priceDropAmount: 0,
    priceDropPercentage: 0,
    priceDropToday: false,
    roiPercentage: 7.2,
    keyFeatures: [
      "7.2% ROI", 
      "Smart Home", 
      "Fully Equipped Kitchen", 
      "Pool View", 
      "Post-Handover Payment Plan"
    ],
    opportunityReason: "Solid long-term investment, ROI-focused unit with high finish – broker-friendly for premium buyers",
    isOffPlan: true,
    isMotivatedSeller: false,
    hasPaymentPlan: true,
    bestOfToday: true,
    externalUrl: "https://www.bayut.com/property/details-11927735.html"
  },
  {
    id: "dusit-rijas-studio-majan",
    area: "Majan",
    building: "Dusit Rijas",
    propertyType: "Studio",
    bedrooms: 0,
    currentPrice: 613000,
    priceDropAmount: 0,
    priceDropPercentage: 0,
    priceDropToday: false,
    roiPercentage: 12.0,
    keyFeatures: [
      "12% Guaranteed ROI",
      "Hotel‑Managed",
      "No DLD Fees",
      "Fully Furnished",
      "Passive Income Setup",
      "Payment Plan Available"
    ],
    opportunityReason: "Top ROI asset with hands‑off investor returns—easy broker pitch.",
    isOffPlan: false,
    isMotivatedSeller: false,
    hasPaymentPlan: true,
    bestOfToday: true,
    externalUrl: "https://www.bayut.com/for-sale/studio-apartments/dubai/majan/dusit-rijas/"
  },
];
