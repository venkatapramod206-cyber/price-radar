// PricePro — Alerts Page
let alerts = [];

document.addEventListener("DOMContentLoaded", () => {
  loadAlerts();
  renderActiveAlerts();
  document.getElementById("create-alert-btn")?.addEventListener("click", createAlert);
});

function loadAlerts() {
  try { alerts = JSON.parse(localStorage.getItem("pp_alerts") || "[]"); } catch(e) { alerts = []; }
}

function saveAlerts() {
  try { localStorage.setItem("pp_alerts", JSON.stringify(alerts)); } catch(e) {}
}

function createAlert() {
  const product = document.getElementById("alert-product").value.trim();
  const category = document.getElementById("alert-category").value;
  const current = document.getElementById("alert-current").value;
  const target = document.getElementById("alert-target").value;
  const email = document.getElementById("alert-email").value.trim();
  const resp = document.getElementById("alert-response");

  if (!product || !target || !email) {
    resp.innerHTML = `<div class="alert-response-error">⚠️ Please fill in Product Name, Target Price, and Email.</div>`;
    resp.style.display = "block"; return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    resp.innerHTML = `<div class="alert-response-error">⚠️ Please enter a valid email address.</div>`;
    resp.style.display = "block"; return;
  }
  if (parseInt(target) >= parseInt(current || 999999999)) {
    resp.innerHTML = `<div class="alert-response-error">⚠️ Target price should be lower than current price.</div>`;
    resp.style.display = "block"; return;
  }

  const alert = {
    id: Date.now(), product, category, current: parseInt(current) || null,
    target: parseInt(target), email,
    notifyEmail: document.getElementById("notify-email").checked,
    notifySMS: document.getElementById("notify-sms").checked,
    notifyWhatsApp: document.getElementById("notify-whatsapp").checked,
    created: new Date().toLocaleDateString("en-IN", { day:"numeric", month:"short", year:"numeric" })
  };

  alerts.unshift(alert);
  saveAlerts();
  renderActiveAlerts();

  resp.innerHTML = `<div class="alert-response-success">✅ Alert created! We'll notify <strong>${email}</strong> when <strong>${product}</strong> drops to <strong>₹${parseInt(target).toLocaleString("en-IN")}</strong> or below.</div>`;
  resp.style.display = "block";

  // Reset form
  document.getElementById("alert-product").value = "";
  document.getElementById("alert-category").value = "";
  document.getElementById("alert-current").value = "";
  document.getElementById("alert-target").value = "";
  document.getElementById("alert-email").value = "";

  setTimeout(() => { resp.style.display = "none"; }, 6000);
}

function deleteAlert(id) {
  alerts = alerts.filter(a => a.id !== id);
  saveAlerts();
  renderActiveAlerts();
}

function renderActiveAlerts() {
  const list = document.getElementById("active-alerts-list");
  const count = document.getElementById("active-alerts-count");
  if (!list) return;
  if (count) count.textContent = `${alerts.length} alert${alerts.length !== 1 ? "s" : ""}`;

  if (!alerts.length) {
    list.innerHTML = `<div class="empty-state"><div style="font-size:40px;margin-bottom:12px;">🔕</div><p>No alerts yet. Create your first alert to get started!</p></div>`;
    return;
  }

  list.innerHTML = alerts.map(a => `
    <div class="active-alert-item">
      <div class="active-alert-info">
        <div class="active-alert-name">${a.product}</div>
        <div class="active-alert-meta">${a.category || "All categories"} · Added ${a.created} · Notify: ${[a.notifyEmail?"Email":"", a.notifySMS?"SMS":"", a.notifyWhatsApp?"WhatsApp":""].filter(Boolean).join(", ")}</div>
      </div>
      <div style="text-align:right;margin-left:12px;">
        <div class="active-alert-target">₹${a.target.toLocaleString("en-IN")}</div>
        ${a.current ? `<div style="font-size:11px;color:#94a3b8;margin-top:2px;">Current: ₹${a.current.toLocaleString("en-IN")}</div>` : ""}
      </div>
      <button class="delete-alert-btn" onclick="deleteAlert(${a.id})" title="Delete alert">🗑️</button>
    </div>
  `).join("");
}

function prefillAlert(product, price) {
  document.getElementById("alert-product").value = product;
  document.getElementById("alert-current").value = price;
  document.getElementById("alert-target").value = Math.round(price * 0.9);
  document.getElementById("alert-product").scrollIntoView({ behavior: "smooth" });
  document.getElementById("alert-email").focus();
}
