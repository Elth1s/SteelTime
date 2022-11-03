import 'i18next';
import uk from '../translation/uk/uk.json'

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: "common",
        resources: typeof uk;
    }
}