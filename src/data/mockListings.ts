// Today's listings data
// PASTE YOUR FULL LISTINGS ARRAY BELOW (replace the [] with your full JSON array)
const rawListings = [
  // [
  {
    "title": "Best Price | 8 Options Available  | Smart Home | Bayut.com",
    "price": "AED 949,900",
    "price_number": 949900,
    "location": "Binghatti Emerald, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "653 sqft",
    "link": "https://www.bayut.com/property/details-9234782.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/binghatti-emerald/",
    "top_3_prices": [
      {
        "price": 900000,
        "link": "https://www.bayut.com/property/details-11759975.html",
        "is_today_listing": false
      },
      {
        "price": 900000,
        "link": "https://www.bayut.com/property/details-11636054.html",
        "is_today_listing": false
      },
      {
        "price": 920000,
        "link": "https://www.bayut.com/property/details-11655441.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Investor Deal | 1BHK Furnished | Great Location | Bayut.com",
    "price": "AED 846,090",
    "price_number": 846090,
    "location": "Sydney Tower, JVC District 18, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "667 sqft",
    "link": "https://www.bayut.com/property/details-11987276.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-18/sydney-tower/",
    "top_3_prices": [
      {
        "price": 730000,
        "link": "https://www.bayut.com/property/details-11968713.html",
        "is_today_listing": false
      },
      {
        "price": 730000,
        "link": "https://www.bayut.com/property/details-11976028.html",
        "is_today_listing": false
      },
      {
        "price": 749999,
        "link": "https://www.bayut.com/property/details-11803376.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "APARTMENT READY TO MOVE /MODERN LIVING | Bayut.com",
    "price": "AED 1,150,000",
    "price_number": 1150000,
    "location": "Binghatti Onyx, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "741 sqft",
    "link": "https://www.bayut.com/property/details-11987123.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/binghatti-onyx/",
    "top_3_prices": [
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11646930.html",
        "is_today_listing": false
      },
      {
        "price": 1050000,
        "link": "https://www.bayut.com/property/details-9723375.html",
        "is_today_listing": false
      },
      {
        "price": 1050000,
        "link": "https://www.bayut.com/property/details-11736164.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Furnished 2BHK | Investor Deal | Book now | Bayut.com",
    "price": "AED 1,260,000",
    "price_number": 1260000,
    "location": "Sydney Tower, JVC District 18, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "1,109 sqft",
    "link": "https://www.bayut.com/property/details-11987119.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-18/sydney-tower/",
    "top_3_prices": [
      {
        "price": 730000,
        "link": "https://www.bayut.com/property/details-11968713.html",
        "is_today_listing": false
      },
      {
        "price": 730000,
        "link": "https://www.bayut.com/property/details-11976028.html",
        "is_today_listing": false
      },
      {
        "price": 749999,
        "link": "https://www.bayut.com/property/details-11803376.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Spacious Layout | Get High Roi | Great Amenities | Bayut.com",
    "price": "AED 780,000",
    "price_number": 780000,
    "location": "Sandoval Garden Block B, Sandoval Garden, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "805 sqft",
    "link": "https://www.bayut.com/property/details-11986705.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/sandoval-garden/sandoval-garden-block-b/",
    "top_3_prices": [
      {
        "price": 780000,
        "link": "https://www.bayut.com/property/details-11986705.html",
        "is_today_listing": true
      },
      {
        "price": 815000,
        "link": "https://www.bayut.com/property/details-11955720.html",
        "is_today_listing": false
      },
      {
        "price": 925000,
        "link": "https://www.bayut.com/property/details-11983026.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Modern Living in Serenity Lakes 5 | Furnished Studio | Jumeirah Village Circle | Bayut.com",
    "price": "AED 660,000",
    "price_number": 660000,
    "location": "Serenity Lakes 5, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11154971.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/serenity-lakes-5/",
    "top_3_prices": [
      {
        "price": 560000,
        "link": "https://www.bayut.com/property/details-11980944.html",
        "is_today_listing": false
      },
      {
        "price": 570000,
        "link": "https://www.bayut.com/property/details-10829328.html",
        "is_today_listing": false
      },
      {
        "price": 570000,
        "link": "https://www.bayut.com/property/details-11724247.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "High Floor | Pool View | Luxury Living | Bayut.com",
    "price": "AED 1,070,000",
    "price_number": 1070000,
    "location": "Binghatti Azure, JVC District 16, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "688 sqft",
    "link": "https://www.bayut.com/property/details-11985929.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-16/binghatti-azure/",
    "top_3_prices": [
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11800254.html",
        "is_today_listing": false
      },
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11800201.html",
        "is_today_listing": false
      },
      {
        "price": 1049000,
        "link": "https://www.bayut.com/property/details-11765193.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Private Terrace | Amazing Amenities | Resort-style | Bayut.com",
    "price": "AED 760,000",
    "price_number": 760000,
    "location": "Oxford Boulevard, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11985232.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/oxford-boulevard/",
    "top_3_prices": [
      {
        "price": 725000,
        "link": "https://www.bayut.com/property/details-11716203.html",
        "is_today_listing": false
      },
      {
        "price": 745000,
        "link": "https://www.bayut.com/property/details-11469465.html",
        "is_today_listing": false
      },
      {
        "price": 745000,
        "link": "https://www.bayut.com/property/details-11942807.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "High ROI | Marina Skyline View | Rented | Bayut.com",
    "price": "AED 615,000",
    "price_number": 615000,
    "location": "Binghatti House, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11984505.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/binghatti-house/",
    "top_3_prices": [
      {
        "price": 600000,
        "link": "https://www.bayut.com/property/details-11983938.html",
        "is_today_listing": false
      },
      {
        "price": 600000,
        "link": "https://www.bayut.com/property/details-11799984.html",
        "is_today_listing": false
      },
      {
        "price": 615000,
        "link": "https://www.bayut.com/property/details-11984505.html",
        "is_today_listing": true
      }
    ]
  },
  {
    "title": "Vacant Soon I Luxurious 1 Bed I High End Finishing | Bayut.com",
    "price": "AED 1,425,000",
    "price_number": 1425000,
    "location": "Signature Livings North, Signature Livings, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "771 sqft",
    "link": "https://www.bayut.com/property/details-11984437.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/signature-livings/signature-livings-north/",
    "top_3_prices": [
      {
        "price": 1175000,
        "link": "https://www.bayut.com/property/details-11645425.html",
        "is_today_listing": false
      },
      {
        "price": 1225000,
        "link": "https://www.bayut.com/property/details-10820835.html",
        "is_today_listing": false
      },
      {
        "price": 1250000,
        "link": "https://www.bayut.com/property/details-11848075.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Rented | Vacant | 1BHK |Multiple Options |Big Unit | Bayut.com",
    "price": "AED 750,000",
    "price_number": 750000,
    "location": "Summer 1 Block B, Summer, Seasons Community, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "895 sqft",
    "link": "https://www.bayut.com/property/details-11984426.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/seasons-community/summer/summer-1-block-b/",
    "top_3_prices": [
      {
        "price": 750000,
        "link": "https://www.bayut.com/property/details-11984426.html",
        "is_today_listing": true
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Closed Kitchen | Smart Home | High-End Finishes | Bayut.com",
    "price": "AED 849,995",
    "price_number": 849995,
    "location": "Dusk by Binghatti, JVC District 16, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11984409.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-16/dusk-by-binghatti/",
    "top_3_prices": [
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-10653259.html",
        "is_today_listing": false
      },
      {
        "price": 720000,
        "link": "https://www.bayut.com/property/details-10996740.html",
        "is_today_listing": false
      },
      {
        "price": 790398,
        "link": "https://www.bayut.com/property/details-10448466.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Premium 1BR + Study | Bright Unit | Vacant | Bayut.com",
    "price": "AED 1,250,000",
    "price_number": 1250000,
    "location": "Hyati Residence, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "819 sqft",
    "link": "https://www.bayut.com/property/details-11984089.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/hyati-residence/",
    "top_3_prices": [
      {
        "price": 1150000,
        "link": "https://www.bayut.com/property/details-11827248.html",
        "is_today_listing": false
      },
      {
        "price": 1150000,
        "link": "https://www.bayut.com/property/details-11715190.html",
        "is_today_listing": false
      },
      {
        "price": 1150000,
        "link": "https://www.bayut.com/property/details-11848424.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Brand New Ready to move 3bhk with all facilities &big terrace | Bayut.com",
    "price": "AED 3,730,958",
    "price_number": 3730958,
    "location": "Park Lane by Heilbronn, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "3 Bed",
    "bedroom_count": "3",
    "size": "3,200 sqft",
    "link": "https://www.bayut.com/property/details-11984051.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/park-lane-by-heilbronn/",
    "top_3_prices": [
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      },
      {
        "price": 1250500,
        "link": "https://www.bayut.com/property/details-11802167.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Prime Location | Unfurnished | High Floor | Bayut.com",
    "price": "AED 1,950,000",
    "price_number": 1950000,
    "location": "Park View Tower, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "1,337 sqft",
    "link": "https://www.bayut.com/property/details-11984016.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/park-view-tower/",
    "top_3_prices": [
      {
        "price": 630000,
        "link": "https://www.bayut.com/property/details-10771287.html",
        "is_today_listing": false
      },
      {
        "price": 638000,
        "link": "https://www.bayut.com/property/details-11795414.html",
        "is_today_listing": false
      },
      {
        "price": 649999,
        "link": "https://www.bayut.com/property/details-11280606.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Brand New Ready to move 2BHK with All facilties (JVC)Dubai | Bayut.com",
    "price": "AED 2,407,888",
    "price_number": 2407888,
    "location": "Park Lane by Heilbronn, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,664 sqft",
    "link": "https://www.bayut.com/property/details-11983955.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/park-lane-by-heilbronn/",
    "top_3_prices": [
      {
        "price": 1920000,
        "link": "https://www.bayut.com/property/details-11298179.html",
        "is_today_listing": false
      },
      {
        "price": 1934999,
        "link": "https://www.bayut.com/property/details-10492757.html",
        "is_today_listing": false
      },
      {
        "price": 2100000,
        "link": "https://www.bayut.com/property/details-11958155.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "High Floor | Brand New | Distress Deal | Bayut.com",
    "price": "AED 600,000",
    "price_number": 600000,
    "location": "Binghatti House, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11983938.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/binghatti-house/",
    "top_3_prices": [
      {
        "price": 600000,
        "link": "https://www.bayut.com/property/details-11983938.html",
        "is_today_listing": true
      },
      {
        "price": 600000,
        "link": "https://www.bayut.com/property/details-11799984.html",
        "is_today_listing": false
      },
      {
        "price": 615000,
        "link": "https://www.bayut.com/property/details-11984505.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Brand New | Prime Location | Negotiable | Bayut.com",
    "price": "AED 720,000",
    "price_number": 720000,
    "location": "Binghatti Azure, JVC District 16, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11983808.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-16/binghatti-azure/",
    "top_3_prices": [
      {
        "price": 649998,
        "link": "https://www.bayut.com/property/details-11903487.html",
        "is_today_listing": false
      },
      {
        "price": 660000,
        "link": "https://www.bayut.com/property/details-11760094.html",
        "is_today_listing": false
      },
      {
        "price": 670000,
        "link": "https://www.bayut.com/property/details-11980948.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Brand New Modern | Vacant | 1BR With Large Study | Bayut.com",
    "price": "AED 1,410,000",
    "price_number": 1410000,
    "location": "West Tower, Luma 22, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "837 sqft",
    "link": "https://www.bayut.com/property/details-11983732.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/luma-22/west-tower/",
    "top_3_prices": [
      {
        "price": 740000,
        "link": "https://www.bayut.com/property/details-11212256.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "3bhk for Sale | Huge Layout | Great Investment | Bayut.com",
    "price": "AED 2,000,000",
    "price_number": 2000000,
    "location": "Binghatti Heights, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "3 Bed",
    "bedroom_count": "3",
    "size": "1,358 sqft",
    "link": "https://www.bayut.com/property/details-11983651.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/binghatti-heights/",
    "top_3_prices": [
      {
        "price": 1799999,
        "link": "https://www.bayut.com/property/details-9687949.html",
        "is_today_listing": false
      },
      {
        "price": 1900000,
        "link": "https://www.bayut.com/property/details-10560094.html",
        "is_today_listing": false
      },
      {
        "price": 2000000,
        "link": "https://www.bayut.com/property/details-11983651.html",
        "is_today_listing": true
      }
    ]
  },
  {
    "title": "Prime Location | Vacant | Large Layout | Bayut.com",
    "price": "AED 585,000",
    "price_number": 585000,
    "location": "Uniestate Prime Tower, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11983649.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/uniestate-prime-tower/",
    "top_3_prices": [
      {
        "price": 585000,
        "link": "https://www.bayut.com/property/details-11983649.html",
        "is_today_listing": true
      },
      {
        "price": 595000,
        "link": "https://www.bayut.com/property/details-11480267.html",
        "is_today_listing": false
      },
      {
        "price": 600000,
        "link": "https://www.bayut.com/property/details-11767456.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Spacious Layout with Study Room | Park View | Bayut.com",
    "price": "AED 1,600,000",
    "price_number": 1600000,
    "location": "Hyati Avenue, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "848 sqft",
    "link": "https://www.bayut.com/property/details-11983631.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/hyati-avenue/",
    "top_3_prices": [
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      },
      {
        "price": 1250500,
        "link": "https://www.bayut.com/property/details-11802167.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Elegant 1BR | Prime Location | Call Now | Bayut.com",
    "price": "AED 880,000",
    "price_number": 880000,
    "location": "Fortunato, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "1,048 sqft",
    "link": "https://www.bayut.com/property/details-11983496.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/fortunato/",
    "top_3_prices": [
      {
        "price": 845000,
        "link": "https://www.bayut.com/property/details-11736156.html",
        "is_today_listing": false
      },
      {
        "price": 875000,
        "link": "https://www.bayut.com/property/details-11861547.html",
        "is_today_listing": false
      },
      {
        "price": 880000,
        "link": "https://www.bayut.com/property/details-11983496.html",
        "is_today_listing": true
      }
    ]
  },
  {
    "title": "Brand New Ready to Move-in | Invest Now | Bayut.com",
    "price": "AED 1,050,000",
    "price_number": 1050000,
    "location": "Binghatti Amber, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "688 sqft",
    "link": "https://www.bayut.com/property/details-11153030.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-amber/",
    "top_3_prices": [
      {
        "price": 900000,
        "link": "https://www.bayut.com/property/details-10494194.html",
        "is_today_listing": false
      },
      {
        "price": 955999,
        "link": "https://www.bayut.com/property/details-11878392.html",
        "is_today_listing": false
      },
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11965889.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Luxury Living | Hot Deal | Great Investment | Bayut.com",
    "price": "AED 830,000",
    "price_number": 830000,
    "location": "Hamilton House, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11983489.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/hamilton-house/",
    "top_3_prices": [
      {
        "price": 800000,
        "link": "https://www.bayut.com/property/details-11711025.html",
        "is_today_listing": false
      },
      {
        "price": 830000,
        "link": "https://www.bayut.com/property/details-11983489.html",
        "is_today_listing": true
      },
      {
        "price": 860000,
        "link": "https://www.bayut.com/property/details-11560241.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Huge Terrace | Vacant | Perfect for End-User | JVC | Bayut.com",
    "price": "AED 1,550,000",
    "price_number": 1550000,
    "location": "Sandoval Garden Block B, Sandoval Garden, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,468 sqft",
    "link": "https://www.bayut.com/property/details-11983397.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/sandoval-garden/sandoval-garden-block-b/",
    "top_3_prices": [
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      },
      {
        "price": 1250500,
        "link": "https://www.bayut.com/property/details-11802167.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Downtown Skyline - Marina Skyline - Great Views | Bayut.com",
    "price": "AED 2,000,000",
    "price_number": 2000000,
    "location": "Zaya Hameni, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,405 sqft",
    "link": "https://www.bayut.com/property/details-11983395.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/zaya-hameni/",
    "top_3_prices": [
      {
        "price": 1950000,
        "link": "https://www.bayut.com/property/details-11932728.html",
        "is_today_listing": false
      },
      {
        "price": 1950000,
        "link": "https://www.bayut.com/property/details-11908050.html",
        "is_today_listing": false
      },
      {
        "price": 2000000,
        "link": "https://www.bayut.com/property/details-11983395.html",
        "is_today_listing": true
      }
    ]
  },
  {
    "title": "Luxury Renovated | Prime Location | High ROI | Vacant | Bayut.com",
    "price": "AED 800,000",
    "price_number": 800000,
    "location": "Hanover Square, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "748 sqft",
    "link": "https://www.bayut.com/property/details-11983027.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/hanover-square/",
    "top_3_prices": [
      {
        "price": 625000,
        "link": "https://www.bayut.com/property/details-11958358.html",
        "is_today_listing": false
      },
      {
        "price": 638000,
        "link": "https://www.bayut.com/property/details-11872088.html",
        "is_today_listing": false
      },
      {
        "price": 649000,
        "link": "https://www.bayut.com/property/details-10575533.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "NEGOTIABLE| HOT DEAL | SPACIOUS UNIT | WITH BALCONY | Bayut.com",
    "price": "AED 925,000",
    "price_number": 925000,
    "location": "Sandoval Garden Block B, Sandoval Garden, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "741 sqft",
    "link": "https://www.bayut.com/property/details-11983026.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/sandoval-garden/sandoval-garden-block-b/",
    "top_3_prices": [
      {
        "price": 780000,
        "link": "https://www.bayut.com/property/details-11986705.html",
        "is_today_listing": false
      },
      {
        "price": 815000,
        "link": "https://www.bayut.com/property/details-11955720.html",
        "is_today_listing": false
      },
      {
        "price": 925000,
        "link": "https://www.bayut.com/property/details-11983026.html",
        "is_today_listing": true
      }
    ]
  },
  {
    "title": "Pool View | Vacant | Open to Offers | Bayut.com",
    "price": "AED 1,800,000",
    "price_number": 1800000,
    "location": "Binghatti Amber, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,251 sqft",
    "link": "https://www.bayut.com/property/details-11982965.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-amber/",
    "top_3_prices": [
      {
        "price": 1511520,
        "link": "https://www.bayut.com/property/details-11801073.html",
        "is_today_listing": false
      },
      {
        "price": 1570000,
        "link": "https://www.bayut.com/property/details-10661799.html",
        "is_today_listing": false
      },
      {
        "price": 1600000,
        "link": "https://www.bayut.com/property/details-10005388.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Spacious 1BR | Move In Ready | All Amenities | Bayut.com",
    "price": "AED 660,000",
    "price_number": 660000,
    "location": "Hanover Square, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "634 sqft",
    "link": "https://www.bayut.com/property/details-11982847.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/hanover-square/",
    "top_3_prices": [
      {
        "price": 625000,
        "link": "https://www.bayut.com/property/details-11958358.html",
        "is_today_listing": false
      },
      {
        "price": 638000,
        "link": "https://www.bayut.com/property/details-11872088.html",
        "is_today_listing": false
      },
      {
        "price": 649000,
        "link": "https://www.bayut.com/property/details-10575533.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Summer 1 | Rented | Spacious | Smart Investment | Bayut.com",
    "price": "AED 650,000",
    "price_number": 650000,
    "location": "Summer 1 Block A, Summer, Seasons Community, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "654 sqft",
    "link": "https://www.bayut.com/property/details-11982826.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/seasons-community/summer/summer-1-block-a/",
    "top_3_prices": [
      {
        "price": 549999,
        "link": "https://www.bayut.com/property/details-11456633.html",
        "is_today_listing": false
      },
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-11982826.html",
        "is_today_listing": true
      },
      {
        "price": 750000,
        "link": "https://www.bayut.com/property/details-11621897.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Brand New  | Exclusive Unit | Motivated Seller | Bayut.com",
    "price": "AED 1,100,000",
    "price_number": 1100000,
    "location": "Binghatti Azure, JVC District 16, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "746 sqft",
    "link": "https://www.bayut.com/property/details-11982732.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-16/binghatti-azure/",
    "top_3_prices": [
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11800254.html",
        "is_today_listing": false
      },
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11800201.html",
        "is_today_listing": false
      },
      {
        "price": 1049000,
        "link": "https://www.bayut.com/property/details-11765193.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Upgraded | Price Reduced | Marina Skyline Views | Bayut.com",
    "price": "AED 1,260,000",
    "price_number": 1260000,
    "location": "Zaya Hameni, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "927 sqft",
    "link": "https://www.bayut.com/property/details-11982433.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/zaya-hameni/",
    "top_3_prices": [
      {
        "price": 1260000,
        "link": "https://www.bayut.com/property/details-11982433.html",
        "is_today_listing": true
      },
      {
        "price": 1300000,
        "link": "https://www.bayut.com/property/details-10626182.html",
        "is_today_listing": false
      },
      {
        "price": 1350000,
        "link": "https://www.bayut.com/property/details-11670110.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Elegant Living | Spacious Layout |  Hot Deal | Bayut.com",
    "price": "AED 1,499,000",
    "price_number": 1499000,
    "location": "Binghatti Heights, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,142 sqft",
    "link": "https://www.bayut.com/property/details-11982392.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/binghatti-heights/",
    "top_3_prices": [
      {
        "price": 1499000,
        "link": "https://www.bayut.com/property/details-11982392.html",
        "is_today_listing": true
      },
      {
        "price": 1530000,
        "link": "https://www.bayut.com/property/details-11948559.html",
        "is_today_listing": false
      },
      {
        "price": 1550000,
        "link": "https://www.bayut.com/property/details-8705944.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Smart Home | High Floor | Ready to Move in | Bayut.com",
    "price": "AED 980,000",
    "price_number": 980000,
    "location": "Binghatti Gardenia, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "525 sqft",
    "link": "https://www.bayut.com/property/details-11982386.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-gardenia/",
    "top_3_prices": [
      {
        "price": 899999,
        "link": "https://www.bayut.com/property/details-11783365.html",
        "is_today_listing": false
      },
      {
        "price": 915000,
        "link": "https://www.bayut.com/property/details-11717611.html",
        "is_today_listing": false
      },
      {
        "price": 920000,
        "link": "https://www.bayut.com/property/details-11879750.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Below Market Price | Rare Unit | Tenanted | Investor Deal | Bayut.com",
    "price": "AED 700,000",
    "price_number": 700000,
    "location": "Belgravia 2, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11982208.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/belgravia-2/",
    "top_3_prices": [
      {
        "price": 700000,
        "link": "https://www.bayut.com/property/details-11982208.html",
        "is_today_listing": true
      },
      {
        "price": 725000,
        "link": "https://www.bayut.com/property/details-11642637.html",
        "is_today_listing": false
      },
      {
        "price": 830000,
        "link": "https://www.bayut.com/property/details-10503701.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Negotiable | Motivated Seller | Less than Market | Bayut.com",
    "price": "AED 665,000",
    "price_number": 665000,
    "location": "Luma21, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11982148.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/luma21/",
    "top_3_prices": [
      {
        "price": 665000,
        "link": "https://www.bayut.com/property/details-11982148.html",
        "is_today_listing": true
      },
      {
        "price": 665000,
        "link": "https://www.bayut.com/property/details-11525810.html",
        "is_today_listing": false
      },
      {
        "price": 670000,
        "link": "https://www.bayut.com/property/details-11962859.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Spacious| Garden View| Near JSS| Ready to Move In| | Bayut.com",
    "price": "AED 1,400,000",
    "price_number": 1400000,
    "location": "Le Grand Chateau B, Le Grand Chateau, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,512 sqft",
    "link": "https://www.bayut.com/property/details-11982147.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/le-grand-chateau/le-grand-chateau-b/",
    "top_3_prices": [
      {
        "price": 1380000,
        "link": "https://www.bayut.com/property/details-11230479.html",
        "is_today_listing": false
      },
      {
        "price": 1400000,
        "link": "https://www.bayut.com/property/details-11982147.html",
        "is_today_listing": true
      },
      {
        "price": 1400000,
        "link": "https://www.bayut.com/property/details-11531936.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Burj Al Arab View | High Floor | Price Negotiable | Bayut.com",
    "price": "AED 1,050,000",
    "price_number": 1050000,
    "location": "Binghatti Gardenia, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "635 sqft",
    "link": "https://www.bayut.com/property/details-11982069.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-gardenia/",
    "top_3_prices": [
      {
        "price": 899999,
        "link": "https://www.bayut.com/property/details-11783365.html",
        "is_today_listing": false
      },
      {
        "price": 915000,
        "link": "https://www.bayut.com/property/details-11717611.html",
        "is_today_listing": false
      },
      {
        "price": 920000,
        "link": "https://www.bayut.com/property/details-11879750.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Fully Furnished  |  Rented Unit  | Brand New | Bayut.com",
    "price": "AED 1,239,999",
    "price_number": 1239999,
    "location": "Binghatti Onyx, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "671 sqft",
    "link": "https://www.bayut.com/property/details-11982046.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/binghatti-onyx/",
    "top_3_prices": [
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11646930.html",
        "is_today_listing": false
      },
      {
        "price": 1050000,
        "link": "https://www.bayut.com/property/details-9723375.html",
        "is_today_listing": false
      },
      {
        "price": 1050000,
        "link": "https://www.bayut.com/property/details-11736164.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Hot Deal | 2BHK+Maid | Investor Deal | Bayut.com",
    "price": "AED 1,550,000",
    "price_number": 1550000,
    "location": "La Residenza, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,114 sqft",
    "link": "https://www.bayut.com/property/details-11981774.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/la-residenza/",
    "top_3_prices": [
      {
        "price": 1428000,
        "link": "https://www.bayut.com/property/details-11277055.html",
        "is_today_listing": false
      },
      {
        "price": 1489307,
        "link": "https://www.bayut.com/property/details-10404652.html",
        "is_today_listing": false
      },
      {
        "price": 1499500,
        "link": "https://www.bayut.com/property/details-11769734.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Marwa Heights JVC | Fully Furnished Studio | Bayut.com",
    "price": "AED 630,000",
    "price_number": 630000,
    "location": "Marwa Heights, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11981758.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/marwa-heights/",
    "top_3_prices": [
      {
        "price": 580000,
        "link": "https://www.bayut.com/property/details-11663163.html",
        "is_today_listing": false
      },
      {
        "price": 630000,
        "link": "https://www.bayut.com/property/details-11981758.html",
        "is_today_listing": true
      },
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-11842482.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "\ud83c\udfe1 Luxury 2br | High Floor | Marina View | Private Pool | Vacant unit| | Bayut.com",
    "price": "AED 1,700,000",
    "price_number": 1700000,
    "location": "Binghatti House, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,111 sqft",
    "link": "https://www.bayut.com/property/details-11981686.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/binghatti-house/",
    "top_3_prices": [
      {
        "price": 1550000,
        "link": "https://www.bayut.com/property/details-11527811.html",
        "is_today_listing": false
      },
      {
        "price": 1560000,
        "link": "https://www.bayut.com/property/details-11527914.html",
        "is_today_listing": false
      },
      {
        "price": 1599999,
        "link": "https://www.bayut.com/property/details-11753344.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "GREAT INVESTMENT| 1BR APARTMENT | PLUS STUDY | Bayut.com",
    "price": "AED 860,000",
    "price_number": 860000,
    "location": "May Residence Tower 5, May Residence, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "928 sqft",
    "link": "https://www.bayut.com/property/details-11981685.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/may-residence/may-residence-tower-5/",
    "top_3_prices": [
      {
        "price": 700000,
        "link": "https://www.bayut.com/property/details-11826498.html",
        "is_today_listing": false
      },
      {
        "price": 749999,
        "link": "https://www.bayut.com/property/details-11605606.html",
        "is_today_listing": false
      },
      {
        "price": 825000,
        "link": "https://www.bayut.com/property/details-11654051.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Luxury Living| Prime Location | Spacious | Bayut.com",
    "price": "AED 685,000",
    "price_number": 685000,
    "location": "Bloom Tower B, Bloom Towers, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11981615.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers/bloom-tower-b/",
    "top_3_prices": [
      {
        "price": 600000,
        "link": "https://www.bayut.com/property/details-11643741.html",
        "is_today_listing": false
      },
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-11414020.html",
        "is_today_listing": false
      },
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-11980542.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Boutique-Low Rise| Urban Living | Smart Home | Bayut.com",
    "price": "AED 2,200,000",
    "price_number": 2200000,
    "location": "Park Lane by Heilbronn, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,186 sqft",
    "link": "https://www.bayut.com/property/details-11981492.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/park-lane-by-heilbronn/",
    "top_3_prices": [
      {
        "price": 1920000,
        "link": "https://www.bayut.com/property/details-11298179.html",
        "is_today_listing": false
      },
      {
        "price": 1934999,
        "link": "https://www.bayut.com/property/details-10492757.html",
        "is_today_listing": false
      },
      {
        "price": 2100000,
        "link": "https://www.bayut.com/property/details-11958155.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Upgraded 1 BR Apartment | Pool View | High ROI | Bayut.com",
    "price": "AED 800,000",
    "price_number": 800000,
    "location": "Siena 2, Siena, Tuscan Residence, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "957 sqft",
    "link": "https://www.bayut.com/property/details-11981436.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/tuscan-residence/siena/siena-2/",
    "top_3_prices": [
      {
        "price": 800000,
        "link": "https://www.bayut.com/property/details-11981436.html",
        "is_today_listing": true
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "FIVE HOTEL- CASTLE PARK VIEW - ONE BR - READY UNIT | Bayut.com",
    "price": "AED 1,300,000",
    "price_number": 1300000,
    "location": "Mayas Geneva, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "922 sqft",
    "link": "https://www.bayut.com/property/details-11981163.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/mayas-geneva/",
    "top_3_prices": [
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-11745583.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "One Bedroom| Best Investment | Spacious | Bayut.com",
    "price": "AED 1,290,000",
    "price_number": 1290000,
    "location": "Signature Livings North, Signature Livings, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "734 sqft",
    "link": "https://www.bayut.com/property/details-11981049.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/signature-livings/signature-livings-north/",
    "top_3_prices": [
      {
        "price": 1175000,
        "link": "https://www.bayut.com/property/details-11645425.html",
        "is_today_listing": false
      },
      {
        "price": 1225000,
        "link": "https://www.bayut.com/property/details-10820835.html",
        "is_today_listing": false
      },
      {
        "price": 1250000,
        "link": "https://www.bayut.com/property/details-11848075.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Smart Home | Prime Location | Investor Deal | Bayut.com",
    "price": "AED 670,000",
    "price_number": 670000,
    "location": "Binghatti Azure, JVC District 16, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11980948.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-16/binghatti-azure/",
    "top_3_prices": [
      {
        "price": 649998,
        "link": "https://www.bayut.com/property/details-11903487.html",
        "is_today_listing": false
      },
      {
        "price": 660000,
        "link": "https://www.bayut.com/property/details-11760094.html",
        "is_today_listing": false
      },
      {
        "price": 670000,
        "link": "https://www.bayut.com/property/details-11980948.html",
        "is_today_listing": true
      }
    ]
  },
  {
    "title": "Fairly New | Pool View | Easy Access to the Exit | Bayut.com",
    "price": "AED 560,000",
    "price_number": 560000,
    "location": "Serenity Lakes 5, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11980944.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/serenity-lakes-5/",
    "top_3_prices": [
      {
        "price": 560000,
        "link": "https://www.bayut.com/property/details-11980944.html",
        "is_today_listing": true
      },
      {
        "price": 570000,
        "link": "https://www.bayut.com/property/details-10829328.html",
        "is_today_listing": false
      },
      {
        "price": 570000,
        "link": "https://www.bayut.com/property/details-11724247.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Vacant | Limited Edition | Great Amenities | Bayut.com",
    "price": "AED 1,475,000",
    "price_number": 1475000,
    "location": "Zaya Hameni, JVC District 15, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "1,124 sqft",
    "link": "https://www.bayut.com/property/details-11980915.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-15/zaya-hameni/",
    "top_3_prices": [
      {
        "price": 1260000,
        "link": "https://www.bayut.com/property/details-11982433.html",
        "is_today_listing": false
      },
      {
        "price": 1300000,
        "link": "https://www.bayut.com/property/details-10626182.html",
        "is_today_listing": false
      },
      {
        "price": 1350000,
        "link": "https://www.bayut.com/property/details-11670110.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Best Price I Cozzy Studio I Higher Floor | Bayut.com",
    "price": "AED 650,000",
    "price_number": 650000,
    "location": "Bloom Tower B, Bloom Towers, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11980542.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers/bloom-tower-b/",
    "top_3_prices": [
      {
        "price": 600000,
        "link": "https://www.bayut.com/property/details-11643741.html",
        "is_today_listing": false
      },
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-11980542.html",
        "is_today_listing": true
      },
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-11414020.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Amazing Deal | G Floor Unit | Prime Location | Bayut.com",
    "price": "AED 2,400,000",
    "price_number": 2400000,
    "location": "Diamond Views 4, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "3 Bed",
    "bedroom_count": "3",
    "size": "2,689 sqft",
    "link": "https://www.bayut.com/property/details-11980060.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/diamond-views-4/",
    "top_3_prices": [
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      },
      {
        "price": 1250500,
        "link": "https://www.bayut.com/property/details-11802167.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Investor Deal | Pool View | Spacious 1BR | Bayut.com",
    "price": "AED 1,199,999",
    "price_number": 1199999,
    "location": "La Residenza, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "854 sqft",
    "link": "https://www.bayut.com/property/details-11980010.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/la-residenza/",
    "top_3_prices": [
      {
        "price": 960000,
        "link": "https://www.bayut.com/property/details-11975043.html",
        "is_today_listing": false
      },
      {
        "price": 1199999,
        "link": "https://www.bayut.com/property/details-11980010.html",
        "is_today_listing": true
      },
      {
        "price": 1200000,
        "link": "https://www.bayut.com/property/details-11849800.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Excellent Finishing, Unobstructed Park view, Fitted kitchen | Bayut.com",
    "price": "AED 750,000",
    "price_number": 750000,
    "location": "Binghatti Gardenia, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11979994.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-gardenia/",
    "top_3_prices": [
      {
        "price": 670000,
        "link": "https://www.bayut.com/property/details-11848963.html",
        "is_today_listing": false
      },
      {
        "price": 685000,
        "link": "https://www.bayut.com/property/details-11761048.html",
        "is_today_listing": false
      },
      {
        "price": 690000,
        "link": "https://www.bayut.com/property/details-11867769.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Upgraded | Fully Furnished | 7% NET ROI | | Bayut.com",
    "price": "AED 1,600,000",
    "price_number": 1600000,
    "location": "JVC District 17, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,172 sqft",
    "link": "https://www.bayut.com/property/details-11979845.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-17/",
    "top_3_prices": [
      {
        "price": 1150000,
        "link": "https://www.bayut.com/property/details-11804315.html",
        "is_today_listing": false
      },
      {
        "price": 1260000,
        "link": "https://www.bayut.com/property/details-11988240.html",
        "is_today_listing": false
      },
      {
        "price": 1400000,
        "link": "https://www.bayut.com/property/details-9754185.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Brand  New Apartment | High ROI | Vacant | Bayut.com",
    "price": "AED 1,100,000",
    "price_number": 1100000,
    "location": "Binghatti Tulip, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "611 sqft",
    "link": "https://www.bayut.com/property/details-11979197.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-tulip/",
    "top_3_prices": [
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-10985906.html",
        "is_today_listing": false
      },
      {
        "price": 670000,
        "link": "https://www.bayut.com/property/details-11976571.html",
        "is_today_listing": false
      },
      {
        "price": 675000,
        "link": "https://www.bayut.com/property/details-11569330.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "I Premium Furnished Studio I Brand New I Book Now I | Bayut.com",
    "price": "AED 700,000",
    "price_number": 700000,
    "location": "Golden Dream Tower 1, JVC District 18, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11979021.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-18/golden-dream-tower-1/",
    "top_3_prices": [
      {
        "price": 630000,
        "link": "https://www.bayut.com/property/details-11528759.html",
        "is_today_listing": false
      },
      {
        "price": 630000,
        "link": "https://www.bayut.com/property/details-11092628.html",
        "is_today_listing": false
      },
      {
        "price": 635000,
        "link": "https://www.bayut.com/property/details-11836988.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Fully Furnished | Prime Location | Swimming Pool View | Bayut.com",
    "price": "AED 975,000",
    "price_number": 975000,
    "location": "Bloom Tower B, Bloom Towers, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "629 sqft",
    "link": "https://www.bayut.com/property/details-11978984.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/bloom-towers/bloom-tower-b/",
    "top_3_prices": [
      {
        "price": 975000,
        "link": "https://www.bayut.com/property/details-11978984.html",
        "is_today_listing": true
      },
      {
        "price": 975000,
        "link": "https://www.bayut.com/property/details-11848290.html",
        "is_today_listing": false
      },
      {
        "price": 990000,
        "link": "https://www.bayut.com/property/details-11956702.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "INVESTMENT OPPORTUNITY | UNFURNISHED | READY TO MOVE | Bayut.com",
    "price": "AED 1,249,999",
    "price_number": 1249999,
    "location": "Diamond Views 4, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,549 sqft",
    "link": "https://www.bayut.com/property/details-11978905.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/diamond-views-4/",
    "top_3_prices": [
      {
        "price": 1100000,
        "link": "https://www.bayut.com/property/details-11584439.html",
        "is_today_listing": false
      },
      {
        "price": 1230000,
        "link": "https://www.bayut.com/property/details-11270217.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Premium Finishes | Unmatched Elegance | Pool View | Bayut.com",
    "price": "AED 769,999",
    "price_number": 769999,
    "location": "Binghatti Tulip, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11978697.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-tulip/",
    "top_3_prices": [
      {
        "price": 650000,
        "link": "https://www.bayut.com/property/details-10985906.html",
        "is_today_listing": false
      },
      {
        "price": 670000,
        "link": "https://www.bayut.com/property/details-11976571.html",
        "is_today_listing": false
      },
      {
        "price": 675000,
        "link": "https://www.bayut.com/property/details-11569330.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Community View | Prime Location | Spacious Unit | Bayut.com",
    "price": "AED 745,000",
    "price_number": 745000,
    "location": "May Residence Tower 1, May Residence, JVC District 10, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "899 sqft",
    "link": "https://www.bayut.com/property/details-11978696.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-10/may-residence/may-residence-tower-1/",
    "top_3_prices": [
      {
        "price": 745000,
        "link": "https://www.bayut.com/property/details-11978696.html",
        "is_today_listing": true
      },
      {
        "price": 765000,
        "link": "https://www.bayut.com/property/details-11668380.html",
        "is_today_listing": false
      },
      {
        "price": 860000,
        "link": "https://www.bayut.com/property/details-11598795.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Brandnew 1BR | Pool View | Spacious Bright Balcony | Bayut.com",
    "price": "AED 1,150,000",
    "price_number": 1150000,
    "location": "Binghatti Azure, JVC District 16, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "679 sqft",
    "link": "https://www.bayut.com/property/details-11978691.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-16/binghatti-azure/",
    "top_3_prices": [
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11800254.html",
        "is_today_listing": false
      },
      {
        "price": 1000000,
        "link": "https://www.bayut.com/property/details-11800201.html",
        "is_today_listing": false
      },
      {
        "price": 1049000,
        "link": "https://www.bayut.com/property/details-11765193.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Furnished l City View l Prime Location | Bayut.com",
    "price": "AED 750,000",
    "price_number": 750000,
    "location": "DAMAC Ghalia, JVC District 18, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11978418.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-18/damac-ghalia/",
    "top_3_prices": [
      {
        "price": 540000,
        "link": "https://www.bayut.com/property/details-11976177.html",
        "is_today_listing": false
      },
      {
        "price": 550000,
        "link": "https://www.bayut.com/property/details-8119224.html",
        "is_today_listing": false
      },
      {
        "price": 559999,
        "link": "https://www.bayut.com/property/details-11891141.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "City View l Prime Location l Modern | Bayut.com",
    "price": "AED 760,000",
    "price_number": 760000,
    "location": "DAMAC Ghalia, JVC District 18, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11978417.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-18/damac-ghalia/",
    "top_3_prices": [
      {
        "price": 540000,
        "link": "https://www.bayut.com/property/details-11976177.html",
        "is_today_listing": false
      },
      {
        "price": 550000,
        "link": "https://www.bayut.com/property/details-8119224.html",
        "is_today_listing": false
      },
      {
        "price": 559999,
        "link": "https://www.bayut.com/property/details-11891141.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Elevated Living | Iconic Skyline Views | Smart Home Features | Bayut.com",
    "price": "AED 1,100,000",
    "price_number": 1100000,
    "location": "Binghatti Gardenia, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "642 sqft",
    "link": "https://www.bayut.com/property/details-11978132.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/binghatti-gardenia/",
    "top_3_prices": [
      {
        "price": 899999,
        "link": "https://www.bayut.com/property/details-11783365.html",
        "is_today_listing": false
      },
      {
        "price": 915000,
        "link": "https://www.bayut.com/property/details-11717611.html",
        "is_today_listing": false
      },
      {
        "price": 920000,
        "link": "https://www.bayut.com/property/details-11879750.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "Modern Amenities | Luxury Living | Highest ROI | Bayut.com",
    "price": "AED 1,884,999",
    "price_number": 1884999,
    "location": "Dusk by Binghatti, JVC District 16, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "937 sqft",
    "link": "https://www.bayut.com/property/details-11977993.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-16/dusk-by-binghatti/",
    "top_3_prices": [
      {
        "price": 1300000,
        "link": "https://www.bayut.com/property/details-10486798.html",
        "is_today_listing": false
      },
      {
        "price": 1323000,
        "link": "https://www.bayut.com/property/details-11403657.html",
        "is_today_listing": false
      },
      {
        "price": 1323000,
        "link": "https://www.bayut.com/property/details-11282546.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "POOL VIEW | FULLY FURNISHED | VACANT ON TRANSFER | Bayut.com",
    "price": "AED 900,000",
    "price_number": 900000,
    "location": "Oxford Terraces, JVC District 11, Jumeirah Village Circle (JVC), Dubai",
    "beds": "Studio",
    "bedroom_count": "0",
    "size": "",
    "link": "https://www.bayut.com/property/details-11977991.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-11/oxford-terraces/",
    "top_3_prices": [
      {
        "price": 820000,
        "link": "https://www.bayut.com/property/details-11790372.html",
        "is_today_listing": false
      },
      {
        "price": 850000,
        "link": "https://www.bayut.com/property/details-11772762.html",
        "is_today_listing": false
      },
      {
        "price": 900000,
        "link": "https://www.bayut.com/property/details-11977991.html",
        "is_today_listing": true
      }
    ]
  },
  {
    "title": "HUGE LAYOUT I 2 BR APPARTMENT IN LOWEST PRICE | Bayut.com",
    "price": "AED 1,325,000",
    "price_number": 1325000,
    "location": "Dar Al Jawhara Residence, JVC District 13, Jumeirah Village Circle (JVC), Dubai",
    "beds": "2 Bed",
    "bedroom_count": "2",
    "size": "1,148 sqft",
    "link": "https://www.bayut.com/property/details-11977985.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-13/dar-al-jawhara-residence/",
    "top_3_prices": [
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-10950129.html",
        "is_today_listing": false
      },
      {
        "price": 1241962,
        "link": "https://www.bayut.com/property/details-11876626.html",
        "is_today_listing": false
      },
      {
        "price": 1250500,
        "link": "https://www.bayut.com/property/details-11802167.html",
        "is_today_listing": false
      }
    ]
  },
  {
    "title": "VACANT | MOVE IN READY | SPACIOUS LAYOUT | Bayut.com",
    "price": "AED 1,000,000",
    "price_number": 1000000,
    "location": "Aria Residence, JVC District 14, Jumeirah Village Circle (JVC), Dubai",
    "beds": "1 Bed",
    "bedroom_count": "1",
    "size": "678 sqft",
    "link": "https://www.bayut.com/property/details-11977765.html",
    "building_url": "https://www.bayut.com/for-sale/apartments/dubai/jumeirah-village-circle-jvc/jvc-district-14/aria-residence/",
    "top_3_prices": [
      {
        "price": 950000,
        "link": "https://www.bayut.com/property/details-11784270.html",
        "is_today_listing": false
      },
      {
        "price": 950000,
        "link": "https://www.bayut.com/property/details-11373654.html",
        "is_today_listing": false
      },
      {
        "price": 950000,
        "link": "https://www.bayut.com/property/details-11866290.html",
        "is_today_listing": false
      }
    ]
  }

];

// Utility to generate a unique ID for each listing
function generateId(listing, idx) {
  // Use a hash of title+location or fallback to index
  return (
    (listing.title && listing.location)
      ? `${listing.title}-${listing.location}`.replace(/[^a-zA-Z0-9]/g, "").slice(0, 24) + idx
      : `listing-${idx}`
  );
}

// Normalization function to match PropertyListing interface
function normalizeListing(listing, idx) {
  // Extract area and building from location
  let area = "";
  let building = "";
  if (listing.location) {
    const parts = listing.location.split(",");
    if (parts.length > 1) {
      building = parts[0].trim();
      area = parts.slice(1).join(",").replace("Dubai", "").trim();
    } else {
      area = listing.location;
    }
  }
  // Property type and bedrooms
  let propertyType = (listing.beds || "").includes("Studio") ? "Studio" : (listing.beds || "").replace(/\d+\s*Bed/, "Apartment").trim();
  let bedrooms = (listing.bedroom_count && !isNaN(Number(listing.bedroom_count))) ? Number(listing.bedroom_count) : (listing.beds && listing.beds.includes("Studio") ? 0 : 1);
  // Key features (extract from title or set empty)
  let keyFeatures = [];
  if (listing.title) {
    keyFeatures = listing.title.split("|").map(f => f.replace("Bayut.com", "").trim()).filter(f => f && f.length > 0);
  }
  // ROI (mocked for now)
  let roiPercentage = 7 + (idx % 4); // 7-10% for demo
  // Opportunity reason (mocked)
  let opportunityReason = "Cheapest in Building";
  // Off plan, motivated seller, payment plan (mocked)
  let isOffPlan = false;
  let isMotivatedSeller = false;
  let hasPaymentPlan = false;
  if (listing.title && /off[- ]?plan|ready to move|brand new/i.test(listing.title)) isOffPlan = true;
  if (listing.title && /motivated|negotiable/i.test(listing.title)) isMotivatedSeller = true;
  if (listing.title && /payment plan|installment/i.test(listing.title)) hasPaymentPlan = true;
  // Price drop today (if top_3_prices has is_today_listing true and price is lowest)
  let priceDropToday = false;
  if (listing.top_3_prices && Array.isArray(listing.top_3_prices)) {
    const todayIdx = listing.top_3_prices.findIndex(p => p.is_today_listing);
    if (todayIdx !== -1) {
      const minPrice = Math.min(...listing.top_3_prices.map(p => p.price));
      if (listing.top_3_prices[todayIdx].price === minPrice) priceDropToday = true;
    }
  }
  // Top 3 prices
  let top3Prices = (listing.top_3_prices || []).map(p => ({
    price: p.price,
    link: p.link,
    is_today_listing: p.is_today_listing || false
  }));
  // Price drop amount/percentage (if today listing is not the highest)
  let priceDropAmount = null;
  let priceDropPercentage = null;
  if (priceDropToday && top3Prices.length > 1) {
    const nextMin = Math.min(...top3Prices.filter(p => !p.is_today_listing).map(p => p.price));
    priceDropAmount = nextMin - listing.price_number;
    priceDropPercentage = Math.round((priceDropAmount / nextMin) * 100);
  }
  // ID
  const id = generateId(listing, idx);
  // Bayut link
  const bayutLink = listing.link;
  // Building url
  const buildingUrl = listing.building_url;
  // Current price
  const currentPrice = listing.price_number;
  // Original title
  const originalTitle = listing.title;
  return {
    id,
    originalTitle,
    currentPrice,
    area,
    building,
    propertyType,
    bedrooms,
    roiPercentage,
    keyFeatures,
    opportunityReason,
    isOffPlan,
    isMotivatedSeller,
    hasPaymentPlan,
    priceDropToday,
    priceDropAmount,
    priceDropPercentage,
    top3Prices,
    bayutLink,
    buildingUrl,
  };
}

export const mockListings = rawListings.map(normalizeListing);

export type { PropertyListing } from "./mockListings.json";