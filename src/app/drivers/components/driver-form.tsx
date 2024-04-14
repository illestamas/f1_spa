"use client"

import { Driver } from "../types/driver"
import DriverCard from "./driver-card"

export default function DriverForm({
  drivers,
  overtake,
}: {
  drivers: Driver[]
  overtake(placeId: number): void
}) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {drivers.map((driver) => (
        <DriverCard key={driver.id} driver={driver} overtake={overtake} />
      ))}
    </div>
  )
}
