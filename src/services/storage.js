import { create } from "zustand"
import { persist } from "zustand/middleware"

/**
 * Client-side persistent storage (localStorage)
 * Stores evaluation entities only.
 */
export const useEvaluationStorage = create(
    persist(
        (set, get) => ({
            records: {},

            // ----------------------------
            // Mutations
            // ----------------------------
            save(record) {
                if (!record?.child?.id) return

                set(state => {
                    const id = record.child.id
                    const prev = state.records[id] || []

                    return {
                        records: {
                            ...state.records,
                            [id]: [...prev, record]
                        }
                    }
                })
            },

            remove(id) {
                set(state => {
                    const copy = { ...state.records }
                    delete copy[id]
                    return { records: copy }
                })
            },

            clear() {
                set({ records: {} })
            },

            // ----------------------------
            // Selectors
            // ----------------------------
            getById(id) {
                return get().records[id] || null
            },

            getAll() {
                return Object.values(get().records)
            }
        }),
        {
            name: "evaluation-storage", // 🔑 localStorage key
            storage: {
                getItem: (key) => {
                    const value = localStorage.getItem(key)
                    return value ? JSON.parse(value) : null
                },
                setItem: (key, value) => {
                    localStorage.setItem(key, JSON.stringify(value))
                },
                removeItem: (key) => {
                    localStorage.removeItem(key)
                }
            }
        }
    )
)
