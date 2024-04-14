import React from "react"
import DriverForm from "./components/driver-form"
import axios from "axios"

import { Driver } from "./types/driver"

async function getDrivers() {
  "use server"
  const response = await axios.get("http://localhost:3001/api/drivers")
  const drivers: Driver[] = response.data.sort(
    (a: Driver, b: Driver) => a.id - b.id
  )
  return drivers
}

async function overtake(id: number) {
  "use server"
  await axios.post(`http://localhost:3001/api/drivers/${id}/overtake`)
}

export default async function Drivers() {
  const drivers = await getDrivers()

  for (const driver of drivers) {
    const params = {
      code: driver.code,
    }
    const imageResponse = await axios.get(
      "http://localhost:3001/api/drivers/image",
      { params }
    )

    driver.image = imageResponse.data?.imageUrl
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DriverForm drivers={drivers} overtake={overtake} />
    </main>
  )
}
