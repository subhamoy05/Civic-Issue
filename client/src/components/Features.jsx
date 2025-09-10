import React from "react";

export default function Features() {
	const items = [
		{ title: "Photo + Location", desc: "Attach images and capture exact location." },
		{ title: "Priority routing", desc: "Automatic routing to the correct department." },
		{ title: "Track progress", desc: "Status updates from confirmation to resolution." },
		{ title: "Analytics", desc: "Dashboards for hotspots and response times." },
	];

	return (
		<section className="features card">
			<h3>Key features</h3>
			<div className="features-grid">
				{items.map((i) => (
					<div key={i.title} className="feature">
						<div className="dot" />
						<div>
							<strong>{i.title}</strong>
							<div className="muted">{i.desc}</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
