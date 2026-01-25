import instance from "../../utils/axios"

export const createBooking = (data) => {
    return instance.post('/booking/create', data, {
        withCredentials: true
    })
}

export const allBooking = () => {
    return instance.get('/booking/fetch',  {
        withCredentials: true
    })
}

export const DetailsBooking = (bookingsId) => {
    return instance.get(`/booking/fetch/${bookingsId}`, {
        withCredentials: true
    })
}

export const UpdatedBooking = (data) => {
    return instance.put(`/booking/update/${data._id}`, data, {
        withCredentials: true
    })
}

//2:00 to 5:00 tak