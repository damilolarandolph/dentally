import Layout from '../components/layout'
import useSWR from 'swr'
import AppointmentStatistics from '../components/appointment-statistics/appointment-statistics'


async function fetcherFunc(url) {
  console.log("Args are ", url)
  const res = await fetch(url)
  return await res.json()
}


export default function Home() {
  return <AppointmentStatistics />
}


