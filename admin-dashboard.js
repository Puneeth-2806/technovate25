// Load complaints from localStorage
const container = document.getElementById("complaints-container");

function generateRefID(index, timestamp) {
  return `REF-${timestamp.split("T")[0].replaceAll("-", "")}-${index + 1}`;
}

function loadComplaints() {
  const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");

  if (complaints.length === 0) {
    container.innerHTML = "<p style='color: white;'>No complaints found.</p>";
    return;
  }

  complaints.forEach((complaint, index) => {
    const refID = generateRefID(index, complaint.timestamp);
    const card = document.createElement("div");
    card.className = "complaint-card";
    card.style = `
      background: #1a1a1a;
      border: 1px solid gold;
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 12px;
      color: white;
    `;

    card.innerHTML = `
      <h3 style="color: gold;">${refID}</h3>
      <p><strong>Category:</strong> ${complaint.category}</p>
      <p><strong>Details:</strong> ${complaint.details}</p>
      <p><small><strong>Submitted on:</strong> ${complaint.timestamp}</small></p>
    `;

    container.appendChild(card);
  });

  lucide.createIcons();
}

loadComplaints();
