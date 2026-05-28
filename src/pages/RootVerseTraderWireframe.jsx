import React from "react";
import {
  Bell,
  Search,
  UserCircle,
  Truck,
  PackageCheck,
  ClipboardCheck,
  Boxes,
  Ship,
  Warehouse,
  FileText,
  Users,
  Plus,
  Phone,
  Eye,
  QrCode,
  MapPin,
  ArrowRight,
} from "lucide-react";

const summaryCards = [
  {
    title: "Pending Sources",
    value: "18",
    note: "Harvest requests waiting",
    icon: ClipboardCheck,
    badge: "Needs Review",
  },
  {
    title: "Active Procurement",
    value: "09",
    note: "Accepted source operations",
    icon: Ship,
    badge: "Active",
  },
  {
    title: "Quality Completed",
    value: "31",
    note: "Approved inspections",
    icon: PackageCheck,
    badge: "Passed",
  },
  {
    title: "Crates Packed",
    value: "284",
    note: "QR linked crates",
    icon: Boxes,
    badge: "Packed",
  },
  {
    title: "Dispatch In Transit",
    value: "07",
    note: "Cold-chain movement",
    icon: Truck,
    badge: "Moving",
  },
  {
    title: "Receiving Pending",
    value: "12",
    note: "Awaiting receiver scan",
    icon: Warehouse,
    badge: "Pending",
  },
];

const workflowSteps = [
  "Source Request",
  "Quality Inspection",
  "Crate Packing",
  "Dispatch",
  "Transport Loading",
  "Receiving Verification",
];

const sourceRows = [
  {
    harvestId: "H-1001",
    sourceName: "Raj Aqua Farm",
    district: "Nagapattinam",
    biomass: "800 KG",
    size: "30 Count",
    date: "28 May",
    status: "Pending",
  },
  {
    harvestId: "H-1002",
    sourceName: "Sea Fisher Group",
    district: "Chennai",
    biomass: "500 KG",
    size: "1.2 KG",
    date: "29 May",
    status: "Accepted",
  },
  {
    harvestId: "H-1003",
    sourceName: "Blue Pond Farms",
    district: "Cuddalore",
    biomass: "1,200 KG",
    size: "35 Count",
    date: "30 May",
    status: "Pending",
  },
];

const qualityRows = [
  {
    sourceId: "S-1001",
    harvestId: "H-1001",
    inspector: "Kumar",
    time: "10:30 AM",
    result: "Passed",
    status: "Done",
  },
  {
    sourceId: "S-1002",
    harvestId: "H-1002",
    inspector: "Naveen",
    time: "11:45 AM",
    result: "Review",
    status: "Pending",
  },
];

const crateRows = [
  {
    qr: "C-001",
    weight: "25 KG",
    grade: "A",
    packedBy: "Mani",
    status: "Packed",
  },
  {
    qr: "C-002",
    weight: "25 KG",
    grade: "A",
    packedBy: "Mani",
    status: "Packed",
  },
  {
    qr: "C-003",
    weight: "20 KG",
    grade: "B",
    packedBy: "Arul",
    status: "Packed",
  },
];

const dispatchRows = [
  {
    dispatchId: "D-1001",
    sourceId: "S-1001",
    crates: "42",
    destination: "Processor A",
    type: "Domestic",
    transport: "Ravi",
    status: "In Transit",
  },
  {
    dispatchId: "D-1002",
    sourceId: "S-1002",
    crates: "30",
    destination: "Cold Hub Centre",
    type: "Export",
    transport: "Arun",
    status: "Draft",
  },
];

const scannedCrates = [
  {
    qr: "C-001",
    weight: "25 KG",
    scanTime: "11:00 AM",
    status: "Loaded",
  },
  {
    qr: "C-002",
    weight: "25 KG",
    scanTime: "11:02 AM",
    status: "Loaded",
  },
  {
    qr: "C-003",
    weight: "20 KG",
    scanTime: "11:05 AM",
    status: "Loaded",
  },
];

const receivingRows = [
  {
    dispatchId: "D-1001",
    receiver: "Processor A",
    expected: "42",
    received: "42",
    missing: "0",
    status: "Received",
  },
  {
    dispatchId: "D-1002",
    receiver: "Cold Hub Centre",
    expected: "30",
    received: "25",
    missing: "5",
    status: "Pending",
  },
];

const buyers = [
  {
    name: "ABC Seafood",
    type: "Processor",
    location: "Chennai",
    status: "Active",
  },
  {
    name: "Ocean Exports",
    type: "Buyer",
    location: "Tuticorin",
    status: "Active",
  },
  {
    name: "Cold Hub",
    type: "Collection Centre",
    location: "Karaikal",
    status: "Active",
  },
];

const users = [
  {
    name: "Kumar",
    role: "Quality Inspector",
    mobile: "98765 43210",
    status: "Active",
  },
  {
    name: "Mani",
    role: "Crate Packer",
    mobile: "98765 43211",
    status: "Active",
  },
  {
    name: "Ravi",
    role: "Transport Operator",
    mobile: "98765 43212",
    status: "Active",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Accepted: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Active: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Passed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Done: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Packed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Loaded: "bg-blue-100 text-blue-700 border-blue-200",
    "In Transit": "bg-blue-100 text-blue-700 border-blue-200",
    Draft: "bg-slate-100 text-slate-700 border-slate-200",
    Review: "bg-orange-100 text-orange-700 border-orange-200",
    Received: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-slate-100 text-slate-700 border-slate-200"
      }`}
    >
      {status}
    </span>
  );
}

function SectionCard({ title, subtitle, action, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 border-b border-slate-100 pb-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
        </div>

        {action && <div>{action}</div>}
      </div>

      {children}
    </section>
  );
}

function TableHeader({ children }) {
  return (
    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
      {children}
    </th>
  );
}

function TableCell({ children, className = "" }) {
  return (
    <td className={`px-4 py-4 text-sm text-slate-700 ${className}`}>
      {children}
    </td>
  );
}

function PrimaryButton({ children }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
      {children}
    </button>
  );
}

function SecondaryButton({ children }) {
  return (
    <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
      {children}
    </button>
  );
}

export default function RootVerseTraderWireframe() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-black text-white shadow-sm">
              R
            </div>

            <div>
              <p className="text-lg font-black leading-none text-slate-900">
                RootVerse
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Trader Portal
              </p>
            </div>
          </div>

          <div className="hidden min-w-[360px] max-w-xl flex-1 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2.5 md:flex">
            <Search className="mr-3 h-5 w-5 text-slate-400" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              placeholder="Search Harvest ID, Source ID, Dispatch ID, Crate QR"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="relative rounded-2xl border border-slate-200 bg-white p-2.5 text-slate-600 hover:bg-slate-50">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-emerald-500" />
            </button>

            <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 md:flex">
              <UserCircle className="h-6 w-6 text-slate-500" />
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Blue Ocean Traders
                </p>
                <p className="text-xs text-slate-500">Trader Admin</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <section className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm">
          <div className="grid gap-6 bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 md:grid-cols-[1.4fr_0.8fr] md:p-8">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                Unified Seafood Traceability Workflow
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                Trader Operations Dashboard
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
                Manage procurement, quality inspection, crate packing, dispatch,
                transport loading, and receiving verification in one traceable
                workflow.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <PrimaryButton>
                  <Plus className="h-4 w-4" />
                  Create Dispatch
                </PrimaryButton>

                <SecondaryButton>
                  <Plus className="h-4 w-4" />
                  Add Buyer/Processor
                </SecondaryButton>

                <SecondaryButton>
                  <Users className="h-4 w-4" />
                  Add Operational User
                </SecondaryButton>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-slate-900">
                Today’s Control Summary
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <span className="text-sm text-slate-500">
                    Total Seafood Movement
                  </span>
                  <span className="font-black text-slate-900">4.8 Ton</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <span className="text-sm text-slate-500">
                    Chain of Custody Events
                  </span>
                  <span className="font-black text-slate-900">126</span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                  <span className="text-sm text-slate-500">
                    QR Scan Success
                  </span>
                  <span className="font-black text-emerald-700">98%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Summary Cards */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {summaryCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                    {card.badge}
                  </span>
                </div>

                <p className="mt-5 text-3xl font-black text-slate-950">
                  {card.value}
                </p>
                <p className="mt-1 text-sm font-bold text-slate-800">
                  {card.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">{card.note}</p>
              </div>
            );
          })}
        </section>

        {/* Workflow Progress */}
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Workflow Progress
              </h2>
              <p className="text-sm text-slate-500">
                End-to-end trader operation chain
              </p>
            </div>

            <StatusBadge status="Active" />
          </div>

          <div className="grid gap-3 md:grid-cols-6">
            {workflowSteps.map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm font-bold text-slate-800">{step}</p>
                </div>

                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-slate-300 md:block" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Source Procurement */}
        <SectionCard
          title="1. Source Procurement"
          subtitle="Harvest requests received from farmers and fishers"
          action={
            <div className="flex flex-wrap gap-2">
              <SecondaryButton>District</SecondaryButton>
              <SecondaryButton>Source Type</SecondaryButton>
              <SecondaryButton>Status</SecondaryButton>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <TableHeader>Harvest ID</TableHeader>
                  <TableHeader>Source Name</TableHeader>
                  <TableHeader>District</TableHeader>
                  <TableHeader>Biomass</TableHeader>
                  <TableHeader>Size</TableHeader>
                  <TableHeader>Date</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Action</TableHeader>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {sourceRows.map((row) => (
                  <tr key={row.harvestId}>
                    <TableCell className="font-bold text-slate-900">
                      {row.harvestId}
                    </TableCell>
                    <TableCell>{row.sourceName}</TableCell>
                    <TableCell>{row.district}</TableCell>
                    <TableCell>{row.biomass}</TableCell>
                    <TableCell>{row.size}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <StatusBadge status={row.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <button className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50">
                          <Phone className="h-4 w-4" />
                        </button>

                        <button className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50">
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Quality Inspection */}
        <SectionCard
          title="2. Quality Inspection"
          subtitle="Inspection details updated from the Quality Inspector app"
          action={<SecondaryButton>View All Inspections</SecondaryButton>}
        >
          <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <TableHeader>Source ID</TableHeader>
                    <TableHeader>Harvest ID</TableHeader>
                    <TableHeader>Inspector</TableHeader>
                    <TableHeader>Time</TableHeader>
                    <TableHeader>Result</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {qualityRows.map((row) => (
                    <tr key={row.sourceId}>
                      <TableCell className="font-bold text-slate-900">
                        {row.sourceId}
                      </TableCell>
                      <TableCell>{row.harvestId}</TableCell>
                      <TableCell>{row.inspector}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>
                        <StatusBadge status={row.result} />
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={row.status} />
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-black text-slate-900">
                Inspection Preview
              </h3>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex aspect-square items-center justify-center rounded-2xl border border-slate-200 bg-white text-xs font-bold text-slate-400"
                  >
                    Image {item}
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Seafood Condition</span>
                  <span className="font-bold text-slate-900">Good</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Size Verification</span>
                  <span className="font-bold text-slate-900">Matched</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Disease Observation</span>
                  <span className="font-bold text-slate-900">No</span>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <PrimaryButton>Approve</PrimaryButton>
                <SecondaryButton>Reject</SecondaryButton>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Crate Packing */}
        <SectionCard
          title="3. Crate Packing"
          subtitle="Crates are linked with Harvest ID, Source ID, and Quality Result"
          action={
            <div className="flex gap-2">
              <SecondaryButton>
                <QrCode className="h-4 w-4" />
                Generate Crate QR
              </SecondaryButton>

              <PrimaryButton>
                <Plus className="h-4 w-4" />
                Add Crate
              </PrimaryButton>
            </div>
          }
        >
          <div className="mb-5 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm md:grid-cols-4">
            <div>
              <p className="text-slate-500">Selected Source</p>
              <p className="font-black text-slate-900">S-1001</p>
            </div>

            <div>
              <p className="text-slate-500">Harvest</p>
              <p className="font-black text-slate-900">H-1001</p>
            </div>

            <div>
              <p className="text-slate-500">Quality</p>
              <p className="font-black text-emerald-700">Approved</p>
            </div>

            <div>
              <p className="text-slate-500">Total Weight</p>
              <p className="font-black text-slate-900">980 KG</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <TableHeader>Crate QR</TableHeader>
                  <TableHeader>Weight</TableHeader>
                  <TableHeader>Grade</TableHeader>
                  <TableHeader>Packed By</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Action</TableHeader>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {crateRows.map((row) => (
                  <tr key={row.qr}>
                    <TableCell className="font-bold text-slate-900">
                      {row.qr}
                    </TableCell>
                    <TableCell>{row.weight}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                    <TableCell>{row.packedBy}</TableCell>
                    <TableCell>
                      <StatusBadge status={row.status} />
                    </TableCell>
                    <TableCell>
                      <button className="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-50">
                        <Eye className="h-4 w-4" />
                      </button>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* Dispatch Management */}
        <SectionCard
          title="4. Dispatch Management"
          subtitle="Trader creates dispatch after confirming receiver or processor"
          action={<PrimaryButton>Create Dispatch</PrimaryButton>}
        >
          <div className="grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <TableHeader>Dispatch ID</TableHeader>
                    <TableHeader>Source ID</TableHeader>
                    <TableHeader>Crates</TableHeader>
                    <TableHeader>Destination</TableHeader>
                    <TableHeader>Type</TableHeader>
                    <TableHeader>Transport</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {dispatchRows.map((row) => (
                    <tr key={row.dispatchId}>
                      <TableCell className="font-bold text-slate-900">
                        {row.dispatchId}
                      </TableCell>
                      <TableCell>{row.sourceId}</TableCell>
                      <TableCell>{row.crates}</TableCell>
                      <TableCell>{row.destination}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.transport}</TableCell>
                      <TableCell>
                        <StatusBadge status={row.status} />
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-black text-slate-900">
                Create Dispatch Preview
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  "Select Crates",
                  "Select Destination",
                  "Choose Domestic / Export",
                  "Assign Transport Operator",
                  "Generate Dispatch ID",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white p-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        {/* Transport Tracking */}
        <SectionCard
          title="5. Transport Tracking"
          subtitle="Transport operator scans crate QR codes before loading"
          action={<SecondaryButton>Track Dispatch</SecondaryButton>}
        >
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-sm font-black text-slate-900">
                Active Transport
              </h3>

              <div className="mt-4 space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Dispatch ID</span>
                  <span className="font-bold text-slate-900">D-1001</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Operator</span>
                  <span className="font-bold text-slate-900">Ravi</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Vehicle No</span>
                  <span className="font-bold text-slate-900">TN-01-AB</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Loaded Crates</span>
                  <span className="font-bold text-emerald-700">42 / 42</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-500">Destination</span>
                  <span className="font-bold text-slate-900">Processor A</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <TableHeader>Crate QR</TableHeader>
                    <TableHeader>Weight</TableHeader>
                    <TableHeader>Scan Time</TableHeader>
                    <TableHeader>Loading Status</TableHeader>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  {scannedCrates.map((row) => (
                    <tr key={row.qr}>
                      <TableCell className="font-bold text-slate-900">
                        {row.qr}
                      </TableCell>
                      <TableCell>{row.weight}</TableCell>
                      <TableCell>{row.scanTime}</TableCell>
                      <TableCell>
                        <StatusBadge status={row.status} />
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </SectionCard>

        {/* Receiving */}
        <SectionCard
          title="6. Receiving / Collection Centre Verification"
          subtitle="Authorized receiver scans crate QR and confirms receipt"
          action={
            <div className="flex gap-2">
              <SecondaryButton>
                <QrCode className="h-4 w-4" />
                Scan Crate QR
              </SecondaryButton>

              <PrimaryButton>Confirm Receipt</PrimaryButton>
            </div>
          }
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <TableHeader>Dispatch ID</TableHeader>
                  <TableHeader>Receiver</TableHeader>
                  <TableHeader>Expected</TableHeader>
                  <TableHeader>Received</TableHeader>
                  <TableHeader>Missing</TableHeader>
                  <TableHeader>Status</TableHeader>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {receivingRows.map((row) => (
                  <tr key={row.dispatchId}>
                    <TableCell className="font-bold text-slate-900">
                      {row.dispatchId}
                    </TableCell>
                    <TableCell>{row.receiver}</TableCell>
                    <TableCell>{row.expected}</TableCell>
                    <TableCell>{row.received}</TableCell>
                    <TableCell>{row.missing}</TableCell>
                    <TableCell>
                      <StatusBadge status={row.status} />
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl bg-slate-50 p-4 text-sm font-semibold text-slate-700">
            <span className="text-slate-500">Chain of Custody:</span>
            <span>Trader</span>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <span>Transport Operator</span>
            <ArrowRight className="h-4 w-4 text-slate-400" />
            <span>Collection Centre / Processor</span>
          </div>
        </SectionCard>

        {/* Buyers and Users */}
        <section className="grid gap-6 lg:grid-cols-2">
          <SectionCard
            title="7A. Buyers / Processors"
            subtitle="Manage buyers, processors, and receiving facilities"
            action={<PrimaryButton>Add New</PrimaryButton>}
          >
            <div className="space-y-3">
              {buyers.map((buyer) => (
                <div
                  key={buyer.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div>
                    <p className="font-bold text-slate-900">{buyer.name}</p>
                    <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      {buyer.type} • {buyer.location}
                    </p>
                  </div>

                  <StatusBadge status={buyer.status} />
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="7B. Operational Users"
            subtitle="Quality inspectors, crate packers, and transport operators"
            action={<PrimaryButton>Add User</PrimaryButton>}
          >
            <div className="space-y-3">
              {users.map((user) => (
                <div
                  key={user.name}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div>
                    <p className="font-bold text-slate-900">{user.name}</p>
                    <p className="mt-1 text-sm text-slate-500">
                      {user.role} • {user.mobile}
                    </p>
                  </div>

                  <StatusBadge status={user.status} />
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        {/* Reports */}
        <SectionCard
          title="8. Reports & Traceability Search"
          subtitle="Search by Crate QR, Dispatch ID, Source ID, or Harvest ID"
          action={<SecondaryButton>Export Report</SecondaryButton>}
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <label className="text-sm font-bold text-slate-900">
                Traceability Search
              </label>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <Search className="mr-3 h-5 w-5 text-slate-400" />
                  <input
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                    placeholder="Enter Crate QR / Dispatch ID / Harvest ID"
                  />
                </div>

                <PrimaryButton>Search</PrimaryButton>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Procurement Report",
                "Quality Report",
                "Crate Report",
                "Dispatch Report",
                "Receiving Report",
                "Traceability Report",
              ].map((report) => (
                <button
                  key={report}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  <FileText className="h-5 w-5 text-emerald-600" />
                  {report}
                </button>
              ))}
            </div>
          </div>
        </SectionCard>
      </main>
    </div>
  );
}