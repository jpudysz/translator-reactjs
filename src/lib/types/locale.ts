export type Dictionary = {
    common: {
        autoTranslate: string
    },
    companyName: string,
    components: {
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
        }
    },
    screen: {
        translator: {
            loading: string,
            error: string,
            empty: string
        }
    }
}
