# BLW Expenditure Analysis Dashboard

A full-stack web dashboard built for **Banaras Locomotive Works (BLW), Indian Railways** that digitises Purchase Order (PO) and CO6 contractor-bill tracking — replacing manual registers and spreadsheets with a live, searchable, AI-assisted system.

Built during a 2-week industrial internship at BLW's EDP office, Varanasi.

---

## 📌 What This Project Does

BLW handles a constant stream of:
- **Purchase Orders (PO)** — sanctioned capital budgets for materials, machinery, and contracted services
- **CO6 Bills** — contractor payment claims raised against those sanctions

Previously this was tracked manually across registers and Excel sheets, making it hard to spot budget overruns or missing records in real time. This dashboard centralises both into one live system with visual analytics and an AI insights layer that flags audit-worthy issues automatically.

---

## ✨ Features

- 📊 **Overview Dashboard** — total sanctioned amount, total claims, ledger efficiency, and monthly trend charts
- 📁 **PO Registry** — searchable, filterable table of all Purchase Orders with add/edit support
- 📁 **CO6 Registry** — contractor bill tracking, linked back to its parent PO, with missing-record flags
- 🤖 **AI Insights & Chatbot** — answers natural-language questions about the data and auto-flags risks (e.g. bills missing a Measurement Book entry, or POs nearing sanction exhaustion)
- 📈 **Forecasting Module (Phase 2)** — projects future expenditure across 3 planning scenarios, adjusted for seasonal spending patterns (monsoon slowdown, winter mobilisation, March fiscal year-end surge)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS |
| Charts | Chart.js |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas |
| AI Layer | Anthropic API (Claude) |

This is a **MERN-based stack** with Tailwind for styling and Claude powering the AI insights module.

---

## 🏗️ Architecture

```
React SPA (Vite)
   │  HTTPS / REST (JSON)
   ▼
Express.js API Server
   │  MongoDB Node.js Driver
   ▼
MongoDB Atlas
  ├── po_records
  └── co6_records
```

Every new PO/CO6 entry reflects instantly across all dashboard tabs since each tab reads live from the database, not a cached snapshot.

---

## 📂 Project Structure

```
BLW-EDP-Project/
├── server.ts                  # Express API server
├── db.js                      # MongoDB connection setup
├── index.html
├── src/
│   ├── App.tsx                 # Root component / tab routing
│   ├── main.tsx                 # Entry point
│   ├── types.ts                 # Shared TypeScript types
│   ├── index.css
│   ├── components/
│   │   ├── OverviewTab.tsx      # KPI summary + trend charts
│   │   ├── PosTab.tsx           # PO Registry
│   │   ├── Co6Tab.tsx           # CO6 Registry
│   │   ├── ForecastTab.tsx      # Forecasting module
│   │   └── AiInsightsTab.tsx    # AI insights & chatbot
│   └── assets/
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/expenditure/pos` | Fetch PO records (filterable by department/date) |
| POST | `/api/expenditure/pos` | Create a new PO record |
| GET | `/api/expenditure/co6` | Fetch CO6 bill records |
| POST | `/api/expenditure/co6` | Create a new CO6 bill record |
| POST | `/api/expenditure/insights` | Run the AI insights engine over current data |
| POST | `/api/expenditure/forecast` | *(Phase 2)* Get projected expenditure for a given scenario |

---

## 🗄️ Database Schema (MongoDB)

**`po_records`**
| Field | Type | Description |
|---|---|---|
| poNumber | String | Unique PO identifier |
| department | String | Electrical / Mechanical / S&T / Civil |
| budgetHead | String | Budget classification |
| sanctionedAmount | Number | Sanctioned value (₹ lakhs) |
| dateOfSanction | Date | Approval date |
| status | String | Active / Closed / Lapsed |

**`co6_records`**
| Field | Type | Description |
|---|---|---|
| co6Number | String | Unique CO6 bill identifier |
| poReference | String | Linked PO number |
| department | String | Claiming department |
| billAmount | Number | Claimed amount (₹ lakhs) |
| mbRecorded | Boolean | Whether Measurement Book entry exists |
| paymentStatus | String | Pending / Passed / Returned |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A MongoDB Atlas account (free tier works)
- An Anthropic API key (for the AI insights module)

### Setup

```bash
# Clone the repo
git clone https://github.com/Dev-priyanshu-tiwari/BLW-EDP-Project-.git
cd BLW-EDP-Project-

# Install dependencies
npm install
```

Create a `.env` file in the root directory:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
ANTHROPIC_API_KEY=your_anthropic_api_key
PORT=5000
```

Run the app:

```bash
# Start backend
npm run server

# Start frontend (in a separate terminal)
npm run dev
```

The app will be available at `http://localhost:5173` (frontend) with the API running on `http://localhost:5000`.

> ⚠️ Never commit your `.env` file — make sure it's listed in `.gitignore`.

---

## 🔄 Development Workflow

This project is managed using **GitHub Desktop**. The typical workflow for pushing changes:

1. **Make changes** to the code in VS Code.
2. Open **GitHub Desktop** — it auto-detects all changed/new files under the **Changes** tab.
3. **Select the files** you want to include (check the boxes), or check the top box to select all.
4. Write a short **commit summary** describing what changed (e.g. `Fix MongoDB Atlas connection`, `Add AI Insights tab`).
5. Click **Commit to main**.
6. Click **Push origin** to upload the commit to GitHub.

```
Edit code → Stage changes → Write commit message → Commit → Push origin
```

> 💡 Before committing, make sure `.env`, `node_modules/`, and any files with credentials (like the MongoDB connection string) are listed in `.gitignore` so they never get pushed to GitHub.

### Recommended Branching (optional, for cleaner history)

```bash
# Create a new branch for a feature/fix
git checkout -b feature/forecast-module

# Work, commit, then push the branch
git push origin feature/forecast-module

# Open a Pull Request on GitHub to merge into main
```

---

## 🔮 Future Scope

- Role-based authentication (Officer / Auditor / Admin)
- Full multi-scenario forecasting module
- Export dashboard/audit reports to PDF/Excel
- Automated threshold alerts when CO6 claims near PO exhaustion
- Integration with BLW's internal ERP/PFMS systems

---

## 👤 Author

**Priyanshu Tiwari**
B.Tech CSE, Dr. Ram Manohar Lohia Avadh University (IET)
Built during internship at Banaras Locomotive Works (BLW), Indian Railways

- GitHub: [@Dev-priyanshu-tiwari](https://github.com/Dev-priyanshu-tiwari)
- LinkedIn: [priyanshu-tiwari1117](https://linkedin.com/in/priyanshu-tiwari1117)
- Portfolio: [dev-priyanshu-tiwari.github.io/My-Portfolio](https://dev-priyanshu-tiwari.github.io/My-Portfolio)

---

## 📄 License

This project was built for academic and internship purposes as part of the curriculum at BLW Indian Railways

