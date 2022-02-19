import { useState } from 'react'
import { AutoDetectedLanguage, Language, LanguageCode } from 'lib/models'
import { APP_CONFIG } from 'lib/config'
import { useTranslations } from 'lib/hooks'
import { SelectedLanguages } from './types'

export const useSupportedLanguages = (
    onSuccess: (languages: Array<Language>) => void
) => {
    const T = useTranslations()
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: () => {
            setLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}/languages`)
                .then(response => {
                    if (response.ok) {
                        return response
                    }

                    throw response
                })
                .then(response => response.json())
                .then(languages => {
                    const allLanguages: Array<Language> = [
                        {
                            code: LanguageCode.Auto,
                            name: T.common.autoTranslate
                        }
                    ].concat(languages)

                    onSuccess(allLanguages)
                })
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }
}

export const useAutoDetectLanguage = (
    onSuccess: (autoDetectedLanguage: AutoDetectedLanguage) => void
) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: (query: string) => {
            setLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}/detect`, {
                method: 'POST',
                body: JSON.stringify({
                    q: query
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response
                    }

                    throw response
                })
                .then(response => response.json())
                .then(([autoDetectLanguage]) => onSuccess(autoDetectLanguage))
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }
}

export const useTranslateText = (
    onSuccess: (translatedText: string) => void
) => {
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: (query: string, selectedLanguages: SelectedLanguages) => {
            setLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}/translate`, {
                method: 'POST',
                body: JSON.stringify({
                    q: query,
                    source: selectedLanguages.source,
                    target: selectedLanguages.target,
                    format: 'text'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response
                    }

                    throw response
                })
                .then(response => response.json())
                .then(({ translatedText }) => onSuccess(translatedText))
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }
}
