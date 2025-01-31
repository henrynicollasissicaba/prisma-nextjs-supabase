import { PlanetForm } from "@/components/PlanetForm";
import { PlanetItem } from "@/components/PlanetItem";
import * as Planet from "@/models/Planet"

export default async function Home(){
    const planets = await Planet.getPlanets()

    return(
        <div className="flex gap-8 m-5 flex-wrap">
            <PlanetForm/>
            {planets.map((planet) => (
                <PlanetItem key={planet.id} planet={planet}/>
            ))}
        </div>
    )
}