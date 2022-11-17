
export interface PostProps {
    id: number
    author: {
        avatarUrl: string
        name: string
        role: string
    }
    content: [{
        type: string
        content: string
    }]
    publishedAt: Date
}
