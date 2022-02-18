export type Dictionary = {
    common: {
        autoTranslate: string,
        companyName: string,
    },
    components: {
        app: {
            loading: string,
            error: string,
            empty: string
        },
        header: {
            title: string,
            github: string,
            discord: string
        },
        footer: {
            flatIcon: string,
            libreTranslate: string
        },
        message: {
            tryAgain: string
        },
        confidence: {
            error: string
        }
    },
    screens: {
        translator: {
            sourceInputPlaceholder: string
        }
    }
}
