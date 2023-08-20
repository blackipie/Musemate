
import CardSection from "@/components/sections/Cardsection"
import {SecuritytoolsData} from "@/constants/toolsData"

export default function Home() {
  return (
    <main className="relative flex flex-col items-center p-4 ">
        <CardSection title={"Websec tools"} data={SecuritytoolsData}/>
    </main>
  )
}
