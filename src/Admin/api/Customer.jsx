import instance from "../../utils/axios"

export const CreateCustomer = (data) => {
  return instance.post("/customer/create", data, {
    withCredentials: true
  })
}

export const AllCustomer = () => {
  return instance.get("/customer/read", {
    withCredentials: true
  });
}

export const DeletedCustomer = (data) => {
  return instance.delete(`/customer/delete/${data}`, {
    withCredentials: true
  })
}

export const ReadByIdCustomer = (data) => {
  return instance.get(`/customer/read/${data}`, {
    withCredentials: true
  })
}

export const UpdateCustomer = (data) => {
  return instance.put(`/customer/update/${data.id}`, data, {
    withCredentials: true
  })
}

export const StatusChangesCustomer = (data) => {
  return instance.patch(`/customer/status/${data.id}`, { status: data.status }, {
    withCredentials: true
  });
}