import React, { useEffect, useState } from 'react'


// NOTE: This is a placeholder admin page that shows mock items. Replace with server-driven data.
export default function Admin(){
const [items,setItems] = useState([])
useEffect(()=>{
// create mock items
const sample = Array.from({length:6}).map((_,i)=>({ id:String(i+1), category:['pothole','sanitation','streetlight'][i%3], description:`Sample issue ${i+1}`, status: ['open','assigned','resolved'][i%3], createdAt: new Date(Date.now()-i*3600_000).toISOString() }))
setItems(sample)
},[])


return (
<div className="container">
<section className="card">
<h2>Admin Dashboard</h2>
<div className="list">
{items.map(it=> (
<div key={it.id} className="list-item">
<div className="meta">
<div><strong>#{it.id}</strong> — {it.category}</div>
<div className="muted small">{it.description}</div>
</div>
<div className={`status ${it.status}`}>{it.status}</div>
</div>
))}
</div>
</section>
</div>
)
}