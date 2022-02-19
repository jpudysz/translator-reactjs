import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { AutoDetectedLanguage, LanguageCode } from 'lib/models'
import { SelectedLanguages } from './types'
import { useAutoDetectLanguage, useTranslateText } from './actions'

export const useLibreTranslate = () => {
    const [translatedText, setTranslatedText] = useState<string>('')
    const [query, setQuery] = useState<string>('')
    const [autoDetectedLanguage, setAutoDetectedLanguage] = useState<AutoDetectedLanguage>()
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
        source: LanguageCode.Auto,
        target: LanguageCode.Chinese
    })
    const {
        isLoading: isDetectingLanguage,
        hasError: hasErrorDetectingLanguage,
        fetch: autoDetectLanguage
    } = useAutoDetectLanguage(setAutoDetectedLanguage)
    const {
        isLoading: isTranslatingText,
        hasError: hasErrorTranslatingText,
        fetch: translateText
    } = useTranslateText(setTranslatedText)
    const debouncedAction = useDebouncedCallback(
        () => {
            if (query.length < 5) {
                return
            }

            selectedLanguages.source === LanguageCode.Auto
                ? autoDetectLanguage({
                    q: query
                })
                : translateText({
                    q: query,
                    source: selectedLanguages.source,
                    target: selectedLanguages.target,
                    format: 'text'
                })
        },
        1000
    )

    return {
        query,
        setQuery,
        setTranslatedText,
        selectedLanguages,
        setSelectedLanguages,
        debouncedAction,
        isDetectingLanguage,
        hasErrorDetectingLanguage,
        isTranslatingText,
        hasErrorTranslatingText,
        autoDetectedLanguage,
        translatedText,
        setAutoDetectedLanguage
    }
}
