import { FormatDate } from "./formatDate.js";

export function outputEntity(data = {}) {
    return {
        child: {
            id: data.child?.id ?? "",
            name: data.child?.name ?? "",
            barangayName: data.child?.barangayName ?? "",
            dateOfBirth:  FormatDate.toLongFormat(data.child?.dateOfBirth) ?? "",
            gender: data.child?.gender ?? ""
        },

        evaluation: {
            dateOfUpload: FormatDate.toLongFormat(data.evaluation?.dateOfUpload) ?? "",
            sourceFile: data.evaluation?.sourceFile ?? "",
            startMonitoringDate:  FormatDate.toLongFormat(data.evaluation?.startMonitoringDate) ?? "",
            startCondition: data.evaluation?.startCondition ?? "",
            recentMonitoringDate:  FormatDate.toLongFormat(data.evaluation?.recentMonitoringDate) ?? "",
            recentCondition: data.evaluation?.recentCondition ?? "",

            trendConclusion: data.evaluation?.trendConclusion ?? "",
            ageAnchorMonths: data.evaluation?.ageAnchorMonths ?? 0,
            evaluationWindowMonths: data.evaluation?.evaluationWindowMonths ?? 0,
            estimatedConditionTimeRange: data.evaluation?.estimatedConditionTimeRange ?? "",
            summary: data.evaluation?.summary ?? ""
        },

        growthPatternSummary: {
            weightForAge: {
                startCondition: data.growthPatternSummary?.weightForAge?.startCondition ?? "",
                endCondition: data.growthPatternSummary?.weightForAge?.endCondition ?? "",
                trendPattern: data.growthPatternSummary?.weightForAge?.trendPattern ?? "",
                interpretation: data.growthPatternSummary?.weightForAge?.interpretation ?? ""
            },
            heightForAge: {
                startCondition: data.growthPatternSummary?.heightForAge?.startCondition ?? "",
                endCondition: data.growthPatternSummary?.heightForAge?.endCondition ?? "",
                trendPattern: data.growthPatternSummary?.heightForAge?.trendPattern ?? "",
                interpretation: data.growthPatternSummary?.heightForAge?.interpretation ?? ""
            },
            weightForLengthHeight: {
                startCondition: data.growthPatternSummary?.weightForLengthHeight?.startCondition ?? "",
                endCondition: data.growthPatternSummary?.weightForLengthHeight?.endCondition ?? "",
                trendPattern: data.growthPatternSummary?.weightForLengthHeight?.trendPattern ?? "",
                interpretation: data.growthPatternSummary?.weightForLengthHeight?.interpretation ?? ""
            }
        },

        monitoringHistory: {
            totalMonths: data.monitoringHistory?.totalMonths ?? 0,
            sequence: Array.isArray(data.monitoringHistory?.sequence)
                ? data.monitoringHistory.sequence.map(o => ({
                    month: o.month,
                    ageInMonths: o.ageInMonths,
                    heightCm: o.heightCm,
                    weightKg: o.weightKg,
                    weightForAge: o.weightForAge,
                    heightForAge: o.heightForAge,
                    weightForLengthHeight: o.weightForLengthHeight
                }))
                : []
        },

        barangayRelativeContext: {
            barangayName: data.barangayRelativeContext?.barangayName ?? "",
            yearEvaluated: data.barangayRelativeContext?.yearEvaluated ?? 0,
            childrenEvaluated: data.barangayRelativeContext?.childrenEvaluated ?? 0,
            patternMatchPercent: data.barangayRelativeContext?.patternMatchPercent ?? 0,
            note: data.barangayRelativeContext?.note ?? ""
        }
    }
}
