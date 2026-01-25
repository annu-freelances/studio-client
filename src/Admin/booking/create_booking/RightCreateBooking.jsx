import React, { useRef, useState, useCallback } from 'react';
import TopNavigation from '../../../components/TopNavigation';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar1,
  CalendarDays,
  Code,
  IndianRupee,
  Info,
  Save,
  Type,
} from 'lucide-react';
import { createBooking } from '../../api/Booking';
import { useDispatch } from 'react-redux';
import { addBooking } from '../../../redux/reducer/BookingSlice';

const validateInputs = ({ bookingSource, serviceType, price, bookingDate }) => {
  const errors = {};
  if (!bookingSource?.trim()) errors.bookingSource = 'Booking source is required.';
  if (!serviceType?.trim()) errors.serviceType = 'Service type is required.';
  if (!bookingDate) errors.bookingDate = 'Booking date is required.';
  if (price === null || price === '' || isNaN(price) || Number(price) < 0)
    errors.price = 'Valid price is required.';
  return errors;
};

const RightCreateBooking = () => {
  const scrollContainerRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({
    bookingSource: '',
    serviceType: '',
    price: '',
    bookingDate: '',
  });
  const [formErrors, setFormErrors] = useState({});


  const handleInputChange = useCallback((e) => {
    const { name, value, type } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: type === 'number' ? value.replace(/[^0-9.]/g, '') : value,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const createBookingApi = useCallback(async () => {
    setIsSubmitting(true);
    setFormErrors({});
    const errors = validateInputs(inputValue);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const bookingPayload = {
        ...inputValue,
        price: Number(inputValue.price),
      };
      const response = await createBooking(bookingPayload);

      if (
        !response ||
        !response.data ||
        !response.data.success ||
        !response.data.data
      ) {
        throw new Error(
          response?.data?.message ||
            'Unexpected error occurred while creating booking.'
        );
      }

      dispatch(addBooking(response.data.data));

      setInputValue({
        bookingSource: '',
        serviceType: '',
        price: '',
        bookingDate: '',
      });

      navigate('/admin/booking');
    } catch (error) {
      console.error('Error creating booking:', error);
      window.alert(error?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [dispatch, inputValue, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isSubmitting) {
      createBookingApi();
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 bg-gray-100 h-screen overflow-y-auto"
      style={{ scrollBehavior: 'smooth' }}
      data-testid="RightCreateBooking-root"
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
              Add New Booking
            </span>
          </div>
        </div>

        <div className="bg-white rounded shadow py-3 px-4">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Calendar1 className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                Add New Booking
              </h1>
            </div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-800">
              Fill in the details below to create a new Booking. A unique ID
              will be generated automatically.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="bookingSource"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                >
                  <Code className="w-4 h-4 text-gray-500" />
                  Booking Source
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="bookingSource"
                  name="bookingSource"
                  value={inputValue.bookingSource}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${
                    formErrors.bookingSource ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter Booking Source"
                  required
                  aria-invalid={!!formErrors.bookingSource}
                  aria-describedby={
                    formErrors.bookingSource ? 'bookingSource-error' : undefined
                  }
                />
                {formErrors.bookingSource && (
                  <span
                    className="text-xs text-red-600 italic"
                    id="bookingSource-error"
                  >
                    {formErrors.bookingSource}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="serviceType"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                >
                  <Type className="w-4 h-4 text-gray-500" />
                  Service Type
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="serviceType"
                  name="serviceType"
                  value={inputValue.serviceType}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${
                    formErrors.serviceType ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter Service Type"
                  required
                  aria-invalid={!!formErrors.serviceType}
                  aria-describedby={
                    formErrors.serviceType ? 'serviceType-error' : undefined
                  }
                />
                {formErrors.serviceType && (
                  <span
                    className="text-xs text-red-600 italic"
                    id="serviceType-error"
                  >
                    {formErrors.serviceType}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="bookingDate"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                >
                  <CalendarDays className="w-4 h-4 text-gray-500" />
                  Booking Date
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  name="bookingDate"
                  value={inputValue.bookingDate}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${
                    formErrors.bookingDate ? 'border-red-500' : ''
                  }`}
                  required
                  autoComplete="off"
                  inputMode="none"
                  aria-invalid={!!formErrors.bookingDate}
                  aria-describedby={
                    formErrors.bookingDate ? 'bookingDate-error' : undefined
                  }
                  min={new Date().toISOString().slice(0, 10)}
                />
                {formErrors.bookingDate && (
                  <span
                    className="text-xs text-red-600 italic"
                    id="bookingDate-error"
                  >
                    {formErrors.bookingDate}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1"
                >
                  <IndianRupee className="w-4 h-4 text-gray-500" />
                  Price
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  autoComplete="off"
                  value={inputValue.price}
                  onChange={handleInputChange}
                  className={`w-full border rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 ${
                    formErrors.price ? 'border-red-500' : ''
                  }`}
                  placeholder="Enter Price"
                  required
                  aria-label="Price"
                  aria-invalid={!!formErrors.price}
                  aria-describedby={formErrors.price ? 'price-error' : undefined}
                />
                {formErrors.price && (
                  <span
                    className="text-xs text-red-600 italic"
                    id="price-error"
                  >
                    {formErrors.price}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 cursor-pointer text-white px-6 py-2.5 rounded-md flex items-center gap-2 font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                aria-busy={isSubmitting}
                aria-disabled={isSubmitting}
              >
                <Save className="w-4 h-4" />
                {isSubmitting ? (
                  <span className="inline-block w-4 h-4 ml-2 border-b-2 border-t-2 border-white rounded-full animate-spin"></span>
                ) : (
                  'Create Booking'
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
      </div>
    </div>
  );
};

export default RightCreateBooking;
