import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
  Spacer,
  Spinner,
} from "@nextui-org/react"

import { Driver } from "../types/driver"
import { useRouter } from "next/navigation"

export default function DriverCard({
  driver,
  overtake,
}: {
  driver: Driver
  overtake: (id: number) => void
}) {
  const router = useRouter()

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt={driver.firstname}
          height={120}
          radius="sm"
          src={driver.image}
          width={120}
        />
        <div className="flex flex-col">
          <p className="text-md">
            {driver.firstname} {driver.lastname}, {driver.country}
          </p>
          <p className="text-small text-default-500">{driver.team}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-2">
          <p className="font-bold">Team</p>
          <p>{driver.team}</p>

          <p className="font-bold">Country</p>
          <p>{driver.country}</p>

          <p className="font-bold">Code</p>
          <p>{driver.code}</p>
        </div>
        <Spacer x={4} y={4} />
        <div className="grid grid-cols-2">
          <p className="font-bold">Position</p>
          <p>{driver.id + 1}</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button
          color="primary"
          onClick={async () => {
            overtake(driver.id)
            router.refresh()
          }}
          isDisabled={driver.id === 0}
        >
          Ovetake next position
        </Button>
      </CardFooter>
    </Card>
  )
}
