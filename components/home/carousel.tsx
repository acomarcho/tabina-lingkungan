'use client';

import { useState } from 'react';

export default function Carousel() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  
  return <h1>My carousel component.</h1>;
}
