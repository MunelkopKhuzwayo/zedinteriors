export function Quote() {
  const capeTownLocation = { lat: -33.9281, lng: 18.4576 }; // Coordinates for Cape Town

  return (
    <section className="container py-20 text-center md:py-24">
      <blockquote className="text-2xl italic text-muted-foreground md:text-3xl">
        &ldquo;"Light isn’t just illumination—it’s a silent architect. It sculpts walls, breathes life into texture, and tells time without ticking. An interior without thoughtful lighting is a canvas without contrast.&rdquo;
      </blockquote>
      <footer className="mt-4 text-sm text-foreground/60">
        - Zed
      </footer>
      {/* Map Section */}
      <div className="mt-12 w-full max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Find Us Here</h2>
        <div className="relative mt-4 h-80 w-full overflow-hidden rounded-lg shadow-lg">
          {/* Using Google Maps Embed API or similar. Replace with your actual map implementation */}
          {/* This is a placeholder. You would typically use a library like react-google-maps or react-leaflet */}
          <iframe
            width="100%"
            height="100%"
            style={{ border: 10 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${capeTownLocation.lat},${capeTownLocation.lng}&z=15&output=embed`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}
