import { mockListings } from "@/data/mockListings";

const PropertyDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const property = mockListings.find((listing) => listing.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div>
      <h1>{property.originalTitle}</h1>
      <p><strong>Price:</strong> {property.currentPrice}</p>
      <p><strong>Area:</strong> {property.area}</p>
      <p><strong>Building:</strong> {property.building}</p>
      <p><strong>Property Type:</strong> {property.propertyType}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>ROI:</strong> {property.roiPercentage}%</p>
      <p><strong>Key Features:</strong> {property.keyFeatures && property.keyFeatures.join(", ")}</p>
      <p><strong>Opportunity Reason:</strong> {property.opportunityReason}</p>
      <p><strong>Off Plan:</strong> {property.isOffPlan ? "Yes" : "No"}</p>
            <p><strong>Motivated Seller:</strong> {property.isMotivatedSeller ? "Yes" : "No"}</p>
          </div>
        );
      };