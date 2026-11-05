
import { useState } from 'react'
import './App.css'

const medications = [
  {
    id: 1,
    name: 'Paracetamol',
    strength: '500mg tablets',
    dosage: '2 tablets',
    route: 'Oral',
    time: '08:00',
    status: 'Complete',
    instructions: 'Take with water',
  },
  {
    id: 2,
    name: 'Amlodipine',
    strength: '5mg tablets',
    dosage: '1 tablet',
    route: 'Oral',
    time: '12:00',
    status: 'Due Soon',
    instructions: 'Once daily',
  },
  {
    id: 3,
    name: 'Vitamin D',
    strength: '1000 IU capsules',
    dosage: '1 capsule',
    route: 'Oral',
    time: '14:00',
    status: 'Scheduled',
    instructions: 'Take with food',
  },
  {
    id: 4,
    name: 'Sertraline',
    strength: '50mg tablets',
    dosage: '1 tablet',
    route: 'Oral',
    time: '18:00',
    status: 'Overdue',
    instructions: 'Once daily',
  },
]

const filters = ['All', 'Scheduled', 'Due Soon', 'Overdue', 'Complete']

function App() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredMedications =
    activeFilter === 'All'
      ? medications
      : medications.filter(
          (medication) => medication.status === activeFilter
        )

  const completeCount = medications.filter(
    (medication) => medication.status === 'Complete'
  ).length

  const dueSoonCount = medications.filter(
    (medication) => medication.status === 'Due Soon'
  ).length

  const overdueCount = medications.filter(
    (medication) => medication.status === 'Overdue'
  ).length

  return (
    <div className="app-shell">
      {/* Main application navigation */}
      <aside className="app-rail">
        <div className="rail-logo" title="Health Connect">
          H
        </div>

        <nav className="rail-navigation" aria-label="Main navigation">
          <button className="rail-button" title="Dashboard" aria-label="Dashboard">
            <span>⌂</span>
          </button>
          <button className="rail-button active" title="Service Users" aria-label="Service Users">
            <span>♙</span>
          </button>
          <button className="rail-button" title="Daily Records" aria-label="Daily Records">
            <span>▤</span>
          </button>
          <button className="rail-button" title="Appointments" aria-label="Appointments">
            <span>▦</span>
          </button>
          <button className="rail-button" title="Medication" aria-label="Medication">
            <span>▣</span>
          </button>
        </nav>

        <div className="rail-profile" title="Sarah Clarke">
          SC
        </div>
      </aside>

      {/* Main page */}
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-brand">
            <span className="topbar-brand-name">Health Connect</span>
            <span className="topbar-divider">/</span>
            <span className="topbar-product">Electronic Care Record</span>
          </div>

          <div className="topbar-user">
            <div className="topbar-avatar">SC</div>
            <span>Sarah Clarke</span>
            <span className="dropdown-arrow">⌄</span>
          </div>
        </header>

        <div className="page-container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <span>Service Users</span>
            <span>›</span>
            <span>James Mitchell</span>
            <span>›</span>
            <strong>Medication</strong>
          </div>

          {/* Page heading */}
          <div className="page-heading">
            <div>
              <h1>Medication</h1>
              <p>View and manage Service User medication</p>
            </div>

            <button className="button button-secondary">
              <span>‹</span> Back to Service User
            </button>
          </div>

          {/* Service User information */}
          <section className="service-user-card">
            <div className="service-user-avatar">JM</div>

            <div className="user-details">
              <span className="eyebrow">SERVICE USER</span>
              <h2>James Mitchell</h2>
              <p>Service User ID: SU-00124 <span>·</span> Meadow View</p>
            </div>

            <div className="user-status">
              <span className="status-dot"></span>
              Active
            </div>
          </section>

          {/* Service User contextual navigation */}
          <nav className="context-navigation" aria-label="Service User sections">
            <button>Overview</button>
            <button>Daily Records</button>
            <button>Appointments</button>
            <button className="context-active">Medication</button>
            <button>Assessments</button>
            <button>Documents</button>
          </nav>

          {/* Medication overview */}
          <section className="page-intro">
            <div>
              <h2>Today's medication</h2>
              <p>Medication schedule and administration overview</p>
            </div>

            <div className="date-label">
              <span className="calendar-icon">▦</span>
              Thursday, 5 November 2026
            </div>
          </section>

          {/* Summary cards */}
          <section className="summary-grid">
            <div className="summary-card">
              <span className="summary-label">TOTAL SCHEDULED</span>
              <strong>{medications.length}</strong>
              <span className="summary-note">Medication entries</span>
            </div>

            <div className="summary-card">
              <span className="summary-label">COMPLETED</span>
              <strong>{completeCount}</strong>
              <span className="summary-note">Recorded as complete</span>
            </div>

            <div className="summary-card">
              <span className="summary-label">DUE SOON</span>
              <strong>{dueSoonCount}</strong>
              <span className="summary-note">Upcoming medication</span>
            </div>

            <div className="summary-card">
              <span className="summary-label">OVERDUE</span>
              <strong>{overdueCount}</strong>
              <span className="summary-note">Requires attention</span>
            </div>
          </section>

          {/* Daily schedule */}
          <section className="schedule-section">
            <div className="schedule-heading">
              <div>
                <h2>Daily schedule</h2>
                <p>Medication entries in chronological order</p>
              </div>

              <span className="entry-count">
                {filteredMedications.length} entries
              </span>
            </div>

            {/* Medication filters */}
            <div className="filters" aria-label="Filter medication entries">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-button ${
                    activeFilter === filter ? 'selected' : ''
                  }`}
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Medication entries */}
            <div className="medication-list">
              {filteredMedications.map((medication) => (
                <article className="medication-card" key={medication.id}>
                  <div className="medication-time">
                    <strong>{medication.time}</strong>
                    <span>Today</span>
                  </div>

                  <div className="medication-info">
                    <h3>{medication.name}</h3>
                    <p>{medication.strength}</p>

                    <div className="medication-meta">
                      <span>{medication.dosage}</span>
                      <span>{medication.route}</span>
                    </div>

                    <small>{medication.instructions}</small>
                  </div>

                  <div
                    className={`medication-status ${medication.status
                      .toLowerCase()
                      .replace(' ', '-')}`}
                  >
                    <span></span>
                    {medication.status}
                  </div>

                  <button
                    className="button button-secondary details-button"
                    onClick={() =>
                      window.alert(
                        `${medication.name}\n${medication.dosage}\nRoute: ${medication.route}\nScheduled: ${medication.time}\n\nPrototype demonstration only.`
                      )
                    }
                  >
                    View details
                  </button>
                </article>
              ))}

              {filteredMedications.length === 0 && (
                <div className="empty-state">
                  No medication entries found for this status.
                </div>
              )}
            </div>
          </section>

          <footer className="prototype-footer">
            <span>Health Connect · Electronic Care Record</span>
            <span>Prototype demonstration data · Not for clinical use</span>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
