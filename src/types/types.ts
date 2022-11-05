
export interface IHeaderMenuItem {
    title: string,
    link: string,
    children?: Array<IHeaderMenuItem>,
    isId?: boolean
}