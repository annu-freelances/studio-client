import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import TopNavigation from '../../components/TopNavigation'
import { Users, CheckCircle, Minus, Eye, ChevronDown, Search, Filter, ChevronUp, Edit, Trash2, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import { AllCustomer, DeletedCustomer, StatusChangesCustomer } from '../api/Customer'
import { useDispatch, useSelector } from 'react-redux'
import { removeCustomers, setCustomers } from '../../redux/reducer/CustomerSlice'
import { toast } from 'react-toastify'

const RightCustomer = () => {
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState(null) // null, 'asc', 'desc'
  const [selectedCustomers, setSelectedCustomers] = useState(new Set())
  const [apiError, setApiError] = useState(null)
  const [selectAll, setSelectAll] = useState(false)
  const { admin } = useSelector(store => store.admin)
  const { customer } = useSelector(store => store.Customer)
  const scrollContainerRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const allCustomer = async () => {
    try {
      setApiError(null);
      const result = await AllCustomer();
      dispatch(setCustomers(result.data.data));
    } catch (error) {
      const message = error?.response?.data?.message || error.message || "Something went wrong";
      setApiError(message);
      console.error(error);
    }
  }

  useEffect(() => {
    allCustomer()
  }, [admin])

  const deletedCustomerApi = async (customerId) => {
    try {
      const result = await DeletedCustomer(customerId);
      dispatch(removeCustomers(customerId))
      toast.success(result.data.message);
      allCustomer()
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message ||
        "Failed to delete customer. Please try again.";

      toast.error(errorMessage);
      console.error("Delete Customer Error:", error);
    }
  }

  const customers = useMemo(() => Array.isArray(customer) ? customer : [], [customer])

  const summaryStats = useMemo(() => {
    const total = customers.length
    const active = customers.filter(c => c.status === 'active').length
    const inactive = customers.filter(c => c.status === 'inActive').length
    return { total, active, inactive }
  }, [customers])

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700'
      case 'inActive':
        return 'bg-gray-100 text-gray-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const toggleSort = useCallback(() => {
    setSortOrder(prev => {
      if (prev === null) return 'asc'
      if (prev === 'asc') return 'desc'
      return null
    })
  }, [])

  const filteredCustomers = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    if (query === '') return customers

    return customers.filter(customer =>
      (customer.name || '').toLowerCase().includes(query) ||
      (customer.email || '').toLowerCase().includes(query) ||
      (customer.phone?.number || '').toLowerCase().includes(query)
    )
  }, [customers, searchQuery])

  const sortedCustomers = useMemo(() => {
    const sorted = [...filteredCustomers]
    if (sortOrder === 'asc') {
      sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''))
    } else if (sortOrder === 'desc') {
      sorted.sort((a, b) => (b.name || '').localeCompare(a.name || ''))
    }
    return sorted
  }, [filteredCustomers, sortOrder])

  const totalRows = sortedCustomers.length
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage))
  const pagedCustomers = sortedCustomers.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1)
    }
  }, [totalPages, currentPage])

  const handleSelectAll = useCallback((e) => {
    const checked = e.target.checked
    setSelectAll(checked)
    if (checked) {
      setSelectedCustomers(new Set(pagedCustomers.map(c => c._id)))
    } else {
      setSelectedCustomers(new Set())
    }
  }, [pagedCustomers])

  const handleSelectCustomer = useCallback((customerId) => {
    setSelectedCustomers(prev => {
      const newSet = new Set(prev)
      if (newSet.has(customerId)) {
        newSet.delete(customerId)
      } else {
        newSet.add(customerId)
      }
      return newSet
    })
  }, [])

  useEffect(() => {
    const allSelected = pagedCustomers.length > 0 &&
      pagedCustomers.every(c => selectedCustomers.has(c._id))
    setSelectAll(allSelected)
  }, [selectedCustomers, pagedCustomers])

  const handleDelete = useCallback((customerId) => {
    deletedCustomerApi(customerId)
  }, [])

  const scrollToTop = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }, [])

  
  const handleStatusClick = async (customer) => {
    try {
      const updatedStatus = customer.status === 'active' ? 'inActive' : 'active';
      await StatusChangesCustomer({ id: customer._id, status: updatedStatus });
      toast.success(`Status changed to "${updatedStatus}"`);
      allCustomer();
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Failed to change status');
    }
  };

  const handleEditClick = (customer) => {
    if (customer.status === 'active') {
      navigate(`/admin/customers/customer_update/${customer._id}`);
    } else {
      toast.success('Inactive customers cannot be edited.');
    }
  }

  return (
    <div
      ref={scrollContainerRef}
      className='flex-1 bg-gray-100 h-screen overflow-y-auto'
      style={{ scrollBehavior: 'smooth' }}
    >
      <style>{`
        * {
          scroll-behavior: smooth;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <TopNavigation />
      <div className='p-6'>
        <div className='mb-6'>
          <div className='flex items-center gap-2 text-sm text-gray-600 mb-2'>
            <span>Admin Dashboard</span>
            <span>&gt;</span>
            <span>Customers</span>
          </div>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold text-gray-800'>Customer Management</h1>
            <div className='relative'>
              <Link to="/admin/customers/customer_create"
                className='bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md'
                onClick={() => {
                  console.log('Add new customer')
                }}
                aria-label='Add new customer'
              >
                <Plus className='w-4 h-4' />
                <span>Add New Customer</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-4 mb-6'>
          <div className='bg-white flex gap-6 rounded-lg p-4 shadow-sm transition-shadow hover:shadow-md'>
            <div className='flex items-center justify-between mb-3'>
              <Users className='w-8 h-8 text-blue-600' />
            </div>
            <div>
              <h3 className='text-gray-500 text-sm font-medium mb-1'>Total Customers</h3>
              <p className='text-2xl font-bold text-gray-800'>{summaryStats.total}</p>
            </div>
          </div>
          <div className='bg-white rounded-lg p-4 flex gap-6 shadow-sm transition-shadow hover:shadow-md'>
            <div className='flex items-center justify-between mb-3'>
              <CheckCircle className='w-8 h-8 text-green-600' />
            </div>
            <div>
              <h3 className='text-gray-500 text-sm font-medium mb-1'>Active Customers</h3>
              <p className='text-2xl font-bold text-gray-800'>{summaryStats.active}</p>
            </div>
          </div>
          <div className='bg-white rounded-lg p-4 flex gap-6 shadow-sm transition-shadow hover:shadow-md'>
            <div
              className="flex items-center justify-center mb-3 bg-red-600 rounded-full"
              style={{ width: '40px', height: '40px' }}
            >
              <Minus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className='text-gray-500 text-sm font-medium mb-1'>Inactive Customers</h3>
              <p className='text-2xl font-bold text-gray-800'>{summaryStats.inactive}</p>
            </div>
          </div>
          <div className='bg-white rounded-lg p-4 flex gap-6 shadow-sm transition-shadow hover:shadow-md'>
            <div className="flex items-center justify-center bg-orange-400 rounded-full mb-3" style={{ width: '40px', height: '40px' }}>
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div className=''>
              <h3 className='text-gray-500 text-sm font-medium mb-1'>Awaiting Selection</h3>
              <p className='text-2xl font-bold text-gray-800'>{summaryStats.awaiting || 0}</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-sm p-4 mb-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <span className='text-sm text-gray-600'>Rows per page:</span>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                  scrollToTop();
                }}
                className='border border-gray-300 rounded px-2 py-1 text-sm'
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className='flex items-center gap-3'>
              <div className='relative'>
                <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                <input
                  type='text'
                  placeholder='Search...'
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className='pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64'
                />
              </div>
              <button
                className='p-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors'
                aria-label='Filter customers'
              >
                <Filter className='w-4 h-4 text-gray-600' />
              </button>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-sm overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-4 py-3 text-left'>
                    <input
                      type='checkbox'
                      className='rounded border-gray-300 cursor-pointer'
                      checked={selectAll}
                      onChange={handleSelectAll}
                      aria-label='Select all customers'
                    />
                  </th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>ID</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>
                    <button
                      onClick={toggleSort}
                      className='flex items-center gap-1 hover:text-blue-600 transition-colors'
                      aria-label='Sort by name'
                    >
                      <span>Name :</span>
                      {sortOrder === 'asc' && <ChevronUp className='w-4 h-4' />}
                      {sortOrder === 'desc' && <ChevronDown className='w-4 h-4' />}
                      {sortOrder === null && (
                        <span className='flex flex-col'>
                          <ChevronUp className='w-3 h-3 -mb-1' />
                          <ChevronDown className='w-3 h-3' />
                        </span>
                      )}
                    </button>
                  </th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>Email</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>Phone</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>Status</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-700'>Actions</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {pagedCustomers.map((customer) => (
                  <tr key={customer._id} className='hover:bg-gray-50 transition-colors'>
                    <td className='px-4 py-3'>
                      <input
                        type='checkbox'
                        className='rounded border-gray-300 cursor-pointer'
                        checked={selectedCustomers.has(customer._id)}
                        onChange={() => handleSelectCustomer(customer._id)}
                        aria-label={`Select ${customer.name || '-'}`}
                      />
                    </td>
                    <td className='px-4 py-3 text-sm text-gray-800'>{customer.customerId || '-'}</td>
                    <td className='px-4 py-3 text-sm font-medium text-gray-800'>{customer.name || '-'}</td>
                    <td className='px-4 py-3 text-sm text-gray-600'>{customer.email || '-'}</td>
                    <td className='px-4 py-3 text-sm text-gray-600'>
                      {customer.phone && customer.phone.countryCode && customer.phone.number
                        ? `${customer.phone.countryCode} ${customer.phone.number}`
                        : '-'}
                    </td>
                    <td className='px-4 py-3'>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${getStatusColor(customer.status)}`}
                        onClick={() => handleStatusClick(customer)}
                        style={{ userSelect: 'none' }}
                        title="Change status"
                      >
                        {customer.status || '-'}
                      </span>
                    </td>
                    <td className='px-4 py-3'>
                      <div className='flex items-center gap-3'>
                        <button
                          type="button"
                          className='text-blue-600 hover:text-blue-800 transition-colors bg-transparent outline-none border-none p-0'
                          style={{ cursor: 'pointer' }}
                          aria-label={`Edit ${customer.name || '-'}`}
                          onClick={() => handleEditClick(customer)}
                        >
                          <Edit className='w-4 h-4' />
                        </button>
                        <button
                          className='text-red-600 hover:text-red-800 transition-colors cursor-pointer'
                          onClick={() => handleDelete(customer._id)}
                          aria-label={`Delete ${customer.name || '-'}`}
                        >
                          <Trash2 className='w-4 h-4' />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {pagedCustomers.length === 0 && (
                  <tr>
                    <td colSpan={7} className='px-4 py-6 text-center text-gray-400'>
                      No customers found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className='px-4 py-3 border-t border-gray-200 flex items-center justify-between'>
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.max(1, prev - 1))
                scrollToTop()
              }}
              disabled={currentPage === 1}
              className='px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              Previous
            </button>
            <div className='flex items-center gap-2'>
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.max(1, prev - 1))
                  scrollToTop()
                }}
                disabled={currentPage === 1}
                className='p-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                aria-label='Previous page'
              >
                <ChevronLeft className='w-4 h-4' />
              </button>
              <select
                value={currentPage}
                onChange={(e) => {
                  setCurrentPage(Number(e.target.value))
                  scrollToTop()
                }}
                className='px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                aria-label='Select page'
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                  scrollToTop()
                }}
                disabled={currentPage === totalPages}
                className='p-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                aria-label='Next page'
              >
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                scrollToTop()
              }}
              disabled={currentPage === totalPages}
              className='px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCustomer