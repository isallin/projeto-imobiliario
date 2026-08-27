const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080"

export async function inserirImovel(imovel) {
    const response = await fetch(`${API_URL}/imoveis`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(imovel),
    })

    if (!response.ok) {
        throw new Error("Não foi possível cadastrar o imóvel.")
    }

    return response
}