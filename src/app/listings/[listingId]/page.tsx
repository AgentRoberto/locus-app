'use client';
import React from 'react';
import Image from 'next/image';
import space from '../../../../public/space.png';
import lucky from '../../../../public/lucky.jpeg';
import Link from 'next/link';

export default function ListingPage({ params }: { params: { listingId: string } }) {
  const { listingId } = params;
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
  ];

  const fetchListingDetails = (listingId: string) => {
    // Use the ID to find the listing details
    const listing = mockListings.find((listing) => String(listing.id) === String(listingId));
    return listing;
  };

  const listing = fetchListingDetails(listingId);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto p-8">
        <Link href="/" passHref>
          <p className="text-blue-500 hover:text-blue-700 text-lg">&larr; Back</p>
        </Link>
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <Image
                src={listing.imageUrl.src}
                alt={`Listing ${listingId}`}
                layout="responsive"
                width={1200}
                height={800}
              />
            </div>
            <div className="md:w-1/2 p-8 bg-[#fff]">
              <h1 className="text-3xl font-semibold mb-4">{`Listing Details for ID: ${listingId}`}</h1>
              <p className="text-lg mb-2">{`Location: ${listing.location}`}</p>
              <p className="text-lg mb-2">{`Date: ${listing.date}`}</p>
              <div className="flex flex-wrap">
                <p className="text-lg mb-4 mr-4">{`Services: ${listing.services.join(', ')}`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
