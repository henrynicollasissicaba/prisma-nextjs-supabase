import * as Planet from "@/models/Planet"

export default async function Page({ params }: { params: Promise<{id: string}> }) {
    const id = +(await params).id
    const planet = await Planet.getPlanetById(id)

    return (
        <div className="flex justify-center items-center min-h-screen flex-col gap-6 p-10">
            <h1 className="text-center">{planet?.name}</h1>
            <p>Descrição: {planet?.description}</p>
            <img src={planet?.imageUrl} alt={planet?.name} className="w-[400px] h-[250px] object-cover"/>
        </div>
    )
}