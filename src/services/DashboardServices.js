import React, { Component } from 'react'
import { baseServices } from './baseServices'

export class DashboardServices extends baseServices {
  getUserList = () => {
    return this.get("/api/users")
  }
  getUserById = (id) => {
    return this.get(`/api/users/${id}`)
  }
  addUser = (data) => {
    return this.post("/api/users",data)
  }
  updateUser = (id,data) => {
    return this.put(`/api/users/${id}`,data)
  }
  deleteUser = (id) => {
    return this.delete(`/api/users?id=${id}`)
  }
}
export const dashboardServices = new DashboardServices()