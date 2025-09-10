import React, { useState, useRef, useEffect } from "react";
import { ClipLoader } from "react-spinners";

function Report() {
  const [category, setCategory] = useState(""); // Start empty now
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [msg, setMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (p) =>
          setLocation({
            lat: p.coords.latitude,
            lng: p.coords.longitude,
          }),
        () => {},
        { timeout: 5000 }
      );
    }
  }, []);

  async function submit(e) {
    e.preventDefault();
    setMsg(null);

    const form = new FormData();
    form.append("category", category);
    form.append("description", desc);
    if (photo) form.append("photo", photo);
    if (location) {
      form.append("lat", location.lat);
      form.append("lng", location.lng);
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/issues", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (data.success) {
        setMsg({ type: "success", text: `Submitted — ID ${data.data._id}` });
        setDesc("");
        setPhoto(null);
        setCategory(""); // reset category if you want
        if (fileRef.current) fileRef.current.value = null;
      } else {
        setMsg({ type: "error", text: "Failed to submit" });
      }
      setLoading(false);
    } catch {
      setMsg({ type: "error", text: "Server not responding" });
      setLoading(false);
    }
  }

  // Category button definitions
  const categories = [
    {id: "road", label: "Road"},
    {id: "light", label: "Light"},
    {id: "waste", label: "Waste"},
  ];

  return (
    <div className="container">
      <section className="card">
        <h2>Report an Issue</h2>
        <form onSubmit={submit} className="report-form">
          <div className="mb-6 flex gap-4">
            {categories.map(cat => (
              <button
                type="button"
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded font-semibold border
                  ${category === cat.id 
                    ? "bg-green-500 text-white border-green-700"
                    : "bg-white text-green-700 border-green-500"}
                    hover:bg-green-600 hover:text-white transition-colors
                `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {category && (
            <>
              <div className="row mb-4">
                <label>Description</label>
                <textarea
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  rows={4}
                  placeholder="Short description (what + where)"
                  required
                ></textarea>
              </div>

              <div className="row mb-4">
                <label>Photo (optional)</label>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
                {photo && (
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="preview"
                    className="photo-preview mt-2"
                  />
                )}
              </div>
            </>
          )}

          <div className="row inline">
            <div className="muted">
              {location
                ? `Location: ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
                : "Location not detected"}
            </div>
            <button 
              type="submit" 
              className="btn primary "
              disabled={!category || !desc}
            >
              {loading ? <ClipLoader size={20} /> : "Submit"}
            </button>
          </div>

          {msg && <div className={`msg ${msg.type}`}>{msg.text}</div>}
        </form>
      </section>
    </div>
  );
}

export default Report;
