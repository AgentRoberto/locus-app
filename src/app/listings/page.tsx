'use client';
import React from 'react';
import space from '../../../public/space.png'
import lucky from '../../../public/lucky.jpeg'
import Image from 'next/image';
import Link from 'next/link';

export default function SearchList({ location, startDate, services }) {
  // Mock data - replace this with actual data or API fetch
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

  const filteredListings = mockListings.filter(listing => {
    const isLocationMatch = !location || listing.location.toLowerCase() === location.toLowerCase();
    const isDateMatch = !startDate || listing.date === startDate.toISOString().split('T')[0];
    const areServicesMatch = !services || services.every((service: string) => listing.services.includes(service));
    return isLocationMatch && isDateMatch && areServicesMatch;
  });

  return (
    <div className="search-list bg-[#fff] text-[#dc9d9d] px-4 py-6">
      <div style={{display: 'flex',gap: '70%'}}>
        <h2 className="text-lg font-semibold mb-4">Events</h2>
        <Link href={'/services'}>
          <h2 className="text-lg text-right md:text-right font-semibold mb-4">Next: Services</h2>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map(listing => (
          <div key={listing.id} className="bg-white rounded-lg shadow-md p-4">
          <Link href={`/listings/${listing.id}`} passHref>
            <Image src={listing.imageUrl} alt={`Listing ${listing.id}`} className="w-full mb-2 rounded-lg" />
            <p className="text-sm text-gray-600 mb-1">Location: {listing.location}</p>
            <p className="text-sm text-gray-600 mb-1">Date: {listing.date}</p>
            <p className="text-sm text-gray-600">Services: {listing.services.join(', ')}</p>
          </Link>
        </div>
        ))}
      </div>
    </div>
  );
};
