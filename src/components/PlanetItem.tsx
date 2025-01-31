'use client'

import { deletePlanetAction } from "@/actions/planets-action"
import { Planet } from "@/models/Planet"
import Link from "next/link"

export interface PlanetItemProps {
    planet: Planet
}

export function PlanetItem({ planet }: PlanetItemProps){
    return(
        <div className="border border-cyan-400 p-4 relative w-96">
            <h2>{planet.name}</h2>
            <img src={planet.imageUrl} alt={planet.name} style={{objectFit: 'cover'}} className="w-[320px] h-[180px]"/>
            <p>{planet.description}</p>
            <div className="flex gap-4 mt-4">
                <button 
                    type="button"
                    onClick={() => deletePlanetAction(planet.id)}
                    className="bg-red-400 text-white border-none cursor-pointer p-2"
                >
                    Excluir
                </button>
                <Link
                    href={`/planets/${planet.id}`}
                    className="bg-cyan-400 text-black border-none cursor-pointer p-2"
                >
                    Mais informações
                </Link>
            </div>
        </div>
    )
}