import "./Photos.css";

export default function Photos({ photos }) {
  // Safety check: only render if photos is an array with items
  if (!photos || !Array.isArray(photos) || photos.length === 0) {
    return null;
  }

  return (
    <div className="Photos row mt-3">
      {photos.map((photo, index) => {
        const src = photo?.src?.landscape || "";
        const alt = photo?.alt || "photo";

        return (
          <div className="col-6 col-md-4 mb-3" key={index}>
            <img src={src} alt={alt} className="img-fluid rounded" />
          </div>
        );
      })}
    </div>
  );
}
