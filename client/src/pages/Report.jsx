import React, { useState, useRef, useEffect } from "react";

function Report() {
  const [category, setCategory] = useState("pothole");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [msg, setMsg] = useState(null);
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
      const res = await fetch("http://localhost:5000/api/issues", {
        method: "POST",
        body: form,
      });

      const data = await res.json(); // ✅ this will now work

      if (data.success) {
        setMsg({ type: "success", text: `Submitted — ID ${data.data._id}` });
        setDesc("");
        setPhoto(null);
        if (fileRef.current) fileRef.current.value = null;
      } else {
        setMsg({ type: "error", text: "Failed to submit" });
      }
    } catch {
      setMsg({ type: "error", text: "Server not responding" });
    }
  }

  return (
    <div className="container">
      <section className="card">
        <h2>Report an Issue</h2>
        <form onSubmit={submit} className="report-form">
          <div className="row">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="pothole">Pothole / Road</option>
              <option value="streetlight">Streetlight</option>
              <option value="sanitation">Sanitation</option>
              <option value="water">Water leakage</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="row">
            <label>Description</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={4}
              placeholder="Short description (what + where)"
            ></textarea>
          </div>

          <div className="row">
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
                className="photo-preview"
              />
            )}
          </div>

          <div className="row inline">
            <div className="muted">
              {location
                ? `Location: ${location.lat.toFixed(4)}, ${location.lng.toFixed(
                    4
                  )}`
                : "Location not detected"}
            </div>
            <button type="submit" className="btn primary">
              Submit
            </button>
          </div>

          {msg && <div className={`msg ${msg.type}`}>{msg.text}</div>}
        </form>
      </section>
    </div>
  );
}

export default Report;
