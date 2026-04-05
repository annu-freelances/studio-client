import React, { useEffect, useRef, useState, useCallback } from 'react';
import TopNavigation from '../../../components/TopNavigation';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {
  BetweenVerticalEnd,
  CalendarDays,
  IndianRupee,
  Info,
  NotebookPen,
  Save,
  Type,
} from 'lucide-react';
import { DetailsBooking, UpdatedBooking } from '../../api/Booking';

const RightUpdateBooking = () => {
  const { bookingsId } = useParams();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    serviceType: '',
    price: '',
    adminNotes: '',
    bookingSlot: ''
  });

  const validateForm = (data) => {
    const errors = {};
    if (!data.serviceType || data.serviceType.trim().length === 0) errors.serviceType = 'Service Type is required';
    if (!data.price && data.price !== 0) errors.price = 'Price is required';
    else if (isNaN(data.price) || Number(data.price) < 0) errors.price = 'Price must be a positive number';
    if (!data.adminNotes || data.adminNotes.trim().length === 0) errors.adminNotes = 'Admin Notes required';
    if (!data.bookingSlot || data.bookingSlot.trim().length === 0) errors.bookingSlot = 'Booking Slot is required';
    return errors;
  };

  const fetchSingleBooking = useCallback(async () => {
    setSubmitError('');
    try {
      const result = await DetailsBooking(bookingsId);
      const data = result?.data?.data;
      if (data) {
        setFormData({
          serviceType: data.serviceType || '',
          price: data.price ?? '',
          adminNotes: data.adminNotes || '',
          bookingSlot: data.bookingSlot || ''
        });
      }
    } catch (error) {
      setSubmitError('Failed to fetch booking details, please try again.');
    }
  }, [bookingsId]);

  useEffect(() => {
    fetchSingleBooking();
  }, [fetchSingleBooking]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' ? value.replace(/[^0-9.]/g, '') : value
    }));
    setFormErrors((prev) => ({
      ...prev,
      [name]: undefined
    }));
  };

  const handleUpdateBooking = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }
    try {
      const payload = {
        ...formData,
        _id: bookingsId
      };
      await UpdatedBooking(payload);
      navigate("/admin/booking");
    } catch (error) {
      setSubmitError(
        error?.response?.data?.message ||
          'Update failed, please try again.'
      );
    }
    setLoading(false);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 bg-gray-100 h-screen overflow-y-auto"
      style={{ scrollBehavior: 'smooth' }}
    >
      <style>{`
        * { scroll-behavior: smooth; }
        html { scroll-behavior: smooth; }
      `}</style>
      <TopNavigation />
      <div className="py-3 px-5">
        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link
              to="/admin/booking"
              className="text-zinc-400 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              Booking Management
            </Link>
            <span className="font-bold">{'>'}</span>
            <span className="text-zinc-700 cursor-pointer font-semibold">
              Update Booking
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between w-full">
          <div className="w-[68%] bg-white rounded py-3 px-4 shadow">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-6 h-6 text-gray-600" />
                <h1 className="text-2xl font-bold text-gray-800">
                  Update Booking
                </h1>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">
                Fill in the details below to update an existing booking. Fields marked with <span className="text-red-500">*</span> are required.
              </p>
            </div>
            {submitError && (
              <div className="bg-red-100 text-red-700 rounded p-3 mb-3 text-sm border border-red-300">
                {submitError}
              </div>
            )}
            <form onSubmit={handleUpdateBooking} autoComplete="off">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="serviceType"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                  >
                    <Type className="w-4 h-4 text-gray-500" />
                    Service Type<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${formErrors.serviceType ? 'border-red-500' : ''}`}
                    placeholder="Enter Service Type"
                    required
                    aria-invalid={!!formErrors.serviceType}
                    aria-describedby={formErrors.serviceType ? 'serviceType-error' : undefined}
                  />
                  {formErrors.serviceType && (
                    <span className="text-xs text-red-600 italic" id="serviceType-error">
                      {formErrors.serviceType}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                  >
                    <IndianRupee className="w-4 h-4 text-gray-500" />
                    Price<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    inputMode="decimal"
                    value={formData.price}
                    min={0}
                    step="0.01"
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${formErrors.price ? 'border-red-500' : ''}`}
                    placeholder="Enter Price"
                    required
                    aria-invalid={!!formErrors.price}
                    aria-describedby={formErrors.price ? 'price-error' : undefined}
                  />
                  {formErrors.price && (
                    <span className="text-xs text-red-600 italic" id="price-error">
                      {formErrors.price}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="adminNotes"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                  >
                    <NotebookPen className="w-4 h-4 text-gray-500" />
                    Admin Notes<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="adminNotes"
                    name="adminNotes"
                    value={formData.adminNotes}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${formErrors.adminNotes ? 'border-red-500' : ''}`}
                    placeholder="Enter Admin Notes"
                    required
                    aria-invalid={!!formErrors.adminNotes}
                    aria-describedby={formErrors.adminNotes ? 'adminNotes-error' : undefined}
                    autoComplete="off"
                  />
                  {formErrors.adminNotes && (
                    <span className="text-xs text-red-600 italic" id="adminNotes-error">
                      {formErrors.adminNotes}
                    </span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="bookingSlot"
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                  >
                    <BetweenVerticalEnd className="w-4 h-4 text-gray-500" />
                    Booking Slot<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="bookingSlot"
                    name="bookingSlot"
                    value={formData.bookingSlot}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${formErrors.bookingSlot ? 'border-red-500' : ''}`}
                    placeholder="Enter Booking Slot"
                    required
                    aria-label="Booking Slot"
                    aria-invalid={!!formErrors.bookingSlot}
                    aria-describedby={formErrors.bookingSlot ? 'bookingSlot-error' : undefined}
                    autoComplete="off"
                  />
                  {formErrors.bookingSlot && (
                    <span className="text-xs text-red-600 italic" id="bookingSlot-error">
                      {formErrors.bookingSlot}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-md flex items-center gap-2 font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                  aria-disabled={loading}
                >
                  <Save className="w-4 h-4" />
                  {loading ? (
                    <>
                      <span className="w-4 h-4 animate-spin border-b-2 border-t-2 border-white rounded-full inline-block"></span>
                      Saving...
                    </>
                  ) : (
                    'Update Booking'
                  )}
                </button>
                <Link
                  to="/admin/booking"
                  className="bg-white text-gray-700 px-6 py-2.5 rounded-md border border-gray-300 flex items-center gap-2 font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
          <div className="py-3 px-4 w-[31%] rounded bg-white shadow">
            <p className='text-sm text-center font-semibold text-zinc-400'>First booking, then details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightUpdateBooking;
