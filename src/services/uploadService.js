import { useEvaluationStorage } from "./storage.js"
import { uploadApi } from "./uploadApi.js"
import { outputEntity } from "./entity.js"

export async function handleUpload(file) {
    const result = await uploadApi(file)

    if (!result.ok) {
        return {
            success: false,
            error: result.error
        }
    }

    const entity = outputEntity(result.payload.data)
    useEvaluationStorage.getState().save(entity)

    return {
        success: true,
        entity
    }
}
