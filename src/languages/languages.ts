import {UserDictionary} from "../interfaces/UserDictionary.ts";

const dictionaries: Record<string, UserDictionary> = {
    'ES-MX': {
        openButtonCard: 'Abrir',
        openButton: 'Abrir',
        deleteButton: "Borrar",
        saveButton: "Guardar",
        optionsButton: "Opciones",
        placeholderSelectLanguage: "Seleccionar idioma",
        placeholderSelectLayout: "Seleccionar diseño",
        cancelButton: "Cancelar",
        languageOptions: [
            {
                value: "Español",
                key: "ES-MX"
            },
            {
                value: "Inglés",
                key: "EN-US"
            },
            {
                value: "Francés",
                key: "FR-FR"
            },
            {
                value: "Portugués",
                key: "PT-BR"
            }
        ],
        layoutOptions: [
            {
                value: "Extendido",
                key: "EXTENDED"
            },
            {
                value: "Simple",
                key: "SIMPLE"
            }
        ],
        themeOptions: [
            {
                value: "Claro",
                key: "LIGHT"
            },
            {
                value: "Oscuro",
                key: "DARK"
            }
        ],
        simplesaveButton: "Guardar Tabs",
        simpleOpenButton: "Reabrir Tabs",
        simpleDeleteButton: "Borrar Tabs",
        simpleSucessMessage: "Tabs guardados",
        simpleReopenTabsMessage: "Tabs abiertos",
        simpleDeleteTabsMessage: "Tabs borrados",
        rebooksPromotionMessage: "Nuevo lanzamiento: ¡Rebooks!"
    },
    'EN-US': {
        openButtonCard: 'Open',
        openButton: 'Reopen',
        deleteButton: "Delete",
        saveButton: "Save",
        optionsButton: "Options",
        placeholderSelectLanguage: "Select language",
        placeholderSelectLayout: "Select layout",
        cancelButton: "Cancel",
        languageOptions: [
            {
                value: "Spanish",
                key: "ES-MX"
            },
            {
                value: "English",
                key: "EN-US"
            },
            {
                value: "French",
                key: "FR-FR"
            },
            {
                value: "Portuguese",
                key: "PT-BR"
            }
        ],
        layoutOptions: [
            {
                value: "Extended",
                key: "EXTENDED"
            },
            {
                value: "Simple",
                key: "SIMPLE"
            }
        ],
        themeOptions: [
            {
                value: "Light",
                key: "LIGHT"
            },
            {
                value: "Dark",
                key: "DARK"
            }
        ],
        simplesaveButton: "Save current Tabs",
        simpleOpenButton: "Reopen Tabs",
        simpleDeleteButton: "Delete Tabs",
        simpleSucessMessage: "Tabs saved",
        simpleReopenTabsMessage: "Tabs opened",
        simpleDeleteTabsMessage: "Tabs deleted",
        rebooksPromotionMessage: "Try our new extension Rebooks!"
    },
    'FR-FR': {
        openButtonCard: 'Ouvrir',
        openButton: 'Réouvrir',
        deleteButton: "Supprimer",
        saveButton: "Sauvegarder",
        optionsButton: "Paramètres",
        placeholderSelectLanguage: "Sélectionner la langue",
        placeholderSelectLayout: "Sélectionner la mise en page",
        cancelButton: "Annuler",
        languageOptions: [
            {
                value: "Espagnol",
                key: "ES-MX"
            },
            {
                value: "Anglais",
                key: "EN-US"
            },
            {
                value: "français",
                key: "FR-FR"
            },
            {
                value: "Portugais",
                key: "PT-BR"
            }
        ],
        layoutOptions: [
            {
                value: "Étendu",
                key: "EXTENDED"
            },
            {
                value: "Simple",
                key: "SIMPLE"
            }
        ],
        themeOptions: [
            {
                value: "Clair",
                key: "LIGHT"
            },
            {
                value: "Sombre",
                key: "DARK"
            }
        ],
        simplesaveButton: "Sauvegarder les onglets",
        simpleOpenButton: "Réouvrir les onglets",
        simpleDeleteButton: "Supprimer les onglets",
        simpleSucessMessage: "Les onglets ont été enregistrés",
        simpleReopenTabsMessage: "Les onglets ont été réouverts",
        simpleDeleteTabsMessage: "Les onglets ont été supprimés",
        rebooksPromotionMessage: "Nouveau lancement: ¡Rebooks!"
    },
    // Portuguese
    'PT-BR': {
        openButtonCard: 'Abrir',
        openButton: 'Abrir',
        deleteButton: "Eliminar",
        saveButton: "Salvar",
        optionsButton: "Opções",
        placeholderSelectLanguage: "Selecione o idioma",
        placeholderSelectLayout: "Selecione o layout",
        cancelButton: "Cancelar",
        languageOptions: [
            {
                value: "Espanhol",
                key: "ES-MX"
            },
            {
                value: "Inglês",
                key: "EN-US"
            },
            {
                value: "Francês",
                key: "FR-FR"
            },
            {
                value: "Português",
                key: "PT-BR"
            }
        ],
        layoutOptions: [
            {
                value: "Estendido",
                key: "EXTENDED"
            },
            {
                value: "Simples",
                key: "SIMPLE"
            }
        ],
        themeOptions: [
            {
                value: "Claro",
                key: "LIGHT"
            },
            {
                value: "Escuro",
                key: "DARK"
            }
        ],
        simplesaveButton: "Salvar abas",
        simpleOpenButton: "Reabrir abas",
        simpleDeleteButton: "Eliminar abas",
        simpleSucessMessage: "Abas salvas",
        simpleReopenTabsMessage: "Abas reabertas",
        simpleDeleteTabsMessage: "Abas apagadas",
        rebooksPromotionMessage: "Novo lançamento: ¡Rebooks!"
    }
}

export default dictionaries;
