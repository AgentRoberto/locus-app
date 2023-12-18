'use client';
import React from 'react';
import Image from 'next/image';
import space from '../../../../public/space.png';
import lucky from '../../../../public/lucky.jpeg';

export default function ListingPage( {params } : {params: {listingId: string}}) {
  const { listingId } = params
 
  const mockListings = [
    {
      id: 1,
      imageUrl: space,
      location: 'Miami',
      date: '2024-1-25',
      services: ['Bartender', 'DJ', 'Catering', 'Event Planner'],
    },
    {
      id: 2,
      imageUrl: lucky,
      location: 'Miami',
      date: '2024-2-25',
      services: ['Bartender', 'DJ', 'Catering'],
    },
    {
      id: 3,
      imageUrl: space,
      location: 'Miami',
      date: '2024-2-25',
      services: ['DJ', 'Catering', 'Event Planner'],
    },
    // More mock listings...
  ];
  
  const fetchListingDetails = (listingId) => {
    // Use the ID to find the listing details
    const listing = mockListings.find((listing) => String(listing.id) === String(listingId));
    return listing;
  };

  const listing = fetchListingDetails(listingId);

  if (!listing) {
    return <div>Loading...</div>;
  }
  // Display the details of the listing
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">{`Listing Details for ID: ${listingId}`}</h1>
      <p className="text-lg mb-2">{`Location: ${listing.location}`}</p>
      <p className="text-lg mb-2">{`Date: ${listing.date}`}</p>
      <p className="text-lg mb-4">{`Services: ${listing.services.join(', ')}`}</p>

      {/* Display other details as needed */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Venue Images</h2>
        {/* Use the Next.js Image component to display the images */}
        <div className="w-80 h-80">
          <Image src={listing.imageUrl.src} alt={`Listing ${listingId}`} width={500} height={500} />
        </div>
      </div>
    </div>
  );
};
