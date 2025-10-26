import React from 'react';

export const FaviconGenerator = () => {
  // Generate favicon from SVG
  const svgData = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="8" fill="#915EFF"/>
    <circle cx="32" cy="32" r="28" fill="#050816"/>
    <circle cx="32" cy="32" r="24" fill="none" stroke="#915EFF" stroke-width="2"/>
    <g stroke="#00CEA8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 18 20 L 22 32 L 18 44"/>
      <path d="M 46 20 L 42 32 L 46 44"/>
    </g>
    <circle cx="32" cy="32" r="3" fill="#00CEA8"/>
  </svg>`;

  const canvas = React.useRef();
  
  React.useEffect(() => {
    const ctx = canvas.current?.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 64, 64);
      const favicon = canvas.current?.toDataURL();
      if (favicon) {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = favicon;
        document.head.appendChild(link);
      }
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};
