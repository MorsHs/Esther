export async function uploadApi(file) {
    if (!file) {
        return {
            ok: false,
            error: "No file provided"
        }
    }

    const formData = new FormData()
    formData.append("file", file)

    let response
    try {
        response = await fetch("http://127.0.0.1:8000/api/v1/evaluate", {
            method: "POST",
            body: formData
        })
    } catch {
        return {
            ok: false,
            error: "Unable to reach the server"
        }
    }

    let payload
    try {
        payload = await response.json()
    } catch {
        return {
            ok: false,
            error: "Invalid server response"
        }
    }

    if (!response.ok) {
        return {
            ok: false,
            error: payload?.detail || payload?.message || "Evaluation failed"
        }
    }

    return {
        ok: true,
        payload
    }
}
