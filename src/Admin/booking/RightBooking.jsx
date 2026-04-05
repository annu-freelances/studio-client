import React, { useRef, useState, useCallback, useMemo, useEffect } from 'react'
import TopNavigation from '../../components/TopNavigation'
import { Link } from 'react-router-dom'
import { CalendarDays, Edit, Plus, Trash2 } from 'lucide-react'
import { allBooking } from '../api/Booking';
import { useDispatch, useSelector } from 'react-redux'
import { setBooking } from '../../redux/reducer/BookingSlice';
import { FaInfoCircle } from 'react-icons/fa';

const PAGE_SIZE = 6

const RightBooking = () => {
  const scrollContainerRef = useRef(null)
  const [page, setPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [filterDate, setFilterDate] = useState('')
  const dispatch = useDispatch()
  const { booking = [] } = useSelector(store => store.Booking)

  const AllBookingApi = useCallback(async () => {
    try {
      const result = await allBooking()
      dispatch(setBooking(result.data.data || []))
    } catch (error) {
      console.error(error)
    }
  }, [dispatch])

  useEffect(() => {
    AllBookingApi()
  }, [AllBookingApi])

  const filteredData = useMemo(() => {
    let records = booking || []
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase()
      records = records.filter(
        (item) =>
          (item.bookingId && item.bookingId.toLowerCase().includes(q)) ||
          (item.customerName && item.customerName.toLowerCase().includes(q))
      )
    }
    if (filterDate) {
      records = records.filter(
        (item) =>
          item.bookingDate &&
          new Date(item.bookingDate).toISOString().slice(0, 10) === filterDate
      )
    }
    return records
  }, [booking, searchQuery, filterDate])

  const totalRecords = filteredData.length
  const totalPages = Math.ceil(totalRecords / PAGE_SIZE)
  const startIdx = (page - 1) * PAGE_SIZE
  const endIdx = Math.min(startIdx + PAGE_SIZE, totalRecords)
  const data = useMemo(() => filteredData.slice(startIdx, endIdx), [filteredData, startIdx, endIdx])

  const handleEditBooking = useCallback((item) => {
    alert(`Edit booking for ${item.customerName} (${item.bookingId})`)
  }, [])

  const handleDeleteBooking = useCallback((item) => {
    if (window.confirm(`Are you sure you want to delete booking ${item.bookingId}?`)) {
      alert('Booking deleted (mocked)')
    }
  }, [])

  const handlePageChange = useCallback((newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage)
    }
  }, [totalPages])

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value)
    setPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setPage(1)
  }

  const renderPagination = () => {
    const buttons = []
    for (let idx = 0; idx < totalPages; idx++) {
      if (
        totalPages > 5 &&
        idx !== 0 && idx !== totalPages - 1 &&
        (Math.abs(page - (idx + 1)) > 1)
      ) {
        if (
          ((page - 2 > 1 && idx === 1) || (page + 2 < totalPages && idx === totalPages - 2))
        ) {
          buttons.push(
            <li key={`dots-${idx}`}>
              <span className="px-2 py-1 text-gray-400">...</span>
            </li>
          );
        }
        continue;
      }
      buttons.push(
        <li key={idx}>
          <button
            className={`px-3 py-1 border rounded ${page === idx + 1 ? 'bg-blue-600 text-white font-semibold' : ''}`}
            aria-current={page === idx + 1 ? "page" : undefined}
            onClick={() => handlePageChange(idx + 1)}
            disabled={page === idx + 1}
          >
            {idx + 1}
          </button>
        </li>
      );
    }
    return buttons
  }

  return (
    <div
      ref={scrollContainerRef}
      className='flex-1 bg-gray-100 h-screen overflow-y-auto'
      style={{ scrollBehavior: 'smooth' }}
      data-testid="booking-list-container"
    >
      <style>{`
        * { scroll-behavior: smooth; }
        html { scroll-behavior: smooth; }
      `}</style>
      <TopNavigation />
      <div className='py-3 px-5'>
        <nav aria-label="Breadcrumb" className='mb-4'>
          <ol className='flex items-center gap-2 text-sm text-gray-600' role="list">
            <li>
              <Link
                to="/admin/booking"
                className="text-zinc-400 font-semibold hover:text-blue-600 transition-colors duration-200"
              >
                Booking Management
              </Link>
            </li>
            <li>
              <span className='font-bold' aria-hidden="true">&gt;</span>
            </li>
            <li>
              <span className='text-zinc-700 cursor-pointer font-semibold' aria-current="page">
                Booking List
              </span>
            </li>
          </ol>
        </nav>

        <section className='bg-white rounded shadow py-3 px-4'>
          <header className='flex border-b pb-3 border-zinc-200 items-center justify-between mb-3'>
            <div>
              <div className='flex items-center gap-3'>
                <CalendarDays className='w-6 h-6 text-gray-600' aria-hidden="true" />
                <h1 className='text-2xl font-bold text-gray-800'>Booking List</h1>
              </div>
              <p className='italic font-semibold text-zinc-300' aria-live="polite">
                Showing {Math.min(totalRecords, PAGE_SIZE)} out of {booking.length} Bookings
              </p>
            </div>
            <div className='relative'>
              <Link
                to="/admin/booking/booking_create"
                className='bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md'
                onClick={() => {
                  console.log('Navigate/Create new booking');
                }}
                aria-label='Add New Customer'
              >
                <Plus className='w-4 h-4' aria-hidden="true" />
                <span>Add New Customer</span>
              </Link>
            </div>
          </header>

          <div className="flex items-center justify-between mb-4">
            <div>
              <select
                id="filter-field"
                name="filterField"
                className="border-gray-300 border rounded-l px-6 py-2 text-sm outline-none bg-gray-100 cursor-not-allowed"
                value="bookingDate"
                disabled
                aria-label="Currently only booking date filter is supported"
              >
                <option value="bookingDate">Booking Date</option>
              </select>
              <input
                type="date"
                id="filter-date"
                name="filterDate"
                className="border border-gray-300 rounded-r px-6 py-2 text-sm outline-none"
                value={filterDate}
                onChange={handleFilterChange}
                aria-label="Filter by Booking Date"
                data-testid="filter-date-input"
              />
            </div>

            <form className="flex items-center" role="search" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                name="search"
                placeholder="Search bookings..."
                className="border border-gray-300 rounded-l px-5 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors w-79"
                autoComplete="off"
                aria-label="Search bookings"
                value={searchQuery}
                onChange={handleSearchChange}
                data-testid="search-input"
              />
              <button
                type="button"
                className="px-5 py-[9px] bg-blue-600 text-white rounded-r hover:bg-blue-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Apply search filter"
                onClick={() => setPage(1)}
                data-testid="search-filter-btn"
              >
                Filter
              </button>
            </form>
          </div>

          <div className="overflow-x-auto rounded border border-gray-200 mb-5">
            <table className="min-w-full bg-white text-sm" aria-label="Booking Table">
              <thead>
                <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Booking ID</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Customer</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Booking Date</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Event Date</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Status</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Source</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Amount</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Payment Status</th>
                  <th scope="col" className="py-3 px-4 text-left font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item) => (
                    <tr key={`${item.id || item._id}-${item.bookingId}`} className="border-b border-zinc-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 whitespace-nowrap" data-testid="booking-id">
                        {item.bookingId || '-'}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{item.customerName || '-'}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {item.bookingDate ? new Date(item.bookingDate).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {item.eventDate ? new Date(item.eventDate).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={
                            item.status?.toUpperCase() === "CONFIRMED"
                              ? "bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                              : item.calendarStatus?.toUpperCase() === "CANCELLED"
                                ? "bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium"
                                : item.status?.toUpperCase() === "BOOKED"
                                  ? "bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium"
                                  : item.status?.toUpperCase() === "PENDING"
                                    ? "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"
                                    : item.status?.toUpperCase() === "BLOCKED"
                                      ? "bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                                      : "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                          }
                          title={item.status ? item.status.charAt(0).toUpperCase() + item.status.slice(1).toLowerCase() : "Unknown"}
                          data-testid="status"
                        >
                          {item.status
                            ? item.status.charAt(0).toUpperCase() + item.status.slice(1).toLowerCase()
                            : "-"}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{item.serviceType || '-'}</td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        {typeof item.price === "number"
                          ? `₹${item.price.toFixed(2)}`
                          : (item.price ? `₹${item.price}` : '-')}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap" data-testid="payment-status">
                        <span
                          className={(() => {
                            switch (item.payment?.status) {
                              case "PAID":
                                return "inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold";
                              case "PENDING":
                                return "inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold";
                              case "FAILED":
                                return "inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold";
                              default:
                                return "inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium";
                            }
                          })()}
                          style={{ minWidth: 70, display: "inline-flex", justifyContent: "center" }}
                          title={
                            item.payment?.status
                              ? item.payment.status.charAt(0).toUpperCase() + item.payment.status.slice(1).toLowerCase() + " Payment"
                              : "Unknown Payment Status"
                          }
                        >
                          {item.payment?.status
                            ? item.payment.status.charAt(0).toUpperCase() + item.payment.status.slice(1).toLowerCase()
                            : "-"}
                        </span>
                      </td>
                      <td className="px-4 py-3 flex items-center justify-center mt-1   whitespace-nowrap">
                        {item.status == "CONFIRMED" && (
                          <Link
                            to={`/admin/booking/booking_update/${item._id}`}
                            className="text-blue-600  hover:underline text-xs mr-3"
                          >
                            <FaInfoCircle className='w-4 h-4' />
                          </Link>
                        )}
                        <Link
                          to={`/admin/booking/booking_update/${item._id}`}
                          className="text-blue-600  hover:underline text-xs mr-3"
                        >
                          <Edit className='w-4 h-4' />
                        </Link>
                        <button
                          className="text-red-600 hover:underline text-xs"
                          onClick={() => handleDeleteBooking(item._id)}
                          aria-label={`Delete booking ${item.bookingId}`}
                          type="button"
                        >
                          <Trash2 className='w-4 h-4' />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-4 py-3 text-gray-700" colSpan={9}>
                      <div className="text-center text-zinc-400 py-10">No bookings found.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <div>
              {totalRecords > 0 ? (
                <>
                  Showing&nbsp;
                  <span className="font-semibold text-gray-700">
                    {totalRecords === 0 ? 0 : (startIdx + 1)}-{endIdx}
                  </span>
                  &nbsp;of&nbsp;
                  <span className="font-semibold text-gray-700">{totalRecords}</span>
                  &nbsp;bookings
                </>
              ) : (
                <>No bookings to show</>
              )}
            </div>
            <nav aria-label="Pagination Navigation">
              <ul className="inline-flex gap-1">
                <li>
                  <button
                    className="px-3 py-1 border rounded disabled:opacity-50"
                    aria-label="Previous page"
                    disabled={page === 1}
                    onClick={() => handlePageChange(page - 1)}
                    type="button"
                  >
                    Prev
                  </button>
                </li>
                {renderPagination()}
                <li>
                  <button
                    className="px-3 py-1 border rounded"
                    aria-label="Next page"
                    disabled={page === totalPages || totalPages === 0}
                    onClick={() => handlePageChange(page + 1)}
                    type="button"
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RightBooking
//admin/booking/booking_Details/:bookingsId