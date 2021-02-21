import { HiClock, HiOfficeBuilding, HiPhone } from 'react-icons/hi'
import useSWR from 'swr'
import AppointmentStatistics from '../components/appointment-statistics/appointment-statistics'
import { AppointmentSnippet, Card, SplitCard } from '../components/cards/card'
import { ThreeCardLayout } from '../components/cards/card-layout'
import { CardText, Attention, CardTextList } from '../components/cards/card-text'


async function fetcherFunc(url) {
  console.log("Args are ", url)
  const res = await fetch(url)
  return await res.json()
}


export default function Home() {
  return <div className="flex flex-col">
    <div className="flex justify-items-stretch">
      <div className="flex-grow p-5">
        <AppointmentStatistics />
      </div>
      <div className="w-2/5 p-5 ">
        <ThreeCardLayout >
          <Card title="Approval Request" onMoreButtonClick={() => { console.log("hello") }}>
            <CardText title="26" subtitle="Request waiting to approve" attention={Attention.NONE} />
          </Card>
          <Card title="Upcoming Appointments" onMoreButtonClick={() => { console.log("hello") }}>
            <CardText title="26" attention={Attention.NONE} />
          </Card>
          <Card title="Approval Request" onMoreButtonClick={() => { console.log("hello") }}>
            <CardTextList attention={Attention.NONE}>
              <CardTextList.Item icon={<HiOfficeBuilding />}>
                Address
              </CardTextList.Item>
              <CardTextList.Item icon={<HiPhone />}>
                Phone Number
              </CardTextList.Item>
            </CardTextList>
          </Card>
        </ThreeCardLayout>
      </div>
    </div>
    <ul className="flex p-5">
      <li className="w-full mr-5">
        <SplitCard title="Approval Request" onMoreButtonClick={() => { console.log("hello") }}>
          <CardText title="26" attention={Attention.NONE} />
          <div>
            <AppointmentSnippet title="Treatment" fromTime="09:00" toTime="10:00">
              Consulting
            </AppointmentSnippet>
            <AppointmentSnippet title="Treatment" fromTime="09:00" toTime="10:00">
              Consulting
            </AppointmentSnippet>
            <AppointmentSnippet title="Treatment" fromTime="09:00" toTime="10:00">
              Consulting
            </AppointmentSnippet>
          </div>
        </SplitCard>
      </li>
      <li className="w-full mr-5">
        <Card title="Top Treatment" onMoreButtonClick={() => { console.log("hello") }}>
          <CardTextList>
            <CardTextList.Item >
              Consultation
              </CardTextList.Item>
            <CardTextList.Item >
              Scaling
              </CardTextList.Item>
            <CardTextList.Item>
              Root Canal
              </CardTextList.Item>
          </CardTextList>
        </Card>
      </li>
      <li className="w-full mr-5">
        <Card title={["Total Patients this month", "Total Patients of all time"]} onMoreButtonClick={() => { }}>

          <CardText title="26" attention={Attention.NONE} />

          <CardText title="26" attention={Attention.NONE} />
        </Card>
      </li>
      <li className="w-full">
        <Card title={["Jaspel"]} onMoreButtonClick={() => { }}>

          <CardText title="$23,000" subtitle="This month so far" attention={Attention.TITLE} />

          <CardText title="$35,000" subtitle="Last Month" attention={Attention.TITLE} />
        </Card>
      </li>
    </ul>
  </div>
}


