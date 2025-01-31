import { createPlanetAction } from "@/actions/planets-action";

export function PlanetForm(){
    return(
        <form action={createPlanetAction}>
            <div>
                <label htmlFor="name" className="font-bold">Nome</label>
                <input type="text" name="name" id="name" required className="bg-[#333] border border-[#333] block my-2 mb-4 p-4 w-96"/>
            </div>

            <div>
                <label htmlFor="description" className="font-bold">Descrição</label>
                <textarea name="description" id="description" required className="bg-[#333] border border-[#333] block my-2 mb-4 p-4 w-96"></textarea>
            </div>

            <div>
                <label htmlFor="imageUrl" className="font-bold">Imagem (URL)</label>
                <input type="text" name="imageUrl" id="imageUrl" required className="bg-[#333] border border-[#333] block my-2 mb-4 p-4 w-96"/>
            </div>

            <div>
                <button type="submit" className="bg-[#009fff] border-none text-[#0a0a0a] cursor-pointer block font-bold py-4 px-6">Adicionar Planeta</button>
            </div>
        </form>
    )
}