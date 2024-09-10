import Cta from "../../components/home/cta"
import Features from "../../components/home/features"
import Hero from "../../components/home/hero"
import Main from "../../components/home/main"
import Points from "../../components/home/points"
import View from "../../components/home/view"

const Home = () => {
  return (
   <div>
    <Hero />
    <View />
    <Main />
    <Points />
    <Features />
    <Cta />
   </div>
  )
}

export default Home