export interface Image {
    src?: string
    alt?: string
}

export interface SortLinks {
    [name: string]: string
}

export interface FileLink {
    image?: Image
    isImage: boolean
    emoji?: string
    name: string
    extension?: string
    lastModifiedDate: Date
    lastModified: string
    lastModifiedRelative: string
    space?: {
        size: number
        units: string
    }
    description?: string
    href: string
    virtualPath: string[]
}

export interface PageData {
    title: string
    sortLinks: SortLinks
    fileLinks: FileLink[]
}
