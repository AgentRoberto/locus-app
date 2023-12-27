'use client';
import React from 'react';
import space from '../../../public/space.png'
import lucky from '../../../public/lucky.jpeg'
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesList({ location, startDate, services }) {
  const mockListings = [
    {
      id: 1,
      imageUrl: space,
      name: 'John Doe',
      rating: '5',
      price: '50',
      services: ['Bartender'],
    },
    {
      id: 2,
      imageUrl: lucky,
      name: 'John Jones',
      rating: '4',
      price: '20',
      services: ['DJ'],
    },
    {
      id: 3,
      imageUrl: space,
      name: 'John Jane',
      rating: '3',
      price: '10',
      services: ['Catering'],
    },
    {
      id: 4,
      imageUrl: space,
      name: 'Rob Doe',
      rating: '5',
      price: '500',
      services: ['Event Planner'],
    },
    {
      id: 5,
      imageUrl: space,
      name: 'Rob Jones',
      rating: '4.8',
      price: '100',
      services: ['DJ'],
    },
    {
      id: 6,
      imageUrl: space,
      name: 'Ray Doe',
      rating: '5',
      price: '30',
      services: ['DJ'],
    },
    {
      id: 7,
      imageUrl: space,
      name: 'Ray Joe',
      rating: '1',
      price: '90',
      services: ['Event Planner'],
    },
  ];

  const filteredListings = mockListings.filter(listing => {
    const isLocationMatch = !location || listing.name.toLowerCase() === location.toLowerCase();
    const isDateMatch = !startDate || listing.date === startDate.toISOString().split('T')[0];
    const areServicesMatch = !services || services.every((service: string) => listing.services.includes(service));
    return isLocationMatch && isDateMatch && areServicesMatch;
  });

  return (
    <div className="search-list px-12 py-6">
      <div style={{ display: 'flex', gap: '70%' }}>
        <h2 className="text-lg font-semibold mb-4">Select a Service</h2>
        <Link href={'/confirmation'}>
          <h2 className="text-lg text-right md:text-right font-semibold mb-4">Complete Booking</h2>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-[#fff] rounded-lg shadow-md p-4">
            <Link href={`/services/${listing.id}`} passHref>
              <div className="flex items-center">
                <div className="w-24 h-24 mr-4 ">
                  <Image
                    src={listing.imageUrl}
                    alt={`Listing ${listing.id}`}
                    className="rounded-lg"
                    width={96}
                    height={96}
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Name: {listing.name}</p>
                  <p className="text-sm text-gray-600 mb-1">Rating: {listing.rating}</p>
                  <p className="text-sm text-gray-600">Services: {listing.services.join(', ')}</p>
                  <h1 className="text-lg text-gray-600">Pricing: ${listing.price}/hr</h1>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
