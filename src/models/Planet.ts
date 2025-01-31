import { prisma } from "@/database/prisma-client"

export interface Planet {
    id: number
    name: string
    description: string
    imageUrl: string
}

export interface CreatePlanetParams {
    name: string
    description: string
    imageUrl: string
}

export async function getPlanets(){
    const planets: Planet[] = await prisma.planet.findMany()
    return planets
}

export async function getPlanetById(id: number){
    const planet = await prisma.planet.findUnique({ where: { id: id } })
    return planet
}

export async function createPlanet({ name, description, imageUrl }: CreatePlanetParams){
    await prisma.planet.create({
        data: {
            name: name, 
            description: description,
            imageUrl: imageUrl
        }
    })
}

export async function deletePlanet(id: number){
    await prisma.planet.delete({ where: { id: id } })
}